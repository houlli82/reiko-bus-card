import { StyleSheet } from 'react-native';

const aboutStyle = StyleSheet.create({
contact: {
  flex: 3,
},
buttons: {
  flex: 1,
  justifyContent: 'center',
},
buttonContainer: {
  alignItems: 'center',
  flexDirection: 'row',
  marginLeft: 20,
  marginBottom: 12,
},
button: {
  borderWidth: 2,
  borderColor: 'red',
  backgroundColor: 'white',
  width: 40,
  height: 40,
  borderRadius: 50,
  justifyContent: 'center',
},
buttonText: {
  alignSelf: 'center',
  color: 'white',
  fontSize: 16,
  marginLeft: 12,
},
icon: {
  color: 'black',
  alignSelf: 'center',
}
});

export { aboutStyle }
