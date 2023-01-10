import React, { useState } from 'react';
import {
  StyleSheet,
  // Text,
  View,
  Dimensions,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import styles from '../utils/styles';
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
  withSequence,
  withSpring,
} from 'react-native-reanimated';
import {
  Select,
  Center,
  FormControl,
  CheckIcon,
  WarningOutlineIcon,
  Box,
  HStack,
  Avatar, 
  Text
} from 'native-base';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,  
  sendPasswordResetEmail ,
  GoogleAuthProvider
} from 'firebase/auth';
import app from './firebase.js';
import axios from 'axios';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './home';
import SecondCateg from './SecondCateg';

export default function WelcomePage({ navigation }) {
  const { height, width } = Dimensions.get('window');
  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [role, setRole] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true); 
  const [falsePwd,setFalsePswd] =useState(false)
  const auth = getAuth(app); 
      const provider = new GoogleAuthProvider();


  const addUser = (idP, emailp) => {
    // const index = emailparam.indexOf("@")
    // const name = emailparam.substring(0,index)

    if (role === 'client') {
      axios
        .post(`http://10.0.2.2:5000/client/addClient`, {
          client_id: idP,
          name: name,
          email: emailp,
        })
        .then((res) => console.log('client  saved'))
        .catch((err) => console.log(err));
    } else if (role === 'freelancer') {
      axios
        .post(`http://10.0.2.2:5000/freelancer/addFreelancer`, {
          freelancer_id: idP,
          name: name,
          email: emailp,
        })
        .then((res) => console.log('freelancer saved'))
        .catch((err) => console.log(err));
    }
  };

  const register = () => {
    if (password === password2) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert('account created');
          addUser(user.uid, user.email);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert(errorCode);
        });
    }
    alert('confirm password');
  };

  const logIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        storeData(user.uid);
        navigation.navigate('Navigation');

        alert('welcome');
        // localStorage.setItem("id", user.uid);
        // navigate("/home")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);  
        setFalsePswd (true)

      });

  }; 
  const changePassword =()=>{  
    sendPasswordResetEmail(auth ,email) 
    .then(()=>{ 
      alert("password reset email sent")
    }) 
    .catch((err)=>{ 
    alert("inavalid email ")
    })
  } 
  // const checkEmail=()=>{ 
          
    
  //   }

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('id', value);
    } catch (e) {
      // saving error
    }
  }; 
   const singInWithGoogle =()=>{ 
  
      signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
     localStorage.setItem("id", result.user.uid)
   

   }) 
  }

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 0.957, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 90], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + 'deg', { duration: 1000 }) },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: formButtonScale.value }],
    };
  });

  const signinHandler = () => {
    imagePosition.value = 0;
    if (isRegistering) {
      runOnJS(setIsRegistering)(false);
    }
  };

  const signupHandler = () => {
    imagePosition.value = 0;
    if (!isRegistering) {
      runOnJS(setIsRegistering)(true);
    }
  };

  return (

    <Animated.View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            onPress={() => (imagePosition.value = 1)}
            href={require('../assets/logo1.png')}
            width={width}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
      </Animated.View>
      <View style={styles.bottomContainer}>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={signupHandler}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={signinHandler}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>
        </Animated.View>

        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          {!isRegistering && (
            <>
              <TextInput
                placeholder="Email"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(newText) => setEmail(newText)}
              />
              <TextInput
                placeholder=" Password"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(newText) => setPassword(newText)}
                secureTextEntry={isPasswordSecure}
              />  
              
              {/* <Pressable  
              onPress={()=> {changePassword()}} > 
              <Text  underline ="#1C2765" color={"1C2765"} >forgot password ?</Text>
              </Pressable>   */}
             
              
             
              <Animated.View
                style={[styles.formButton, formButtonAnimatedStyle]}
              >
                <Pressable
                  onPress={() => {
                    logIn();

                    return (formButtonScale.value = withSequence(
                      withSpring(0.9),
                      withSpring(1)
                    ));
                  }}
                >
                  <Text style={styles.buttonText}>{'Sign In'}</Text>
                </Pressable>
              </Animated.View>
            </>
          )}

          {isRegistering && (
            <>
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(newText) => setName(newText)}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(newText) => setEmail(newText)}
              />
              <TextInput
                placeholder=" Password"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(newText) => setPassword(newText)}
                secureTextEntry
              />
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(newText) => setPassword2(newText)}
                secureTextEntry
              />

              <Center>
                <FormControl margin={15} maxW="300" isRequired isInvalid>
                  <FormControl.Label>Choose role</FormControl.Label>
                  <Select
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    onValueChange={(value) => {
                      setRole(value);
                    }}
                    placeholder="Choose Service"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size={5} />,
                    }}
                    mt="0.5"
                  >
                    <Select.Item label="freelancer" value="freelancer" />
                    <Select.Item label="client" value="client" />
                  </Select>
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    Please make a selection!
                  </FormControl.ErrorMessage>
                </FormControl>
                <Box>
                  <HStack> 
                  <Pressable 
                    onPress={()=>{singInWithGoogle()}}>
                    <Avatar
                      bg="transparent"
                      alignSelf="center"
                      size="lg"
                      marginRight={5}
                      source={{
                        uri: 'https://res.cloudinary.com/dqz0n291c/image/upload/v1673042467/google_sclgfj.png',
                      }}
                    > 
                      GG
                    </Avatar>  
                    </Pressable>

                    
                    <Avatar
                      bg="transparent"
                      alignSelf="center"
                      size="lg"
                      source={{
                        uri: 'https://res.cloudinary.com/dqz0n291c/image/upload/v1673042509/facebook_dci7yr.png',
                      }}
                    > 
                    
                      GG
                    </Avatar> 
                  </HStack>
                </Box>{' '}
              </Center>

              <Animated.View
                style={[styles.formButton, formButtonAnimatedStyle]}
              >
                <Pressable
                  onPress={() => {
                    register();
                    return (formButtonScale.value = withSequence(
                      withSpring(1.5),
                      withSpring(1)
                    ));
                  }}
                >
                  <Text style={styles.buttonText}>{'Sign Up'}</Text>
                </Pressable>
              </Animated.View>
            </>
          )}
        </Animated.View>
      </View>
    </Animated.View>
  );
}
