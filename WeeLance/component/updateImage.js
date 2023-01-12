import {View ,Text , StyleSheet , TouchableOpacity , SafeAreaView , Alert ,Image } from 'react-native' ;
import React , {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import app from './firebase'
import styles from '../utils/styles';
const UploadScreen =()=>{
    const [image , setImage]=useState(null)
    const [uploading , setUploading]=useState(false)
    const pickImage = async ()=>{
        let result = await ImagePicker.lunchImageLibraryAsync({
            mediaTypes : ImagePicker.MediaTypeOptions.All,
            allowsEditing : true,
            aspect:[4,3],
            quality : 1
        });
        const source = {uri : result.ur};
         console.log(source);
         setImage(source)
    }
    const uploadImage = async ()=>{
        setUploading(true)
    const response = await fetch(image.uri)
    const blob =await response.blob();
    const filename=image.uri.substring(image.uri.lastIndexOf('/')+1)
    var ref=firebase.storage().ref().child(filename).put(blob);
    try {
        await ref;

    }catch(e){
        console.log(e);
    }
    setUploading (false);
    Alert.alert('Photo uploadedddd!!!')
setImage(null)    
}
 
    return (
        <SafeAreaView style={styles1.container}>
            <TouchableOpacity style={styles1.selectButton} onPress={pickImage}>
        <Text style={styles1.buttonText}> Pick an image</Text>
            </TouchableOpacity>
<View style={styles1.imageContainer}>
    {image && < Image source ={{uri:image.uri}} style={{ width:300,height:300}} />}
<TouchableOpacity    style={styles1.uploadButton} onPress={uploadImage}>
 <Text style={styles1.buttonText}>
    upload Image
 </Text>
</TouchableOpacity>
</View>
        </SafeAreaView>
    )




}
export default UploadScreen
const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#000',
        justifyContent:'center'
    },
    uploadButton:{
        borderRadius:5,
        width:150,
        height:50,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    imageContainer:{
        flex:1,
marginTop : 30 ,
marginBottom:50,
alignItems:'center'
    }
})