import loginStyles from "./loginStyles";
import { TouchableOpacity, ImageBackground, SafeAreaView, Text, TextInput, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { initializeApp } from '@react-native-firebase/app';
import { auth } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { HomeScreen } from '/VSCode/APPDTFIREBASE/Components/HomeScreen';
import { firebaseConfig } from '../../Components/firebase-config.js'


const bgim = require('D:/VSCode/APPDTFIREBASE/assets/cnc.png');

// Initialize App
initializeApp(firebaseConfig);

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Move inside the component

  const loginUser = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      console.log('User signed in successfully!');
      // Navigate to the next screen or perform other actions upon successful login.
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Handle authentication errors.
    }
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.topContainer}>      
        <Text style={loginStyles.textLogin}>LOGIN</Text>
      </View>
      <View style={loginStyles.backgroudIMGContainer}>
        <ImageBackground source={bgim} style={loginStyles.image}>
          <View style={loginStyles.formLogin}>
            <SafeAreaView style={loginStyles.inputContainer}>
              <Text style={loginStyles.inputText}>Email: </Text>
              <TextInput
                style={loginStyles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Enter your email"
                keyboardType="email-address" // Use email keyboard type
              />
              <Text style={loginStyles.inputText}>Password: </Text>
              <TextInput
                style={loginStyles.inputPass}
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Enter your password"
                secureTextEntry // Hide text for password
              />
              <TouchableOpacity
                style={loginStyles.loginButton}
                onPress={loginUser} // Corrected function call
              >
                <Text style={loginStyles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default LoginScreen;
