import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// PAGES
import HomePage from '../pages/home.page';
import DetailsPage from '../pages/details.page';
import BookmarkPage from '../pages/bookmark.page';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen 
    name='Home' 
    options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
    }}
    component={HomePage}/>
    <Tab.Screen 
    name='Bookmarks' 
    options={{
        tabBarLabel: 'Bookmarks',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bookmark-multiple" color={color} size={size} />
        ),
    }}
    component={BookmarkPage}/>
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        options={{ headerShown: false }}
        component={TabNavigator} />
        <Stack.Screen 
        name="Details" 
        options={{ headerShown: true }}
        component={DetailsPage} />
      </Stack.Navigator>
  </NavigationContainer>
);