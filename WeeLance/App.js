// import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './component/navigation';  
import HomeScreen from './component/home'; 
import WelcomePage from './component/WelcomePage';
const Stack = createNativeStackNavigator();


import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
<Stack.Navigator>
      {/* <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Navigation" component={Navigation} options={{ headerShown: false }} />  
     
      


    </Stack.Navigator>  
        </NavigationContainer>  

        </NativeBaseProvider> 
  
  
  
  );
}

// <NativeBaseProvider>
  {/* <Navigation />
  
  */}
  // <WelcomePage />   
 
// </NativeBaseProvider>  