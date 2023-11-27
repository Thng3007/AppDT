import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Align content at the top of the screen
    flexDirection: 'column',
  },

  topContainer: {
    backgroundColor: '#FFFECF',
    width: '100%'
  },

  textLogin: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '800',
    color: '#F54D00',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    width: 760,
  },

  formLogin: {
    flex: 0.2,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },

  inputContainer: {
    justifyContent: 'center', // Center vertically
    width: '50%', // Adjust the width as needed
  },

  input: {
    height: 40,
    borderColor: '#6EFFDF',
    borderWidth: 5,
    borderRadius: 10,
    width: '100%', // Take up the entire width of the inputContainer
    padding: 10,
  },

  inputPass: {
    height: 40,
    borderColor: '#6EFFDF',
    borderWidth: 5,
    borderRadius: 10,
    width: '100%', // Take up the entire width of the inputContainer
    padding: 10,
    marginBottom: 10
  },
  inputText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 5,
    color: '#D9A900'
  },

  loginButton: {
    backgroundColor: '#48A0FF',

    
  },
  loginButtonText: {
    fontSize: 20,
    color: '#30FF32',
    textAlign: 'center'
  },
});

export default loginStyles;
