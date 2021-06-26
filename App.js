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
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {  ThemeProvider } from 'react-native-elements';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider> 
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <AppNavigator/>
        </SafeAreaView>
        </ThemeProvider>
      </SafeAreaProvider>
      
    </Provider>

  );
};

const styles = StyleSheet.create({
  
});

export default App;
