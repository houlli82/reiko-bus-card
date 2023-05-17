import { StyleSheet } from 'react-native';

const aboutStyle = StyleSheet.create({
about: {
  flex: 1.5,
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 12,
  paddingBottom: 12,
  backgroundColor: 'black',
},
text: {
  flex: 1,
  fontSize: 14,
  color: 'white',
  paddingRight: 8,
  fontFamily: 'monospace',
},
profile: {
  height: 130,
  width: 130,
  borderRadius: 130,
  borderColor: 'white',
  borderWidth: 2,
}
});

export { aboutStyle }
