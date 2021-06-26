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

export default function BookmarkPage(){
  const isDarkMode = useColorScheme() === 'dark';

  return (
    
    <View style={{ flex: 1 }}>
        <Text>Bookmark Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

