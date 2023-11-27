import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import appStyle from './App.component.style';
import {HomeScreen} from './Components/HomeScreen'

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
            <Image key={index} style={{ width: 200, height: 200, justifyContent: 'center', marginHorizontal:100, marginVertical: 50  }} source={image} />
          ))}
        </View>
        <Text style={appStyle.loadingText2}>
          LẬP TRÌNH TRÊN THIẾT BỊ DI ĐỘNG
        </Text>

        <View style={appStyle.screenLeft}>
          <Button
            title="Login"
            onPress={() => navigation.navigate('HomeSc', { name: 'About Page' })}
          />
        </View>

        <View style={appStyle.screenRight}>
          <Button
            title="SignUp"
            color="#841584"
            accessibilityLabel="Đăng Ký Tài Khoản Người Dùng"
            onPress={() => navigation.navigate('HomeSc', { name: 'About Page' })}
          />
          <Text style={appStyle.loadingText}>Bạn chưa có tài khoản? Hãy Đăng Ký</Text>
        </View>
      </View>
    );
  }
}

export default LoadingScreen;
