import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Experience0 from './pages/Experience0';
import Experience1 from './pages/Experience1';

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Experience 1"
          component={Experience1}
          options={{ title: 'Experience 1' }}
        />
        <Stack.Screen
          name="Experience 0"
          component={Experience0}
          options={{ title: 'Experience 0' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
