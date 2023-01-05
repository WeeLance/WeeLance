
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './home'
import ClientProfile from './ClientProfile'
import FLProfile from './FLProfile'
import Settings from './Settings'
import Search from './Search'

import { NativeBaseProvider } from 'native-base';
import { MaterialCommunityIcons,AntDesign,FontAwesome5 } from "@expo/vector-icons";



const Drawer = createDrawerNavigator();

export default function Navigation() 
{return (
<NavigationContainer >
<Drawer.Navigator useLegacyImplementation initialRouteName="Home" screenOptions={{
  headerTintColor:'#1C2765',
headerTitleAlign:'center',
  drawerStyle: {
    backgroundColor: '#1C2765',
    width: 370,
    marginTop:25,
    borderRadius:30,
  borderBottomLeftRadius:0,
  
borderTopLeftRadius:0       },
  drawerActiveTintColor:"red",
  drawerActiveBackgroundColor:'white',
  drawerInactiveTintColor:'white',
  
}}>
  <Drawer.Screen  options={
    
    { drawerIcon:({focused})=>(
    <AntDesign size={20} color={focused ? '#1C2765' :"#FFFFFF"}  name='home'/>
)}} name=" Home" component={HomeScreen} />
  <Drawer.Screen options={{drawerIcon:({focused})=>(
    <FontAwesome5 size={20} color={focused ? '#1C2765' :"#FFFFFF"}  name='user'/>
)}}
   name="Client Profile" component={ClientProfile} />
  <Drawer.Screen options={{drawerIcon:({focused})=>(
    <FontAwesome5 size={20} color={focused ? '#1C2765' :"#FFFFFF"}  name='user'/>
)}}
   name="FL Profile" component={FLProfile} />
  <Drawer.Screen options={{drawerIcon:({focused})=>(
    <AntDesign size={20} color={focused ? '#1C2765' :"#FFFFFF"}  name='search1'/>
)}}
  name="Search" component={Search} />
  <Drawer.Screen options={{drawerIcon:({focused})=>(
    <AntDesign size={20} color={focused ? '#1C2765' :"#FFFFFF"}  name='setting'/>
)}}
  name="Settings" component={Settings} />


</Drawer.Navigator>
</NavigationContainer>)}