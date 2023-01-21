import {View , Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';



const LocationAnimation =()=>{
    return (
        <View style={{alignItems : "center"}} >
  <Lottie
  style={{width:60, height:60}}
  source={require('../../../../../assets/map.json')} 
  autoPlay
  loop
  />

        </View>
    )
}



export default LocationAnimation ;