import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';

const Stack = createStackNavigator();

export default function MainNavigator() {

  return(
    <NavigationContainer>

      <Stack.Navigator 
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
        </Stack.Navigator>
        
    </NavigationContainer>
  )
}