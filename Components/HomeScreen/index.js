import HSStyles from "./HSStyle";
import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

class HomeScreen extends React.Component {
  static navigationOptions = {};
  constructor(props) {
  super(props);

  this.state = {
      firstLaunch: null,
      condUpdate: null
  };
  }
  render() {
  return(
    <View style={HSStyles.container}>
            
    <View style={HSStyles.containerTop}>
      <View style={HSStyles.top}>
        <Text style={HSStyles.topText}>TRƯỜNG ĐẠI HỌC CẦN THƠ</Text>
      </View>
    </View>


    <View style={HSStyles.containerCenter}>
      <View style={HSStyles.center}>
        <Text style={HSStyles.textCenter}>CENTER</Text>
      </View>
    </View>



    <View style={HSStyles.containerBottom}>
      <View style={HSStyles.bottom}>
          <Text style={HSStyles.bottomText}>Khu 2, Đ. 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. Cần Thơ</Text>
      </View>
    </View>

    
    <StatusBar style="auto" />
</View>
  );
  }
}

export {HomeScreen};

