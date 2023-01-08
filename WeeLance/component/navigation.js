import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './home';
import ClientProfile from './ClientProfile';
import FLProfile from './FLProfile';
import Settings from './Settings';
import Category from './Category';

import SecondCateg from './SecondCateg';


import Technologies from './Technologies';
// import Swiperr from "./Swiper"
import Events from './Events';

import Notification from './Notification';

import UserInformation from './UserInformation';

import { NativeBaseProvider } from 'native-base';
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
} from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#1C2765',
        headerTitleAlign: 'center',
        drawerStyle: {
          backgroundColor: '#1C2765',
          width: 370,
          marginTop: 25,
          borderRadius: 30,
          borderBottomLeftRadius: 0,

          borderTopLeftRadius: 0,
        },
        drawerActiveTintColor: 'red',
        drawerActiveBackgroundColor: 'white',
        drawerInactiveTintColor: 'white',
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <AntDesign
              size={20}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="home"
            />
          ),
        }}
        name=" Home"
        ic
        component={HomeScreen}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              size={20}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="user"
            />
          ),
        }}
        name="Client Profile"
        component={ClientProfile}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              size={20}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="user"
            />
          ),
        }}
        name="FL Profile"
        component={FLProfile}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <AntDesign
              size={20}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="search1"
            />
          ),
        }}
        name="Category"
        component={Category}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <AntDesign
              size={20}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="setting"
            />
          ),
        }}
        name="Settings"
        component={Settings}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              size={20}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="calendar-week"
            />
          ),
        }}
        name=" Events"
        component={Events}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              size={20}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="calendar-week"
            />
          ),
        }}
        name="Notification"
        component={Notification}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              size={20}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="calendar-week"
            />
          ),
        }}
        name="SecondCateg"
        component={SecondCateg}
      />
    </Drawer.Navigator>
  );
}
