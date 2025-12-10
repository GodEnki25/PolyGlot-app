import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OnboardingService } from '../services/onboardingServices';
import { saveUserProfile } from '../services/userProfile';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: 'beginner' | 'intermediate' | 'expert';
}

const spanishQuestions: Question[] = [
  {
    question: 'What does "hola" mean?',
    options: ['Goodbye', 'Hello', 'Thank you', 'Please'],
    correctAnswer: 'Hello',
    difficulty: 'beginner',
  },
  {
    question: 'Translate: "I am eating"',
    options: ['Yo como', 'Yo estoy comiendo', 'Yo comí', 'Yo comeré'],
    correctAnswer: 'Yo estoy comiendo',
    difficulty: 'intermediate',
  },
  {
    question: 'What is the subjunctive form of "ir" (to go) for "yo"?',
    options: ['voy', 'vaya', 'fui', 'iré'],
    correctAnswer: 'vaya',
    difficulty: 'expert',
  },
];

const frenchQuestions: Question[] = [
  {
    question: 'What does "bonjour" mean?',
    options: ['Goodbye', 'Hello', 'Thank you', 'Please'],
    correctAnswer: 'Hello',
    difficulty: 'beginner',
  },
  {
    question: 'Translate: "I am eating"',
    options: ['Je mange', 'Je suis mangeant', 'Je mangeais', 'Je mangerai'],
    correctAnswer: 'Je mange',
    difficulty: 'intermediate',
  },
  {
    question: 'What is the correct form of "avoir" in passé composé for "nous"?',
    options: ['nous avons eu', 'nous avions', 'nous aurons', 'nous ayons'],
    correctAnswer: 'nous avons eu',
    difficulty: 'expert',
  },
];

const englishQuestions: Question[] = [
  {
    question: 'What is the past tense of "go"?',
    options: ['goed', 'went', 'gone', 'going'],
    correctAnswer: 'went',
    difficulty: 'beginner',
  },
  {
    question: 'Choose the correct sentence:',
    options: [
      'She don\'t like pizza',
      'She doesn\'t likes pizza',
      'She doesn\'t like pizza',
      'She not like pizza'
    ],
    correctAnswer: 'She doesn\'t like pizza',
    difficulty: 'intermediate',
  },
  {
    question: 'Which sentence uses the subjunctive mood correctly?',
    options: [
      'I wish I was taller',
      'I wish I were taller',
      'I wish I am taller',
      'I wish I be taller'
    ],
    correctAnswer: 'I wish I were taller',
    difficulty: 'expert',
  },
];

export default function SkillTest() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const language = params.language as 'spanish' | 'french' | 'english';
  
  const questions = 
    language === 'spanish' ? spanishQuestions : 
    language === 'french' ? frenchQuestions :
    englishQuestions;
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = async () => {
    if (!selectedAnswer || isProcessing) return;

    setIsProcessing(true);
    
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const newCorrectAnswers = correctAnswers + (isCorrect ? 1 : 0);
    
    console.log('Answer:', selectedAnswer);
    console.log('Correct Answer:', currentQuestion.correctAnswer);
    console.log('Is Correct:', isCorrect);
    console.log('Total Correct:', newCorrectAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCorrectAnswers(newCorrectAnswers);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsProcessing(false);
    } else {
      const skillLevel = determineSkillLevel(newCorrectAnswers, questions.length);
      console.log('Final Score:', newCorrectAnswers, '/', questions.length);
      console.log('Skill Level:', skillLevel);
      await completeOnboarding(skillLevel);
    }
  };

  const determineSkillLevel = (correct: number, total: number): 'beginner' | 'intermediate' | 'expert' => {
    const percentage = (correct / total) * 100;
    console.log('Percentage:', percentage);
    
    if (percentage >= 80) return 'expert';
    if (percentage >= 50) return 'intermediate';
    return 'beginner';
  };

  const completeOnboarding = async (skillLevel: 'beginner' | 'intermediate' | 'expert') => {
    const profile = {
      targetLanguage: language,
      skillLevel,
      hasCompletedOnboarding: true,
      createdAt: new Date().toISOString(),
    };
    await saveUserProfile(profile);
    
    await OnboardingService.saveOnboardingData({
      language: language,
      level: skillLevel,
      score: correctAnswers
    });
    
    // Navigate to complete screen
    router.push({
      pathname: '/onboarding/complete',
      params: { skillLevel, language },
    });
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${33 + (progress * 0.33)}%` }]} />
      </View>

      <Text style={styles.stepText}>Step 2 of 3</Text>
      <Text style={styles.title}>Quick Skill Assessment</Text>
      
      <Text style={styles.questionCounter}>
        Question {currentQuestionIndex + 1} of {questions.length}
      </Text>

      <View style={styles.questionCard}>
        <Text style={styles.question}>{currentQuestion.question}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswer === option && styles.selectedOption,
            ]}
            onPress={() => handleAnswerSelect(option)}
          >
            <Text
              style={[
                styles.optionText,
                selectedAnswer === option && styles.selectedOptionText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.nextButton,
          (!selectedAnswer || isProcessing) && styles.nextButtonDisabled,
        ]}
        onPress={handleNext}
        disabled={!selectedAnswer || isProcessing}
      >
        <Text style={styles.nextButtonText}>
          {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next →'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9A9F5',
    padding: 20,
    paddingTop: 60,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#fff',
    borderRadius: 3,
    marginBottom: 10,
    opacity: 0.3,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFA500',
    borderRadius: 3,
  },
  stepText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    color: '#FFA500',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  questionCounter: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  questionCard: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    marginBottom: 30,
  },
  question: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedOption: {
    borderColor: '#FFA500',
    backgroundColor: '#FFF5E6',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  selectedOptionText: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#FFA500',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextButtonDisabled: {
    backgroundColor: '#ccc',
  },
  nextButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});