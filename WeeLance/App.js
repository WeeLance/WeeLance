import React , {useState} from "react"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; 
import app from "./components/firebase" 
import "firebase/firestore";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  VStack, 
  NativeBaseProvider,
  Box,FormControl,Input,Button
} from "native-base";
// import NativeBaseIcon from "./components/NativeBaseIcon";
import { Alert, Platform,TextInput ,View } from "react-native";
// import { event } from "react-native-reanimated";
export default function App() {   
  const [values, setValues] = useState({
    name: "",
    // role: "",
    email: "",
    pwd: "",
    pwd2: ""
})  

function handleChange(text, eventName) {
  setValues(prev => {
      return {
          ...prev,
          [eventName]: text
      }
  })
}
console.log(email);
  
 
  const auth = getAuth(app); 
 


  function SignUp() {

   

    if (pwd == pwd2) {
        auth().createUserWithEmailAndPassword(email, pwd)
            .then(() => {
                firestore().collection("users").doc(auth().currentUser.uid).set({
                    uid: auth().currentUser.uid,
                    name,
                    role,
                    email
                })
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
    } else {
        alert("Passwords are different!")
    }
}
  







  return (  
   <NativeBaseProvider>

    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
        <FormControl>
            <FormControl.Label>name</FormControl.Label>
            <Input onChangeText={text => handleChange(text, "name")} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input onChangeText={text => handleChange(text, "email")} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password"   onChangeText={text => handleChange(text, "pwd")}/>
          </FormControl> 
          <FormControl>
            <FormControl.Label>confirm password</FormControl.Label>
            <Input type="password"  onChangeText={text => handleChange(text, "pwd2")}/>
          </FormControl> 
          {/* <TextInput placeholder="Who are you? (Student or Teacher)"  /> */}
          <Button mt="2" colorScheme="indigo">
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>  
    </NativeBaseProvider>
  )
};





