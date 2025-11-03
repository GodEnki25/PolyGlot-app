import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/IMG_0702.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to PolyGlot</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/english')}>
        <Text style={styles.buttonText}>Learn English</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/spanish')}>
        <Text style={styles.buttonText}>Learn Spanish</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/french')}>
        <Text style={styles.buttonText}>Learn French</Text>
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
});
