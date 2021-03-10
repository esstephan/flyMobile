import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Landing from './src/components/Landing';
import LoginScreen from './src/components/Login';
import Birds from './src/components/Birds';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  switch (route.name) {
                    case 'Landing':
                      iconName = focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline';
                      break;
                    case 'Signup':
                      iconName = focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline';
                      break;
                    case 'Birds': 
                    iconName = focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline';
                      break;
                    default:
                      break;
                  }
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'deepskyblue',
                inactiveTintColor: 'gray',
              }}
            >
        <Tab.Screen name="Landing" component={Landing} />
        {/* <Tab.Screen name="Signup" component={Signup} /> */}
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Birds" component={Birds} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}