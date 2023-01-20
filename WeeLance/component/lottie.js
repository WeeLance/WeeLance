import {View , Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';


const LottieAnimationScreen =()=>{
    return (
        <View >
  <Lottie
  style={{width:300, height:300}}
  source={require('../assets/laptop.json')} 
  autoPlay
  loop
  />

        </View>
    )
}


export default LottieAnimationScreen ;
