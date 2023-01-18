import { useEffect, useState } from 'react';
import { View, Text, Animated, Image } from 'react-native';


const SplashScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(0))
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000
    }).start();
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
            source={require('../assets/SCOOPER_byijdf.gif')}
            style={{width:'100%', height:"100%"}}
        />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;