import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Dashboard from './screens/Dashboard';
import City from './screens/City';
import AddLocalization from './screens/AddLocalization';
import AddCity from './screens/AddCity';

import { primaryColor } from './util/consts';

export default () =>
  createAppContainer(
    createSwitchNavigator({
      App: createBottomTabNavigator(
        {
          Dashboard: {
            screen: createStackNavigator(
              {
                Dashboard,
                City,
                AddLocalization,
              },
              {
                defaultNavigationOptions: {
                  headerTransparent: true,
                  headerTintColor: 'rgba(2, 2, 2, 0.7)',
                  headerLeftContainerStyle: {
                    marginLeft: 10,
                  },
                },
              },
            ),
            navigationOptions: {
              tabBarLabel: 'Cidades',
              tabBarIcon: (
                <Icon
                  name="location-city"
                  size={20}
                  color="rgba(255, 255, 255, 0.6)"
                />
              ),
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
    }),
  );
