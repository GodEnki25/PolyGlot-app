import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.jpeg')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to PolyGlot!</Text>
      <Text style={styles.subtitle}>
        Let's find the perfect starting point for your language journey
      </Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/onboarding/selectLanguage')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
    borderRadius: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6B46C1',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#FF6B35',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});