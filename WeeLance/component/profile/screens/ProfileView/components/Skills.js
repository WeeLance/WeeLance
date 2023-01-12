//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';
import index from '..';
import {gs, colors} from "../../../HomeStyle"


const photos=[
    require('../../../../../assets/profile/1.jpg'),
    require('../../../../../assets/profile/2.jpg'),
    require('../../../../../assets/profile/3.jpg'),
    require('../../../../../assets/profile/4.jpg'),
    require('../../../../../assets/profile/5.jpg'),
]
export default function Skills() {
    return (
        <View style={[gs.sectioncontainer , {marginTop: 8}]}>
            <Text style={gs.sectionTitle}>My Skills</Text>


            <View style={styles.photosContainer}>
                {photos.map((photo, index)=>{
                   
                    return (
                    
                     <Image source={photo} key={index} style={[styles.photo]} />
                        
                
                   
                    
                        ) })}
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    photosContainer: {
    //    flexDirection:'row',
    //    flexDirection:'wrap',
    //     marginTop:16,
    flex: 1,
    flexWrap:'wrap',
  
    flexDirection: 'row',
     
    },
    photo: {
        height: 115,
        width: 115,
        margin:6,
        borderRadius:10
    }
});
