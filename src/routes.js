import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Dashboard from './screens/Dashboard';
import AddLocal from './screens/AddLocal';
import AddCity from './screens/AddCity';
import Localizations from './screens/Localizations';

import { primaryColor } from './util/consts';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Dashboard: {
        screen: createStackNavigator(
          {
            Dashboard,
            Localizations,
            AddLocal,
          },
          {
            defaultNavigationOptions: {
              headerTransparent: true,
              headerTintColor: '#fff',
            },
          },
        ),
        navigationOptions: {
          tabBarLabel: 'Cidades',
          tabBarIcon: <Icon name="location-city" size={25} color="#fff" />,
        },
      },
      AddCity,
    },
    {
      tabBarOptions: {
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        style: {
          backgroundColor: primaryColor,
        },
        labelStyle: {
          fontSize: 14,
        },
      },
    },
  ),
);

export default Routes;
