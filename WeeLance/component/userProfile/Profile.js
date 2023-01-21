
 import React from 'react'
 import { StyleSheet, Text, View, ScrollView } from 'react-native'
 import  {colors} from './HomeStyle'
 import ProfileView from './screens/ProfileView'


 export default function Profile({route}) {
    const pressed=route.params.pressed
    console.log(pressed,'hhhhh');
    return (
        <ScrollView style={styles.container}>
            <ProfileView pressed={pressed}/>
        </ScrollView>
    )
 }



 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        
       
    }
 })  