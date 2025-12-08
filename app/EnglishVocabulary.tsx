// app/EnglishVocabulary.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WORDS = [
  { en: 'Banana', es: 'Manzana' },
  { en: 'Book',   es: 'Libro'   },
  { en: 'Car',    es: 'Coche'   },
  { en: 'Dog',    es: 'Perro'   },
];

export default function EnglishVocabularyScreen() {
  const router = useRouter() as any;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>English Vocabulary</Text>

      <ScrollView style={styles.list} contentContainerStyle={{ paddingBottom: 40 }}>
        {WORDS.map((w, idx) => (
          <View key={idx} style={styles.row}>
            <Text style={styles.en}>{w.en}</Text>
            <Text style={styles.es}>{w.es}</Text>
          </View>
        ))}
      </ScrollView>

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
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  header: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'left',
    fontWeight: '700',
  },
  list: {
    flex: 1,
  },
  row: {
    backgroundColor: '#111',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  en: {
    color: '#f9b13a', // orange-ish like your screenshot
    fontSize: 18,
    marginBottom: 4,
  },
  es: {
    color: '#ccc',
    fontSize: 16,
  },
  backBtn: {
    marginTop: 16,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#111',
  },
  backBtnText: {
    color: '#fff',
  },
});
