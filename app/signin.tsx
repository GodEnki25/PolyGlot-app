import React, { useState } from 'react';
import {
    CheckBox,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Logo */}
      <Image
        source={require('../assets/images/IMG_0702.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Sign In Title */}
      <Text style={styles.title}>Sign In</Text>

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#aaa"
        style={styles.input}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#aaa"
        secureTextEntry
        style={styles.input}
      />

      {/* Remember + Forget */}
      <View style={styles.rememberRow}>
        <CheckBox
          value={rememberMe}
          onValueChange={setRememberMe}
        />
        <Text style={styles.rememberText}>Remember</Text>
        <TouchableOpacity style={{ marginLeft: 'auto' }}>
          <Text style={styles.forgot}>Forget Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInBtn}>
        <Text style={styles.signInText}>SIGN IN</Text>
      </TouchableOpacity>

      {/* Illustration */}
      <Image
        source={require('../assets/images/IMG_0702.png')}
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Footer */}
      <View style={styles.footerRow}>
        <Text style={styles.footerTextOrange}>Don't have account? </Text>
        <TouchableOpacity>
          <Text style={styles.footerText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C7AFFF',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 220,
    height: 180,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginVertical: 10,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    backgroundColor: '#6A0DAD',
    borderRadius: 30,
    padding: 15,
    color: 'white',
    marginBottom: 15,
    fontSize: 16,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  rememberText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 14,
  },
  forgot: {
    color: '#FF8357',
    fontSize: 14,
  },
  signInBtn: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  signInText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  illustration: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
  footerRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
  footerTextOrange: {
    color: '#FF8357',
    fontSize: 14,
  },
});
