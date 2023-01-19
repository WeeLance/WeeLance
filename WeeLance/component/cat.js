// import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SecondCateg from './SecondCateg'; 
import ProjectbyCategory from './projectbyCtegory';
const Stack = createNativeStackNavigator();

import { NativeBaseProvider } from 'native-base';

export default function Cat() {


  
  return (
  
      <NativeBaseProvider>
        {/* <NavigationContainer> */}
        <Stack.Navigator initialRouteName='SecondCateg'>
            <Stack.Screen
              name="SecondCateg"
              component={SecondCateg}
              options={{ headerShown: false }}
            />
            <Stack.Screen
            name="ProjectbyCategory"
            component={ProjectbyCategory}
            options={{ headerShown: false }}
          />
          </Stack.Navigator>
        {/* </NavigationContainer> */}
      </NativeBaseProvider>
    // </UserContext.Provider>
  );
}
