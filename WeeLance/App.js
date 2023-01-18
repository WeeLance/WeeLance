// import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import { UserContext } from './contextes';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './component/navigation';
import HomeScreen from './component/home';
import WelcomePage from './component/WelcomePage';
import { useContext, useState, createContext } from 'react';
// import Swiper from "./component/Swiper"
const Stack = createNativeStackNavigator();
import { LogBox } from 'react-native';

import { NativeBaseProvider } from 'native-base';
import axios from 'axios';

export default function App() {
  LogBox.ignoreAllLogs();
  const [showContent, setShowContent] = useState(false);
  const [id, setId] = useState('');
  const [ref, setRef] = useState('');
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('id');
      // console.log(AsyncStorage.getItem('id'));
      if (value !== null) {
        // We have data!!
        setId(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  const [role, setRoles] = useState(null);
  // useEffect(() => {
  //   retrieveData();
  // }, [ref]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://192.168.253.52:5000/freelancer/getOne/8GlBwMsAIsP3946Ah99ZdkrZI8F3`
  //     )
  //     .then((res) => {
  //       if (res.data.length === 0) {
  //         console.log('err');
  //       } else {
  //         console.log('freeeeeeeeeeeeeeeeee');
  //         setRole('freelancer');
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   axios
  //     .get(
  //       `http://192.168.253.52:5000/client/getOne/8GlBwMsAIsP3946Ah99ZdkrZI8F3`
  //     )
  //     .then((res) => {
  //       if (res.data.length === 0) {
  //         console.log('err');
  //       } else {
  //         console.log('ecliiiiiiiiiiiiiieeeeeeeeeeeeeeeee');

  //         setRole('client');
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  console.log(role, 'role');
  return (
    <UserContext.Provider
      value={{
        showContent,
        setShowContent,
        setRef,
        role,
        setRoles,
      }}
    >
      <NativeBaseProvider>
        <NavigationContainer>
          {!role && (
            <Stack.Navigator>
              <Stack.Screen
                name="WelcomePage"
                component={WelcomePage}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
          {role && (
            <Stack.Navigator>
              <Stack.Screen
                name="Navigation"
                component={Navigation}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </NativeBaseProvider>
    </UserContext.Provider>
  );
}
