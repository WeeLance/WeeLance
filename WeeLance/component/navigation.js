import React, { useContext } from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './home';
import ClientProfile from './ClientProfile';

import Settings from './Settings';
import SecondCateg from './SecondCateg';
import AddProject from './addProject';

import Profile from './profile/Profile';
import Category from './cat';



import Logout from './Logout';
import HomEE from './SecHome';
import LottieAnimationScreen from './lottie';




import Events from './Events';
import NOtificatioNN from './NotificatioNN';
import Notification from './notification';

import ClientProjects from './clientProjects';
import MainPage from './MainPage';

import UserInformation from './UserInformation';

import {
  NativeBaseProvider,
  Menu,
  HamburgerIcon,
  Box,
  Pressable,
} from 'native-base';
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
  Entypo,
} from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();
import { UserContext } from '../contextes';

export default function Navigation() {
  const { role } = useContext(UserContext);
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
      {/* <Drawer.Screen
        options={{
          drawerItemStyle: { marginTop: 10 },

          drawerIcon: ({ focused }) => (
            <AntDesign
              size={24}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="home"
            />
          ),
        }}
        name=" Home"
        component={HomeScreen}
      /> */}
        
        <Drawer.Screen
          options={{
            drawerIcon: ({ focused }) => (
              <AntDesign
                size={24}
                color={focused ? '#1C2765' : '#FFFFFF'}
                name="user"
              />
            ),
          }}
          name="HOME"
          component={MainPage}
        />
       

      {role == 'freelancer' && (
        <Drawer.Screen
          options={{
            drawerIcon: ({ focused }) => (
              <AntDesign
                size={24}
                color={focused ? '#1C2765' : '#FFFFFF'}
                name="user"
              />
            ),
          }}
          name="Profile"
          component={Profile}
        />
      )}

      {role == 'client' && (
        <Drawer.Screen
          options={{
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                size={24}
                color={focused ? '#1C2765' : '#FFFFFF'}
                name="user"
              />
            ),
          }}
          name="Client Profile"
          component={ClientProfile}
        />
      )}
      {role == 'client' && (
        <Drawer.Screen
          options={{
            drawerIcon: ({ focused }) => (
              <MaterialIcons
                size={24}
                color={focused ? '#1C2765' : '#FFFFFF'}
                name="add-chart"
              />
            ),
          }}
          name=" Add Project"
          component={AddProject}
        />
      )}
  
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <MaterialIcons
              size={24}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="category"
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
              size={24}
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
              size={24}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="calendar-week"
            />
          ),
        }}
        name=" Events"
        component={Events}
      />
      {/* {role == 'client' && (
        <Drawer.Screen
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons
                size={24}
                color={focused ? '#1C2765' : '#FFFFFF'}
                name="notifications-outline"
              />
            ),
          }}
          name="Notification"
          component={Notification}
        />
      )} */}
      {role == 'freelancer' && (
        <Drawer.Screen
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons
                size={24}
                color={focused ? '#1C2765' : '#FFFFFF'}
                name="notifications-outline"
              />
            ),
          }}
          name="Notification"
          component={Notification}
        />
      )}
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
        name="NotificatioNN"
        component={NOtificatioNN}
      /> 

   


{role == 'freelancer' && (

      <Drawer.Screen
        options={{
          drawerItemStyle: { marginTop: 320 },
          drawerIcon: ({ focused }) => (
            <MaterialIcons size={24} color={'#F14E24'} name="logout" />
          ),
        }}
        name="logout"
        component={Logout}
      />
      )}
 {role == 'client' && (
      <Drawer.Screen
        options={{
          drawerItemStyle: { marginTop: 270 },
          drawerIcon: ({ focused }) => (
            <MaterialIcons size={24} color={'#F14E24'} name="logout" />
          ),
        }}
        name="logout"
        component={Logout}
      />
 )}
      {/* <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              size={24}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="calendar-week"
            />
          ),
        }}
        name="Swiper" 
        
        component={Swiper}
      />  */}

      {/* <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              size={24}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="calendar-week"
            />
          ),
        }}
        name="password" 
        
        component={Changepassword}
      /> */}

      {/* <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5

              size={24}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="calendar-week"
            />

          ),
        }}
        name="Rating"
        component={Rating}
      /> */}

      {/* 
 <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              size={24}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="calendar-week"
            />
          ),
        }}
        name="ClientProjects"
        component={ClientProjects}

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
        name="Myriam"
        component={Myriam}
      /> 




      {/* <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              size={24}
              color={focused ? '#1C2765' : '#FFFFFF'}
              name="calendar-week"
            />
          ),
        }}
        name="ProjectbyCategory"
        component={ProjectbyCategory}
      /> */}
      
    </Drawer.Navigator>
  );
}
