import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Pressable, 
  TouchableOpacity
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
import { Select,Center ,FormControl,CheckIcon , WarningOutlineIcon} from "native-base";  
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import app from "./firebase.js"  ;
import axios from "axios" ; 
import {MaterialCommunityIcons} from '@expo/vector-icons'


export default function WelcomePage() {
  const { height, width } = Dimensions.get('window');
  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);
  const [isRegistering, setIsRegistering] = useState(false);   
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")  ;
  const [password2,setPassword2] = useState("")   
  const [role,setRole] = useState("") 
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const auth = getAuth(app) ; 
  


const addUser=(idP ,emailp)=>{    
  // const index = emailparam.indexOf("@") 
  // const name = emailparam.substring(0,index)  
  
  if (role === "client"){ 
  axios.post(`http://10.0.2.2:5000/client/addClient`,{  client_id : idP, name :name, email:emailp}) 
  .then((res)=>console.log("client  saved"))   
  .catch((err)=> console.log(err))
} 
else if (role=== "freelancer") {    
   axios.post(`http://10.0.2.2:5000/freelancer/addFreelancer`,{  freelancer_id : idP, name :name, email:emailp}) 
.then((res)=>console.log("freelancer saved"))   
.catch((err)=> console.log(err))   
  }
 }

  const register=()=>{ 
    if(password === password2) { 
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => { 
      const user = userCredential.user;
       alert("account created") 
       addUser(user.uid ,user.email) 
     })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // .. 
        alert(errorCode)  
        }); 
      } 
    alert ("confirm password")
   }   


   const logIn =()=>{ 
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user; 
        

        alert("welcome")  
        // localStorage.setItem("id", user.uid);
        // navigate("/home")

        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message; 
        alert(errorCode)
      }); 
     
    
} 
  





  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 0.95, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
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
            href={require('../assets/Logo.jpg')}
            width={width}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
        <Animated.View
          style={[styles.closeButtonContainer, closeButtonContainerStyle]}
        >
          <Text onPress={() => (imagePosition.value = 1)}>X</Text>
        </Animated.View>
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
            onChangeText={newText => setEmail(newText)}
          />
                <TextInput
                  placeholder=" Password"
                  placeholderTextColor="black"
                  style={styles.textInput} 
                  onChangeText={newText => setPassword(newText)} 
                  secureTextEntry={isPasswordSecure}  
              
                
                />  
                  <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
            <Pressable
              onPress={() =>  
                logIn()  
              
                (formButtonScale.value = withSequence(
                  withSpring(1.5),
                   withSpring(1)
                ))  
                
              }  
              
              
            >
              <Text style={styles.buttonText}>
                { 'Sign In'}
              </Text>
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
                    onChangeText={newText => setName(newText)}
                  /> 
                      <TextInput
                       placeholder="Email"
                       placeholderTextColor="black"
                       style={styles.textInput} 
                        onChangeText={newText => setEmail(newText)}
                      /> 
                           <TextInput
                  placeholder=" Password"
                  placeholderTextColor="black"
                  style={styles.textInput} 
                  onChangeText={newText => setPassword(newText)} 
                  secureTextEntry 
                  />
                <TextInput
                  placeholder="Confirm Password"
                  placeholderTextColor="black"
                  style={styles.textInput} 
                  onChangeText={newText => setPassword2(newText)} 
                  secureTextEntry 

                />   
                {/* { password !== password2 ? 
                <>
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage> 
        </> :<></> } */}
          <Center>
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Choose role</FormControl.Label>
        <Select minWidth="200" accessibilityLabel="Choose Service" onValueChange={(value)=>{setRole(value)}}   placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
      }} mt="0.5"  >
          <Select.Item label="freelancer" value="freelancer"  />
          <Select.Item label="client" value="client"  />
         
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>

          <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
            <Pressable
              onPress={() =>  
                register()
                (formButtonScale.value = withSequence(
                  withSpring(1.5),
                   withSpring(1)
                ))
              }
            >
              <Text style={styles.buttonText}>
                { 'Sign Up'}
              </Text>
            </Pressable>
          </Animated.View> 
            </>
          )}
          
 

        </Animated.View>
      </View>
    </Animated.View>
  );
}
