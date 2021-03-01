
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Landing from './src/components/Landing';
import Birds from './src/components/Birds';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <StatusBar barStyle="dark-content" /> */}
        <Tab.Navigator initialRouteName="Landing">

          <Tab.Screen name="Landing" component={Landing} />
          <Tab.Screen name="Birds" component={Birds} />

        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
