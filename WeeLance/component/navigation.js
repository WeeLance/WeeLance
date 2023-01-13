import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import Changepassword from './Changepassword';
import Rating from './Rating'
import HomeScreen from './home';
import ClientProfile from './ClientProfile';
import FLProfile from './FLProfile';
import Settings from './Settings';
import Category from './Category';
import SecondCateg from './SecondCateg';
import AddProject from './addProject';

import Profile from './profile/Profile';
import Changepassword from './Changepassword';

import Technologies from './Technologies';
import Swiper from "./Swiper"

import Events from './Events';

import Notification from './notification'; 

import ClientProjects from './clientProjects';



import UserInformation from './UserInformation';

import { NativeBaseProvider, Menu,HamburgerIcon, Box, Pressable } from 'native-base';
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
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
        drawerStatusBarAnimation:'slide',
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
        component={HomeScreen}
      />



      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <MaterialIcons
              size={20}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="add-chart"
            />
          ),
        }}
        name=" Add Project"
        component={AddProject}
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
        name="Swiper" 
        
        component={Swiper}
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
        name="password" 
        
        component={Changepassword}
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
        name="Rating"
        component={Rating}
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
        name="Profile"
        component={Profile}
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
        name="ClientProjects"
        component={ClientProjects}
      />


    </Drawer.Navigator>
  );
}
