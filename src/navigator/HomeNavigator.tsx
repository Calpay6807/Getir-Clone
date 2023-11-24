import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/home-screen/index';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: '#5C3EBC'},
          headerTitle: () => (
            <Image
              source={require('../../assets/getirlogo.png')}
              style={{width: 70, height: 30}}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
