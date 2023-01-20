// import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FreelancerList from './HomeContainers/freelancerList';
import HomEE from './SecHome';
const Stack = createNativeStackNavigator();

import { NativeBaseProvider } from 'native-base';

export default function MainPage() {


  
  return (
  
      <NativeBaseProvider>
        {/* <NavigationContainer> */}
        <Stack.Navigator initialRouteName='Homee'>
            <Stack.Screen
              name="Homee"
              component={HomEE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
            name="FreelancerList"
            
            component={FreelancerList}
            options={{ headerShown: false }}
          />
          </Stack.Navigator>
        {/* </NavigationContainer> */}
      </NativeBaseProvider>
    // </UserContext.Provider>
  );
}
