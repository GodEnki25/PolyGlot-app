// app/(tabs)/english.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function EnglishTabScreen() {
  const router = useRouter() as any;

  // Spanish -> English routes
  const handleStart = () => {
    router.push('/SpanishVocabulary');
  };

  const handleQuiz = () => {
    router.push('/SpanishQuiz');
  };

  const handleReview = () => {
    router.push('/SpanishFlashcards');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spanish → English</Text>

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Start Vocabulary List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleQuiz}>
        <Text style={styles.buttonText}>Take a Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleReview}>
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
