import { StyleSheet } from 'react-native';

const bottomStyle = StyleSheet.create({
bottom: {
  flex: 1,
  backgroundColor: 'black',
},
socialContainer: {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: 12,
  paddingBottom: 12,
},
social: {
  height: 50,
  width: 50,
  marginLeft: 12,
  marginRight: 12,
},
footer: {
  flex: 0.6,
  alignItems: 'center',
  justifyContent: 'center',
},
footerText: {
  color: 'grey',
}
});

export { bottomStyle }
