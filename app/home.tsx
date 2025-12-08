import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OnboardingService } from './services/onboardingServices';
import { clearUserProfile, getUserProfile, UserProfile } from './services/userProfile';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    console.log('Home: Loading profile');
    const userProfile = await getUserProfile();
    console.log('Home: Profile:', userProfile);
    
    setProfile(userProfile);
    setLoading(false);
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#FFA500" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/IMG_0702.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to PolyGlot</Text>

      {profile && (
        <Text style={styles.welcomeText}>
          Learning: {profile.targetLanguage.charAt(0).toUpperCase() + profile.targetLanguage.slice(1)}
          {'\n'}
          Level: {profile.skillLevel.charAt(0).toUpperCase() + profile.skillLevel.slice(1)}
        </Text>
      )}

      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/english')}>
        <Text style={styles.buttonText}>Learn English</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/spanish')}>
        <Text style={styles.buttonText}>Learn Spanish</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/french')}>
        <Text style={styles.buttonText}>Learn French</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button]} onPress={async () => {
          await clearUserProfile();
          await OnboardingService.clearOnboarding();
          router.push('/onboarding/welcome');
        }}
      >
        <Text style={styles.buttonText}>Onboarding Test</Text>
      </TouchableOpacity>

    </View>

    );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#C9A9F5', // purple background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    color: '#FFA500', // orange text
    marginBottom: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    marginTop: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  welcomeText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
  },
});