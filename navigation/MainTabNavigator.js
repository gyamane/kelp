import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';

export default createStackNavigator({
  Home: HomeScreen,
  SearchResults: SearchResultsScreen,
});
