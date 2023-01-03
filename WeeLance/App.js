import * as React from 'react';
import { Button, View } from 'react-native';
import WelcomePage from './component/WelcomePage';
import Navigation from './component/navigation'; 

import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <Navigation />
      
      */}
      <WelcomePage />   
     
    </NativeBaseProvider>
  );
}
