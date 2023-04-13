import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from "./assets/vivadog_sign.png";
import Reiko from "./assets/reiko.jpg";

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>VIVA! DOG</Text>
        <Image source={Logo} style={styles.image} />
      </View>

      <View style={styles.about}>
        <Text style={styles.text}>Hello,{"\n"}{"\n"}I'm Reiko Houlli, CEO of VIVA! DOG.{"\n"}{"\n"}VIVA! DOG opened in 2003 with the aim to provide quality pet grooming and boarding.</Text>
        <Image source={Reiko} style={styles.profile} />
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
  },
  about: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    borderBottomColor: 'white',
    borderBottomWidth: 0.3,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: 'white',
    paddingRight: 8,
  },
  profile: {
    height: 130,
    width: 130,
    borderRadius: 130,
    borderColor: 'white',
    borderWidth: 0.3,
  }
});
