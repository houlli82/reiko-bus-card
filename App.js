import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from "./assets/vivadog_sign.png";

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>VIVA! DOG</Text>
        <Image source={Logo} style={styles.image} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flex: 0.5,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 12,
  },
  headerText: {
    alignSelf: 'flex-end',
    paddingBottom: 4,
    fontSize: 25,
    color: 'black',
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'flex-end',
  }
});
