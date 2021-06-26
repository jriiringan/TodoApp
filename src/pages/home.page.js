 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   View,
   TouchableOpacity
 } from 'react-native';
 
 import {useRoute} from '@react-navigation/native';
 import { useSelector } from 'react-redux';
 
export default function HomePage(props){
   const route = useRoute();
   const state = useSelector(state => state.listing);
    

   const onNavDetails = () => {
       // TO PREVENT MULTIPLE NAV
       if(route.name !== 'Details'){
        props.navigation.navigate('Details');
       }
   }
   return (
     
     <View style={{ flex: 1 }}>
         <TouchableOpacity onPress={onNavDetails}><Text>teqwqtwq</Text></TouchableOpacity>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   
 });

 