import * as React from 'react';
import { Button, View , ScrollView , Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Avatar , Text , VStack ,Box, Center ,HStack } from 'native-base';
import styles from '../utils/styles';
import Category from '../utils/home';
 

import AsyncStorage from '@react-native-async-storage/async-storage';

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

       <ScrollView> 
                 <Box backgroundColor={'#1C2765'} shadow={2} rounded="lg" maxWidth="100%">
                  
                 <Image source={require('../assets/home/top.png')}
     resizeMode="cover" height={150}  roundedTop="md"/>
    

      </Box>
      
                 <ScrollView
                 scrollEventThrottle={16} >
                  <View style={{flex: 1 ,paddingTop: 25 }}>
                     <Text style={{fontSize: 20, fontWeight: '700' , paddingHorizontal: 10}}> 
                     Grapics & Design 
                     </Text>
                     <View style={{ height: 130, marginTop:20}}>
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                        <Category  imageUri={require('../assets/home/first.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/fourth.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/third.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/sev.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/nine.png')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/se.png')} name="Walid abdeslem"/>
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
                        <Category  imageUri={require('../assets/home/first.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/fourth.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/third.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/sev.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/nine.png')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/se.png')} name="Walid abdeslem"/>
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
                        <Category  imageUri={require('../assets/home/first.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/fourth.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/third.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/sev.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/nine.png')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/se.png')} name="Walid abdeslem"/>
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
                        <Category  imageUri={require('../assets/home/first.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/fourth.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/third.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/sev.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/nine.png')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/se.png')} name="Walid abdeslem"/>
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
                        <Category  imageUri={require('../assets/home/first.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/fourth.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/third.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/sev.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/nine.png')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/se.png')} name="Walid abdeslem"/>
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
                        <Category  imageUri={require('../assets/home/first.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/fourth.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/third.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/sev.jpg')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/nine.png')} name="Walid abdeslem"/>
                        <Category  imageUri={require('../assets/home/se.png')} name="Walid abdeslem"/>
                      </ScrollView>
                     </View>
                  </View>

      </ScrollView>


      </ScrollView>
              





















      

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
  
     {/* <Button title='id' 
     onPress={()=>{getData()}}></Button> */}

   
  
//       </VStack>
     
      
      // <Text bold style={styles.text}>Grapics & Design </Text>
    
    );
  }
  
export default HomeScreen