import { StyleSheet } from "react-native";

const appStyle = StyleSheet.create({
    
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    loadingScreen: {
      flex: 1,
      backgroundColor: '#FFFFEC',
      marginVertical: 2,
      justifyContent: 'center',
      flexDirection: "column"
    },
    screenLeft: {
      paddingVertical: 10,
      marginVertical: 10,
      marginHorizontal: 60,
      width: 300
    },
    screenRight: {
      marginHorizontal: 60,
      width: 300
    },

    loadingText: {
      fontSize: 20,
      textAlign: 'center',
    },
    loadingText2:{
      fontSize: 30,
      textAlign: 'center',
      color: 'green',
      fontWeight: "bold"
    },
    img: {
      width: 150,
      height: 150,
      resizeMode: 'contain',

    },



  });

export default appStyle;