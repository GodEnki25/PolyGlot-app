// app/EnglishQuiz.tsx
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const QUESTIONS = [
  {
    question: 'What is "Manzana" in English?',
    options: ['Banana', 'Apple', 'Book', 'Dog'],
    answerIndex: 1,
  },
  {
    question: 'What is "Libro" in English?',
    options: ['Car', 'Dog', 'Book', 'Banana'],
    answerIndex: 2,
  },
  {
    question: 'What is "Perro" in English?',
    options: ['Dog', 'Car', 'Cat', 'Book'],
    answerIndex: 0,
  },
];

export default function EnglishQuizScreen() {
  const router = useRouter() as any;
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = QUESTIONS[current];

  const handleOptionPress = (index: number) => {
    setSelected(index);
  };

  const handleNext = () => {
    if (selected === q.answerIndex) {
      setScore(s => s + 1);
    }

    if (current + 1 === QUESTIONS.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>English Quiz</Text>

      {finished ? (
        <>
          <Text style={styles.resultText}>
            You scored {score} / {QUESTIONS.length}
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleRestart}>
            <Text style={styles.buttonText}>Retake Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Text style={styles.backBtnText}>Back</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.questionText}>{q.question}</Text>

          {q.options.map((opt, i) => {
            const isSelected = selected === i;
            return (
              <TouchableOpacity
                key={i}
                style={[styles.option, isSelected && styles.optionSelected]}
                onPress={() => handleOptionPress(i)}
              >
                <Text style={styles.optionText}>{opt}</Text>
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity
            style={[styles.button, selected === null && styles.buttonDisabled]}
            onPress={handleNext}
            disabled={selected === null}
          >
            <Text style={styles.buttonText}>
              {current + 1 === QUESTIONS.length ? 'Finish' : 'Next'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Text style={styles.backBtnText}>Back</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  header: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: '700',
  },
  questionText: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 16,
  },
  option: {
    backgroundColor: '#111',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  optionSelected: {
    borderColor: '#6f5af8',
    backgroundColor: '#1b1338',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#6f5af8',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  resultText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  backBtn: {
    marginTop: 16,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#111',
  },
  backBtnText: {
    color: '#fff',
  },
});
