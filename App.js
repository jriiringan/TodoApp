import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import store from './src/redux/store';
import { Provider, useSelector } from 'react-redux';
import { AppNavigator } from './src/routes/router';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppNavigator/>
    </SafeAreaView>
    </Provider>

  );
};

const styles = StyleSheet.create({
  
});

export default App;
