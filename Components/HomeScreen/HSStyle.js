import { StyleSheet } from "react-native";

const HSStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
    containerTop: {
      flex: 0.05,
      backgroundColor: '#0D47A1',
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
    containerCenter: {
      flex: 1,
      backgroundColor: '#FFFFEC',
      marginVertical: 5,

    },
    containerBottom: {
      flex: 0.2,
      backgroundColor: '#0E346F',
      marginTop: 5,      
    },
  
    topText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: "center",
    },

    textCenter: {
      fontSize: 40
    },  
  
    bottomText: {
      color: '#FFF',
      fontSize: 15,
      textAlign: 'center',
    },
  
  
  });

  export default HSStyles;