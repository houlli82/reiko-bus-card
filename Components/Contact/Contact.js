import React from "react";
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { aboutStyle } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Linking } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={aboutStyle.contact}>
        <ImageBackground resizeMode={'cover'} style={aboutStyle.buttons} source={require('../../assets/paws.jpg')} >
          <View>
            <View style={aboutStyle.buttonContainer}>
              <TouchableOpacity style={aboutStyle.button} onPress={() => { Linking.openURL('https://www.vivadog.jp'); }}>
                <Ionicons name="globe-outline" style={aboutStyle.icon} size={28} />
              </TouchableOpacity>
              <Text style={aboutStyle.buttonText}>www.vivadog.jp</Text>
            </View>

            <View style={aboutStyle.buttonContainer}>
              <TouchableOpacity style={aboutStyle.button} onPress={() => { Linking.openURL(`tel:0426238115`); }}>
                <Ionicons name="call-outline" style={aboutStyle.icon} size={28} />
              </TouchableOpacity>
              <Text style={aboutStyle.buttonText}>042-623-8115</Text>
            </View>

            <View style={aboutStyle.buttonContainer}>
              <TouchableOpacity style={aboutStyle.button} onPress={() => { Linking.openURL(`tel:08010073207`); }}>
                <Ionicons name="phone-portrait-outline" style={aboutStyle.icon} size={28} />
              </TouchableOpacity>
              <Text style={aboutStyle.buttonText}>080-1007-3207</Text>
            </View>

            <View style={aboutStyle.buttonContainer}>
              <TouchableOpacity style={aboutStyle.button} onPress={() => { Linking.openURL('mailto:houlli82@@htomail.co.uk?subject=Enquiries') }}>
                <Ionicons name="mail-outline" style={aboutStyle.icon} size={28} />
              </TouchableOpacity>
              <Text style={aboutStyle.buttonText}>vivadog2003@gmail.com</Text>
            </View>

            <View style={aboutStyle.buttonContainer}>
              <TouchableOpacity style={aboutStyle.button} onPress={() => { Linking.openURL('https://www.google.com/maps/search/?api=1&query=Viva+Dog+Hachioji') }}>
                <Ionicons name="location-outline" style={aboutStyle.icon} size={28} />
              </TouchableOpacity>
              <Text style={aboutStyle.buttonText}>〒192-0073, Hachioji-shi, Tokyo</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
