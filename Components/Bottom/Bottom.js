import React from "react";
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { bottomStyle } from './styles';
import { Linking } from 'react-native';
import Insta from "../../assets/instagram.png";
import Line from "../../assets/line.png";


export default class Bottom extends React.Component {
  render() {
    return (
      <View style={bottomStyle.bottom}>
        <View style={bottomStyle.socialContainer}>
          <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/vivadog_2003/') }}>
            <Image source={Insta} style={bottomStyle.social} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { Linking.openURL('https://lin.ee/TcOvmOB') }} >
            <Image source={Line} style={bottomStyle.social} />
          </TouchableOpacity>
        </View>
        <View style={bottomStyle.footer}>
          <Text style={bottomStyle.footerText}>Built by Mark Houlli, 2023</Text>
        </View>
      </View>
    );
  }
}
