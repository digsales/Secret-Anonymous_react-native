import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function MainNavigator() {

  return(
    <NavigationContainer>

      <Stack.Navigator
          initialRouteName='Login' 
          screenOptions={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#FF5C00',
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        >
          <Stack.Screen 
            name="Login" 
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        
    </NavigationContainer>
  )
}