//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {gs , colors} from '../../../HomeStyle'
import { Entypo, EvilIcons , FontAwesome5 , Ionicons } from "@expo/vector-icons";
import { HStack } from 'native-base';



// create a component
export default function Location ({location})  {
    return (

        <View style={styles.container}>
        <HStack>    
         
            <EvilIcons
            name="location"
            color="#1C2765"
           size={35}
          />
               <Text style={styles.location}>{location}</Text> 
            </HStack>
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

