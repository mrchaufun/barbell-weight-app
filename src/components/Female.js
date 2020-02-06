import React from "react";
import Svg from "react-native-svg";
import { View } from 'react-native';

const { Path, Rect } = Svg;

const Female = () => {
  return (
      <View>
      <Svg width="24" height="24">
        <Rect width="24" height="24" fill="none" rx="0" ry="0"/>
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7ZM11 13C6.58172 13 3 16.5817 3 21C3 21 6 22 12 22C18 22 21 21 21 21C21 16.5817 17.4183 13 13 13H11Z" fill="#FCAACF"/>
      </Svg>
      </View>
  );
}

export default Female;