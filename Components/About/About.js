import React from "react";
import { View, Text, Image } from 'react-native';
import { aboutStyle } from './styles';
import Reiko from "../../assets/reiko.jpg";

export default class About extends React.Component {
  render() {
    return (
      <View style={aboutStyle.about}>
        <Text style={aboutStyle.text}>Hello,{"\n"}{"\n"}I'm Reiko Houlli, CEO of VIVA! DOG.{"\n"}{"\n"}VIVA! DOG opened in 2003 with the aim to provide quality pet grooming and boarding.</Text>
        <Image source={Reiko} style={aboutStyle.profile} />
      </View>
    );
  }
}
