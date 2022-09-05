import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import NewSecret from '../screens/NewSecret';

const Stack = createStackNavigator();

export default function MainNavigator() {

  return(
    <NavigationContainer>

      <Stack.Navigator
          initialRouteName='Login'
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
          <Stack.Screen 
            name="NewSecret"
            component={ NewSecret }
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        
    </NavigationContainer>
  )
}