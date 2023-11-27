import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import appStyle from './App.component.style';
import { HomeScreen } from './Components/HomeScreen';
import LoginScreen from './Components/Login'; // 
import SignUpScreen from './Components/Signup'; //
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [require('./assets/ctu.png')],
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={appStyle.loadingScreen}>

        <View>
          {this.state.images.map((image, index) => (
            <Image key={index} style={{ width: 200, height: 200, justifyContent: 'center', marginHorizontal: 100, marginVertical: 50 }} source={image} />
          ))}
        </View>
        <Text style={appStyle.loadingText2}>
          LẬP TRÌNH TRÊN THIẾT BỊ DI ĐỘNG
        </Text>

        <View style={appStyle.screenLeft}>
          <Button
            title="Login"
            onPress={() => navigation.navigate('LoginScreen', { name: 'Login Page' })}
          />
        </View>

        <View style={appStyle.screenRight}>
          <Button
            title="SignUp"
            color="#841584"
            accessibilityLabel="Đăng Ký Tài Khoản Người Dùng"
            onPress={() => navigation.navigate('SignUpScreen', { name: 'SignUp Page' })}
          />
          <Text style={appStyle.loadingText}>Bạn chưa có tài khoản? Hãy Đăng Ký</Text>
        </View>
      </View>
    );
  }
}

// Main App component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ĐỒ ÁN MÔN HỌC"  component={LoadingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
