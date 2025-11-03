import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../constants/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'French'>;

export default function French() {
   const navigation = useNavigation<NavigationProp>(); [
  { id: '1', french: 'Bonjour', english: 'Hello' },
  { id: '2', french: 'Merci', english: 'Thank you' },
  { id: '3', french: 'Au revoir', english: 'Goodbye' },
  { id: '4', french: 'S’il vous plaît', english: 'Please' },
  { id: '5', french: 'Oui', english: 'Yes' },
  { id: '6', french: 'Non', english: 'No' },
  { id: '7', french: 'Comment ça va ?', english: 'How are you?' },
  { id: '8', french: 'Très bien', english: 'Very good' },
  { id: '9', french: 'Parlez-vous anglais ?', english: 'Do you speak English?' },
  { id: '10', french: 'Je ne comprends pas', english: 'I don’t understand' },
];


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🇫🇷 French Vocabulary</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FrenchVocabulary')}
      >
        <Text style={styles.buttonText}>Start Vocabulary List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FrenchQuiz')}
      >
        <Text style={styles.buttonText}>Take a Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FrenchFlashcards')}
      >
        <Text style={styles.buttonText}>Review Flashcards</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // You can change this to match your app theme
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#6c63ff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
