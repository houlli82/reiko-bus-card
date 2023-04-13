import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
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

      <View style={styles.contact}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL(`tel:0426238115`); }}>
            <Ionicons name="call-outline" style={styles.icon} size={32} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>042-623-8115</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL(`tel:08010073207`); }}>
            <Ionicons name="phone-portrait-outline" style={styles.icon} size={32} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>080-1007-3207</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL('mailto:houlli82@@htomail.co.uk?subject=Enquiries') }}>
            <Ionicons name="mail-outline" style={styles.icon} size={32} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>vivadog2003@gmail.com</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL('https://www.google.com/maps/search/?api=1&query=Viva+Dog+Hachioji') }}>
            <Ionicons name="location-outline" style={styles.icon} size={32} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>〒192-0073, Hachioji-shi, Tokyo</Text>
        </View>
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
  },
  contact: {
    flex: 3,
    justifyContent: 'space-around',
    paddingLeft: 12,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'red',
    width: 50,
    height: 50,
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
    color: 'white',
    alignSelf: 'center',
  }
});
