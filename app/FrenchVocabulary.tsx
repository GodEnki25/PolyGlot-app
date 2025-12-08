// app/FrenchVocabulary.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WORDS = [
  { fr: 'Bonjour', en: 'Hello' },
  { fr: 'Merci', en: 'Thank you' },
  { fr: 'Au revoir', en: 'Goodbye' },
  { fr: "S'il vous plaît", en: 'Please' },
  { fr: 'Oui', en: 'Yes' },
  { fr: 'Non', en: 'No' },
];

export default function FrenchVocabularyScreen() {
  const router = useRouter() as any;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vocabulary List</Text>

      <ScrollView style={styles.list} contentContainerStyle={{ paddingBottom: 40 }}>
        {WORDS.map((w, idx) => (
          <View key={idx} style={styles.row}>
            <Text style={styles.fr}>{w.fr}</Text>
            <Text style={styles.en}>{w.en}</Text>
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
    textAlign: 'center',
    fontWeight: '700',
  },
  list: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#111',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  fr: {
    color: '#fff',
    fontSize: 18,
  },
  en: {
    color: '#ccc',
    fontSize: 18,
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
