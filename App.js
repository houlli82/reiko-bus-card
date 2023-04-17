import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Logo from "./assets/vivadog_sign.png";
import Reiko from "./assets/reiko.jpg";
import Insta from "./assets/instagram.png";
import Line from "./assets/line.png";

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={Logo} style={styles.image} />
        <Text style={styles.headerText}>VIVA! DOG</Text>
      </View>

      <View style={styles.about}>
        <Text style={styles.text}>Hello,{"\n"}{"\n"}I'm Reiko Houlli, CEO of VIVA! DOG.{"\n"}{"\n"}VIVA! DOG opened in 2003 with the aim to provide quality pet grooming and boarding.</Text>
        <Image source={Reiko} style={styles.profile} />
      </View>

      <View style={styles.contact}>
        <ImageBackground resizeMode={'cover'} style={styles.buttons} source={require('./assets/paws.jpg')} >
          <View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL('https://www.vivadog.jp'); }}>
                <Ionicons name="globe-outline" style={styles.icon} size={28} />
              </TouchableOpacity>
              <Text style={styles.buttonText}>www.vivadog.jp</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL(`tel:0426238115`); }}>
                <Ionicons name="call-outline" style={styles.icon} size={28} />
              </TouchableOpacity>
              <Text style={styles.buttonText}>042-623-8115</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL(`tel:08010073207`); }}>
                <Ionicons name="phone-portrait-outline" style={styles.icon} size={28} />
              </TouchableOpacity>
              <Text style={styles.buttonText}>080-1007-3207</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL('mailto:houlli82@@htomail.co.uk?subject=Enquiries') }}>
                <Ionicons name="mail-outline" style={styles.icon} size={28} />
              </TouchableOpacity>
              <Text style={styles.buttonText}>vivadog2003@gmail.com</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL('https://www.google.com/maps/search/?api=1&query=Viva+Dog+Hachioji') }}>
                <Ionicons name="location-outline" style={styles.icon} size={28} />
              </TouchableOpacity>
              <Text style={styles.buttonText}>〒192-0073, Hachioji-shi, Tokyo</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.bottom}>
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/vivadog_2003/') }}>
            <Image source={Insta} style={styles.social} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { Linking.openURL('https://lin.ee/TcOvmOB') }} >
            <Image source={Line} style={styles.social} />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Built by Mark Houlli, 2023</Text>
        </View>

      </View>

    </View >
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
  },
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
  },
  profile: {
    height: 130,
    width: 130,
    borderRadius: 130,
    borderColor: 'white',
    borderWidth: 2,
  },
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
  },
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
