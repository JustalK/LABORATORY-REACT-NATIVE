import { registerRootComponent } from 'expo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Experience0 from 'src/pages/Experience0';
import Experience1 from 'src/pages/Experience1';
import Experience2 from 'src/pages/Experience2';

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Experience 0"
          component={Experience0}
          options={{ title: 'Experience 0' }}
        />
        <Stack.Screen
          name="Experience 1"
          component={Experience1}
          options={{ title: 'Experience 1' }}
        />
        <Stack.Screen
          name="Experience 2"
          component={Experience2}
          options={{ title: 'Experience 2' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
