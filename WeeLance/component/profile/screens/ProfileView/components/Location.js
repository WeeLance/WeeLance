//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {gs , colors} from '../../../HomeStyle'
import { Entypo, EvilIcons , FontAwesome5 , Ionicons } from "@expo/vector-icons";



// create a component
export default function Location ({adress})  {
    return (
        <View style={styles.container}>
            <View style={{width: 75, height:50}}>
            <EvilIcons
            name="location"
            color="#1C2765"
           size={50}
          />
            </View>
            <View  style={{flex:1}}>
               <Text style={styles.location}>{adress}</Text> 
            </View>
            <Entypo  name='chevron-right' size={24} color={colors.pink}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       ...gs.rowCenter,
       backgroundColor:"white",
       paddingHorizontal:16,
       paddingVertical:8  
      
    },
    location:{
        fontSize: 18,
        color: colors.orange,
        fontWeight: "500",
    }
});

