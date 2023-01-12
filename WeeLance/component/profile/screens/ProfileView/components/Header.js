//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {gs , colors} from '../../../HomeStyle'
import { Ionicons , Entypo } from '@expo/vector-icons';

// create a component
export default class Header extends React.Component {
 render() {  
    const user = this.props.user
    const name= `${user.name.first} ${user.name.last}`
    return (
        <LinearGradient colors={[colors.orange , colors.pink]} start={[0,0]} end={[1,1]}> 
             <View style={{marginHorizontal: 11 , paddingVertical:2 , color:'#1C2765', height:310}}>
            <View style={gs.rowBetween}> 
            <Ionicons  name='md-arrow-back' color={colors.text} size={32}/>
            <Entypo  name='dots-three-vertical' color={colors.text} size={24}/>
            </View>

 <View style={{top:-10}} >
      <View style={styles.imageContainer}>
                <View>
                    <View>
                        <View style={styles.check}>
                         <Ionicons name='md-checkmark' size={20} color={colors.pink} />

                        </View>
                        <Image source={{uri: user.picture.large}} style={{width: 100 , height: 100 ,  borderRadius:  32}}/>
                    </View>
                </View>
            </View>
            <View style={[gs.center , {marginVertical:12}]}>
                <Text style={gs.title}>{name}</Text>
                <Text style={[gs.subTitle, {marginTop: 8}]}>Web Developer</Text>

                <TouchableOpacity borderRadius={25} style={styles.follow}>
                    <Entypo name='plus' size={20} color="rgba(255, 255, 255, 0.6)"/>
                    <Text style={styles.followText}>Follow</Text>
                </TouchableOpacity>


            </View>
            </View>
          


            </View>
            </LinearGradient>


          
        ); }
       
    
}

// define your styles
const styles = StyleSheet.create({
    imageContainer: {
        ...gs.center,
        marginTop : 16
    },
    check:{
        ...gs.center,
        backgroundColor :colors.text,
        borderRadius:100,
        width : 32 , 
        height: 32,
        position: 'absolute',
        zIndex:1 ,
        right : -16,
        bottom:16,
    },
    follow:{
        ...gs.button,
        ...gs.rowCenter,
        paddingHorizontal:24,
        paddingVertical: 8,
         marginTop:16,
         borderColor:'rgba(255, 255, 255, 0.5)',
         borderWidth: 2,
         borderRadius:25
    },
    followText:{
        fontSize: 16,
        color: colors.text,
         fontWeight: "600",
         marginLeft:   4,

    }
});

