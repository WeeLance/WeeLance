import * as React from 'react';
import { Button, View , ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Avatar , Text , VStack ,Box, Center ,HStack , Image, Input, Icon} from 'native-base';
import styles from '../utils/styles';

import Category from '../utils/home'; 
import { Ionicons } from '@expo/vector-icons';
import Rating from './Rating'

 
function HomeScreen({ navigation }) {
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

       <ScrollView>  
                 <Box backgroundColor={'#1C2765'} shadow={2}  maxWidth="100%">
                  
                 <Image source={{uri:"https://res.cloudinary.com/dqz0n291c/image/upload/v1673044528/SCOOPER_tkmbde.png"}}
     resizeMode="cover" height={149} roundedTop="md"/>

    

      </Box>
      
                 <ScrollView
                 scrollEventThrottle={16} >
                  <View style={{flex: 1 ,paddingTop: 25 }}>
                    <Center >
                  <Input  margin={5}  bgColor={"transparent"} placeholder="Search" variant="filled" width="350" borderColor={"muted.200"} borderRadius="35" py="1" px="2" InputLeftElement={<Icon ml="2" size="4"  color="warning.400" as={<Ionicons name="ios-search" />} />} />

                    </Center>

                     <Text style={{fontSize: 20, fontWeight: '700' , paddingHorizontal: 10}}> 
                     Grapics & Design 
                     </Text>
                     <View style={{ height: 130, marginTop:20}}>
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
              
                     
                      <Category  imageUri={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                     
                      
                
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80"}} name="Walid abdeslem"/>
                      </ScrollView>
                     </View>
                  </View>

      </ScrollView>
                 <ScrollView
                 scrollEventThrottle={16} >
                  <View style={{flex: 1 ,paddingTop: 25 }}>
                     <Text style={{fontSize: 20, fontWeight: '700' , paddingHorizontal: 10}}> 
                     Programming & Tech
                     </Text>
                     <View style={{ height: 130, marginTop:20}}>
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                      <Category  imageUri={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                    
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80"}} name="Walid abdeslem"/>
                      </ScrollView>
                     </View>
                  </View>

      </ScrollView>
                 <ScrollView
                 scrollEventThrottle={16} >
                  <View style={{flex: 1 ,paddingTop: 25 }}>
                     <Text style={{fontSize: 20, fontWeight: '700' , paddingHorizontal: 10}}> 
                     Digital Marketing
                     </Text>
                     <View style={{ height: 130, marginTop:20}}>
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                      <Category  imageUri={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80"}} name="Walid abdeslem"/>
                       </ScrollView>
                    
                    
                    
                     </View>
                  </View>

      </ScrollView>



      <ScrollView
                 scrollEventThrottle={16} >
                  <View style={{flex: 1 ,paddingTop: 25 }}>
                     <Text style={{fontSize: 20, fontWeight: '700' , paddingHorizontal: 10}}> 
                     Video & Animation 
                     </Text>
                     <View style={{ height: 130, marginTop:20}}>
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                      <Category  imageUri={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80"}} name="Walid abdeslem"/>
                      </ScrollView>
                     </View>
                  </View>

      </ScrollView>
      <ScrollView
                 scrollEventThrottle={16} >
                  <View style={{flex: 1 ,paddingTop: 25 }}>
                     <Text style={{fontSize: 20, fontWeight: '700' , paddingHorizontal: 10}}> 
                    Music and Audio 
                     </Text>
                     <View style={{ height: 130, marginTop:20}}>
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                      <Category  imageUri={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80"}} name="Walid abdeslem"/>
                       </ScrollView>
                     </View>
                  </View>

      </ScrollView>

      <ScrollView
                 scrollEventThrottle={16} >
                  <View style={{flex: 1 ,paddingTop: 25 }}>
                     <Text style={{fontSize: 20, fontWeight: '700' , paddingHorizontal: 10}}> 
                     Buisness 
                     </Text>
                     <View style={{ height: 130, marginTop:20}}>
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}} name="Walid abdeslem"/>
                        <Category  imageUri={{uri:"https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80"}} name="Walid abdeslem"/>
                       </ScrollView>
                     </View>
                  </View>

      </ScrollView>


      </ScrollView>
              




















//       <VStack>
      

// <Box style={{padding:10}}> 
  
//     <HStack >
      
//       <Image  marginLeft={0.5} borderRadius={25}  source={{
//       uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672753573/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_1_xssl6n.png"
//     }} alt="Alternate Text" size="xl" />
//       <Image marginLeft={0.5}  borderRadius={25} source={{
//       uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769863/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_4_pfxyyd.png"
//     }} alt="Alternate Text" size="xl" />
//       <Image marginLeft={0.5}  borderRadius={25} source={{
//       uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769834/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_7_f4t7ia.png"
//     }} alt="Alternate Text" size="xl" />
//     </HStack>

//     </Box>
//       <Center marginTop={4} >
//       <Text bold fontSize="lg" color="#1C2765" marginBottom={4} >Programming</Text>
//       </Center>
// <Box style={{padding:10}}> 
  
//     <HStack >
      
//       <Image  marginLeft={0.5} borderRadius={25}  source={{
//       uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769717/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_6_f3u2r7.png"
//     }} alt="Alternate Text" size="xl" />
//       <Image marginLeft={0.5}  borderRadius={25} source={{
//       uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769765/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_5_nkzcnh.png"
//     }} alt="Alternate Text" size="xl" />
//       <Image marginLeft={0.5}  borderRadius={25} source={{
//       uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769802/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_3_yish3i.png"
//     }} alt="Alternate Text" size="xl" />
//     </HStack>

//     </Box>
     
   
  
//       </VStack>
     
      
      // <Text bold style={styles.text}>Grapics & Design </Text>
    
    );
  }
  
export default HomeScreen