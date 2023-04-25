import { StyleSheet } from 'react-native';

const headerStyle = StyleSheet.create({
  header: {
    flex: 0.5,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingTop: 12,
    paddingBottom: 1,
  },
  headerText: {
    alignSelf: 'flex-end',
    paddingBottom: 4,
    fontSize: 25,
    color: 'black',
    marginLeft: 12,
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'flex-end',
  }
});

export { headerStyle }
