import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();
function RootNavigator() {
  const CustomTabBarButton = ({children}) => {
    return (
      <TouchableOpacity
        style={{
          borderColor: 'white',
          borderWidth: 2,
          borderRadius: 32,
          justifyContent: 'center',
          marginTop: -8,
          alignItems: 'center',
          backgroundColor: '#5C3EBC',
          width: 55,
          height: 55,
        }}>
        <Icon name="list" size={25} color="#FFD00C" />
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="AnaSayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5C3EBC',
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}>
      <Tab.Screen
        name="AnaSayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="list"
        component={HomeNavigator}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <Icon name="user" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <Icon name="gift" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;

const styles = StyleSheet.create({});
