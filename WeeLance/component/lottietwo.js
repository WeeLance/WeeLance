import {View , Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';



const LottieAnimationScreen2 =()=>{
    return (
        <View style={{alignItems : "center"}} >
  <Lottie
  style={{width:200, height:150}}
  source={require('../assets/addp.json')} 
  autoPlay
  loop
  />

        </View>
    )
}



export default LottieAnimationScreen2 ;