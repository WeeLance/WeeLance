import React ,{useState}from 'react' 
import { Input,FormControl,View,Button  } from 'native-base' 
import { SafeAreaView } from "react-native"; 
import app  from './firebase';  
import { getAuth } from 'firebase/auth';
// import * as firebase from "firebase" 
import { EmailAuthProvider , reauthenticateWithCredential , updatePassword} from "firebase/auth"


export default function Changepassword() {  
  const auth = getAuth(app) 
  const [currentPwd , setCurrentPwd] =useState("")
  const [newPwd , setNewPwd] =useState("") 


  const reauthenticate =(currentPwd)=>{ 
  var user =  auth.currentUser ; 
  console.log(user.email);
  var cred = EmailAuthProvider.credential(user.email ,currentPwd) ; 
  return  reauthenticateWithCredential( user,cred)
  }  
  const onChangePwd = ()=>{  
    reauthenticate(currentPwd) .then (()=>{  
var user = auth.currentUser ; 
  updatePassword( user , newPwd) .then (()=> {  
    alert ("password changed")
  }) 
  .catch ((error)=> { alert(error)})

    })
  }

  return (
    <View>  
        <SafeAreaView>
        <FormControl> 
            <FormControl.Label>current password</FormControl.Label>
        <Input onChangeText={(newTewt) => {setCurrentPwd(newTewt)}}></Input>
        </FormControl>  
        <FormControl> 
            <FormControl.Label>new password</FormControl.Label>
        <Input onChangeText={(newTewt) => {setCurrentPwd(newTewt)}}></Input>
        </FormControl> 
        </SafeAreaView> 
        <Button onPress={()=>{ onChangePwd()}}>CHANGE PWD</Button>
    </View>
  )
}
