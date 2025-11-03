import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function EnglishScreen() {
  const vocabList = [
    { word: 'Banana', translation: 'Manzana' },
    { word: 'Book', translation: 'Libro' },
    { word: 'Car', translation: 'Coche' },
    { word: 'Dog', translation: 'Perro' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>English Vocabulary</Text>
      {vocabList.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.word}>{item.word}</Text>
          <Text style={styles.translation}>{item.translation}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1D1D1D',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  word: {
    color: '#FFA500',
    fontSize: 18,
  },
  translation: {
    color: '#aaa',
    fontSize: 16,
  },
});
