import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Complete() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const skillLevel = params.skillLevel as string;
  const language = params.language as string;

  const getLevelEmoji = () => {
    switch (skillLevel) {
      case 'expert':
        return '🌟';
      case 'intermediate':
        return '⭐';
      default:
        return '✨';
    }
  };

  const getLevelMessage = () => {
    switch (skillLevel) {
      case 'expert':
        return 'You\'re an expert! We\'ll challenge you with advanced vocabulary.';
      case 'intermediate':
        return 'You have a solid foundation! We\'ll help you reach fluency.';
      default:
        return 'Perfect! We\'ll start with the basics and build from there.';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: '100%' }]} />
      </View>

      <Text style={styles.stepText}>Step 3 of 3 - Complete! 🎉</Text>
      
      <Text style={styles.emoji}>{getLevelEmoji()}</Text>
      
      <Text style={styles.title}>You're All Set!</Text>
      
      <View style={styles.resultCard}>
        <Text style={styles.resultLabel}>Your Level:</Text>
        <Text style={styles.resultValue}>
          {skillLevel.charAt(0).toUpperCase() + skillLevel.slice(1)}
        </Text>
        
        <Text style={styles.resultMessage}>{getLevelMessage()}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoText}>
          ✓ Personalized vocabulary loaded
        </Text>
        <Text style={styles.infoText}>
          ✓ Custom quizzes ready
        </Text>
        <Text style={styles.infoText}>
          ✓ Progress tracking enabled
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startButton}
        onPress={async () => {
          await new Promise(resolve => setTimeout(resolve, 100));
          router.dismissAll();
          router.replace('/home');
        }}
      >
        <Text style={styles.startButtonText}>Start Learning!</Text>
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
    marginBottom: 30,
  },
  emoji: {
    fontSize: 80,
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: '#FFA500',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  resultCard: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  resultValue: {
    fontSize: 28,
    color: '#6B46C1',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  resultMessage: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 22,
  },
  infoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  infoText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    fontWeight: '500',
  },
  startButton: {
    backgroundColor: '#FFA500',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});