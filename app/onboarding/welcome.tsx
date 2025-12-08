import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/IMG_0702.png')}
        style={styles.logo}
      />
      
      <Text style={styles.title}>Welcome to PolyGlot! 🌍</Text>
      
      <Text style={styles.subtitle}>
        Your journey to mastering a new language starts here
      </Text>

      <View style={styles.featuresList}>
        <Text style={styles.feature}>✓ Personalized vocabulary</Text>
        <Text style={styles.feature}>✓ Interactive quizzes</Text>
        <Text style={styles.feature}>✓ Track your progress</Text>
        <Text style={styles.feature}>✓ Learn at your own pace</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('./selectLanguage')}
      >
        <Text style={styles.buttonText}>Get Started →</Text>
      </TouchableOpacity>

      <Text style={styles.timeEstimate}>Takes only 2 minutes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9A9F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
    borderRadius: 60,
  },
  title: {
    fontSize: 32,
    color: '#FFA500',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  featuresList: {
    marginBottom: 40,
    alignItems: 'flex-start',
  },
  feature: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 12,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 18,
    width: '80%',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 15,
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeEstimate: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
});