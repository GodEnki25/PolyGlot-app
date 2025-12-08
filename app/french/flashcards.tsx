import React, { useState } from 'react';
import { View, Text, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const WORDS = [
  { fr: 'Bonjour', en: 'Hello' },
  { fr: 'Merci', en: 'Thank you' },
  { fr: 'Au revoir', en: 'Goodbye' },
  { fr: "S'il vous plaît", en: 'Please' },
  { fr: 'Oui', en: 'Yes' },
  { fr: 'Non', en: 'No' },
];

export default function FlashcardsScreen() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const current = WORDS[index];

  const next = () => {
    setIndex((i) => (i + 1) % WORDS.length);
    setFlipped(false);
  };
  const prev = () => {
    setIndex((i) => (i - 1 + WORDS.length) % WORDS.length);
    setFlipped(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flashcards</Text>

      <Pressable style={styles.card} onPress={() => setFlipped((v) => !v)}>
        <Text style={styles.cardText}>{flipped ? current.en : current.fr}</Text>
      </Pressable>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.smallBtn} onPress={prev}>
          <Text style={styles.smallBtnText}>Prev</Text>
        </TouchableOpacity>

        <Text style={styles.counter}>{index + 1} / {WORDS.length}</Text>

        <TouchableOpacity style={styles.smallBtn} onPress={next}>
          <Text style={styles.smallBtnText}>Next</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backBtnText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  header: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 30,
  },
  card: {
    width: '90%',
    minHeight: 180,
    backgroundColor: '#111',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 20,
  },
  cardText: {
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  smallBtn: {
    backgroundColor: '#6f5af8',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  smallBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  counter: {
    color: '#ccc',
    marginHorizontal: 16,
    fontSize: 16,
  },
  backBtn: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: '#222',
    borderWidth: 1,
    borderColor: '#333',
  },
  backBtnText: {
    color: '#fff',
  },
});
