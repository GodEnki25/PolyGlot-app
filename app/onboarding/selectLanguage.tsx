import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SelectLanguage() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<'spanish' | 'french' | 'english' | null>(null);

  const handleContinue = () => {
    if (selectedLanguage) {
      router.push({
        pathname: '/onboarding/skillTest',
        params: { language: selectedLanguage }
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: '33%' }]} />
      </View>

      <Text style={styles.stepText}>Step 1 of 3</Text>
      <Text style={styles.title}>Which language do you want to learn?</Text>

      <TouchableOpacity
        style={[
          styles.languageCard,
          selectedLanguage === 'english' && styles.selectedCard,
        ]}
        onPress={() => setSelectedLanguage('english')}
      >
        <Text style={styles.flag}>🇬🇧</Text>
        <Text style={styles.languageName}>English</Text>
        <Text style={styles.languageDesc}>English</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.languageCard,
          selectedLanguage === 'spanish' && styles.selectedCard,
        ]}
        onPress={() => setSelectedLanguage('spanish')}
      >
        <Text style={styles.flag}>🇪🇸</Text>
        <Text style={styles.languageName}>Spanish</Text>
        <Text style={styles.languageDesc}>Español</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.languageCard,
          selectedLanguage === 'french' && styles.selectedCard,
        ]}
        onPress={() => setSelectedLanguage('french')}
      >
        <Text style={styles.flag}>🇫🇷</Text>
        <Text style={styles.languageName}>French</Text>
        <Text style={styles.languageDesc}>Français</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.continueButton,
          !selectedLanguage && styles.continueButtonDisabled,
        ]}
        onPress={handleContinue}
        disabled={!selectedLanguage}
      >
        <Text style={styles.continueButtonText}>Continue →</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>← Back</Text>
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
    marginBottom: 40,
  },
  languageCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: '#FFA500',
    backgroundColor: '#FFF5E6',
  },
  flag: {
    fontSize: 48,
    marginBottom: 10,
  },
  languageName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  languageDesc: {
    fontSize: 16,
    color: '#666',
  },
  continueButton: {
    backgroundColor: '#FFA500',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
  },
  continueButtonDisabled: {
    backgroundColor: '#ccc',
  },
  continueButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});