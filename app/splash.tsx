// app/splash.tsx
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home');
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/IMG_0702.png')} style={styles.logo} />
      <View style={styles.progressBarContainer}>
        <View style={styles.orangeBar} />
        <View style={styles.blackBar} />
      </View>
      <View style={styles.progressBarContainer}>
        <View style={styles.orangeBar} />
        <View style={styles.blackBar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  progressBarContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  orangeBar: {
    width: 100,
    height: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
    marginRight: 5,
  },
  blackBar: {
    width: 100,
    height: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
});
