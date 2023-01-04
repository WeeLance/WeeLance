import * as React from 'react';
import { Button, View  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Avatar , Text , VStack , Image ,Box, Center ,HStack } from 'native-base';
import styles from '../utils/styles';
 
function HomeScreen({ navigation }) {  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('id')
      if(value !== null) {
        // value previously stored 
        console.log(value);
      }
    } catch(e) {
      // error reading value
    }
  }
  const myRef = React.useRef(null);
  React.useEffect(() => {
    if (myRef.current && myRef.current.setNativeProps) {
      const styleObj = {
        borderWidth: 1.5,
        borderRadius: 25,
        borderColor: "#f14e24"
        
      };
      myRef.current.setNativeProps({
        style: styleObj
      });
    }
  }, [myRef]);
    return (
      <VStack>
      
         <Box backgroundColor={'#1C2765'} shadow={2} rounded="lg" maxWidth="100%">
      <Image source={{
      uri: 'https://res.cloudinary.com/dnwi9wvci/image/upload/v1672752125/ssshel-removebg-preview_h1b5hl.png'
    }} alt="image base" resizeMode="cover" height={150} roundedTop="md" />

      </Box>
      <Center marginTop={4} >
      <Text bold fontSize="lg" color="#1C2765" marginBottom={4} >Grapics & Design </Text>
      </Center>
<Box style={{padding:10}}> 
  
    <HStack >
      
      <Image  marginLeft={0.5} borderRadius={25}  source={{
      uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672753573/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_1_xssl6n.png"
    }} alt="Alternate Text" size="xl" />
      <Image marginLeft={0.5}  borderRadius={25} source={{
      uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769863/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_4_pfxyyd.png"
    }} alt="Alternate Text" size="xl" />
      <Image marginLeft={0.5}  borderRadius={25} source={{
      uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769834/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_7_f4t7ia.png"
    }} alt="Alternate Text" size="xl" />
    </HStack>

    </Box>
      <Center marginTop={4} >
      <Text bold fontSize="lg" color="#1C2765" marginBottom={4} >Programming</Text>
      </Center>
<Box style={{padding:10}}> 
  
    <HStack >
      
      <Image  marginLeft={0.5} borderRadius={25}  source={{
      uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769717/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_6_f3u2r7.png"
    }} alt="Alternate Text" size="xl" />
      <Image marginLeft={0.5}  borderRadius={25} source={{
      uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769765/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_5_nkzcnh.png"
    }} alt="Alternate Text" size="xl" />
      <Image marginLeft={0.5}  borderRadius={25} source={{
      uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769802/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_3_yish3i.png"
    }} alt="Alternate Text" size="xl" />
    </HStack> 
   

    </Box> 
  
     
   
  
      </VStack>
     
      
      // <Text bold style={styles.text}>Grapics & Design </Text>
    
    );
  }
  
export default HomeScreen