//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gs, colors } from '../../../HomeStyle';
import { Ionicons, Entypo } from '@expo/vector-icons';

// create a component

export default function Header  ({ name ,category})  {
    console.log(name);
  return (
    <LinearGradient colors={[colors.orange , colors.pink]} start={[1,1]} end={[2,3]} > 
             <View style={{marginHorizontal: 11 , paddingVertical:2 , color:'#1C2765', height:310 }}>
            <View style={gs.rowBetween}> 
            <Ionicons  name='' color={colors.pink} size={32}/>
            <Entypo  name='dots-three-vertical' color={colors.text} size={24}/>
            </View>
 
 <View style={{top:-30}} >
      <View style={styles.imageContainer}>
                <View>
                    <View>
                        <View style={styles.check}>
                         <Ionicons name='md-checkmark' size={20} color={colors.pink} />

                        </View>
                        <Image source={{ uri:'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80' }}
 style={{width: 100 , height: 100 ,  borderRadius:  32}}/>
                    </View>
                </View>
            </View>
            <View style={[gs.center , {marginVertical:12}]} >
                <Text style={gs.title}>{name}</Text>
                <Text style={[gs.title, {marginTop: 8}]}>{category }</Text>

                <TouchableOpacity borderRadius={25} style={styles.follow}>
                    <Entypo name='plus' size={20} color="rgba(255, 255, 255, 0.6)"/>
                    <Text style={styles.followText}>Follow</Text>
                </TouchableOpacity>


            </View>
            </View>
          


            </View>
            </LinearGradient>





  );
};

// define your styles
const styles = StyleSheet.create({
  imageContainer: {
    ...gs.center,
    marginTop: 16,
  },
  check: {
    ...gs.center,
    backgroundColor: colors.text,
    borderRadius: 100,
    width: 32,
    height: 32,
    position: 'absolute',
    zIndex: 1,
    right: -16,
    bottom: 16,
  },
  follow: {
    ...gs.button,
    ...gs.rowCenter,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 16,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 2,
    borderRadius: 25,
  },
  followText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '600',
    marginLeft: 4,
  },
});
