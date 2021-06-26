import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { Text } from 'react-native-elements';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLOR from '../styles/color';
import { FONTSIZE } from '../styles/size';

export default function NoResult(props){
  return (
    <View style={selfStyle.container}>
         <MaterialCommunityIcons name="cloud-search" color={COLOR.default} size={72} />
         <Text style={selfStyle.text}>No result found.</Text>
    </View>
  );
};

const selfStyle = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    text:{
        fontFamily: 'Lato', 
        fontSize: FONTSIZE.medium
    }
});

