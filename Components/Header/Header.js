import React from "react";
import { View, Text, Image } from 'react-native';
import { headerStyle } from './styles';
import Logo from "../../assets/vivadog_sign.png";

export default class Header extends React.Component {
  render() {
    return (
      <View style={headerStyle.header}>
        <Image source={Logo} style={headerStyle.image} />
        <Text style={headerStyle.headerText}>VIVA! DOG</Text>
      </View>
    );
  }
}
