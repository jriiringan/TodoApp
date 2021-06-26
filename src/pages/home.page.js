 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import { useSelector } from 'react-redux';
 
export default function HomePage(){
   const isDarkMode = useColorScheme() === 'dark';
   const state = useSelector(state => state.listing);
 
   return (
     
     <View style={{ flex: 1 }}>
      
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   
 });

 