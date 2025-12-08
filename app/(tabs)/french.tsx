// app/French.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FrenchScreen() {
  const router = useRouter() as any;

  const handleStart = () => {
    router.push('/FrenchVocabulary');
  };

  const handleQuiz = () => {
    router.push('/FrenchQuiz');
  };

  const handleReview = () => {
    router.push('/FrenchFlashcards');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🇫🇷 French Vocabulary</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleStart}
        accessibilityLabel="Start Vocabulary List"
      >
        <Text style={styles.buttonText}>Start Vocabulary List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleQuiz}
        accessibilityLabel="Take a Quiz"
      >
        <Text style={styles.buttonText}>Take a Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleReview}
        accessibilityLabel="Review Flashcards"
      >
        <Text style={styles.buttonText}>Review Flashcards</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 30,
  },
  button: {
    width: '85%',
    backgroundColor: '#6f5af8',
    paddingVertical: 18,
    borderRadius: 12,
    marginVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

