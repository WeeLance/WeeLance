

  import * as React from 'react';
  import { View } from 'react-native';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { NavigationContainer } from '@react-navigation/native';
  import { Button,Select, Modal, Stack, FormControl, Input, Pressable, Divider,Avatar,ScrollView , Box , HStack ,Text,Spacer, VStack,Image, Center } from 'native-base';
  import Example from './modal'  
  import SkillModel from './SkillModel';
  import { MaterialCommunityIcons,AntDesign,FontAwesome5 } from "@expo/vector-icons";
  import { Path, G } from "react-native-svg";


  function FLProfile({ navigation }) {
      return (
       <ScrollView>
        <View  style={{ flex: 1 }}>
         <Box backgroundColor={'#1C2765'}  p="10" rounded="8"   >
         <HStack w="100%" space={5} alignSelf="center" alignItems={'center'} >
      
        
         <Avatar bg="pink.600" alignSelf="center" size="xl" source={{
        uri: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80"
      }}>
          GG
        </Avatar>
        <VStack>
        <Text bold fontSize="xl" color="white" colorScheme="darkBlue" variant="solid" rounded="4">
                 fake person
                </Text>
                
                
        <Text fontSize="md"  colorScheme="darkBlue" color="#F14E24" variant="solid" rounded="4">
                  Graphic  Designer
                </Text>
                <Spacer />
                </VStack>
        </HStack>
        </Box>
        <Divider />
        <Box  >
        <VStack  >
        <HStack>
          <Text underline  marginTop={2} marginRight={175} color="#1C2765" bold fontSize="md" colorScheme="darkBlue"  variant="solid" rounded="4" marginBottom={0.1} marginLeft={2}>
             Personal Information :
             </Text>
             <Example  /> 
             </HStack>
             <Box alignItems="center">
              
      <Pressable width={400}>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return  <Box borderColor={isPressed ? "#F14E24" : "muted.400"} style={{
          transform: [{
            scale: isPressed ? 0.95 : 1
          }]
        }}  p="5" rounded="8"  borderWidth="2" >
        <VStack>
<Box size={75} marginLeft={280}>
         
</Box>
          <HStack marginTop={-20} >
        <Text  fontSize="md"  color="#1C2765"  colorScheme="darkBlue"  variant="solid" marginLeft={-1} rounded="4">
                 Adress :
                </Text>
                <Text fontSize="md" color="#1C2765" colorScheme="darkBlue"  variant="solid" marginLeft={2} rounded="4"> 
                  mourouj 5 ,rue de cipidre
                </Text>
          </HStack> 
          <HStack>
        <Text  fontSize="md" color="#1C2765" colorScheme="darkBlue"  variant="solid" marginLeft={-1} rounded="4">
                 Phone number :
                </Text>
                <Text fontSize="md" color="#1C2765" colorScheme="darkBlue"  variant="solid" marginLeft={2} rounded="4"> 
                  27414994
                </Text>
          </HStack>
          <HStack>
        <Text  fontSize="md" color="#1C2765" colorScheme="darkBlue"  variant="solid" marginLeft={-1} rounded="4">
                 Email :
                </Text>
                <Text fontSize="md" color="#1C2765" colorScheme="darkBlue"  variant="solid" marginLeft={2} rounded="4"> 
                  cipidre@gmail.com
                </Text>
          </HStack>
        </VStack>
        </Box>;
      }}
      </Pressable>
    </Box>
    
        </VStack>
            <VStack>
              <HStack>
            <Text underline color="#1C2765" marginTop={2} marginRight={300} bold fontSize="md" colorScheme="darkBlue"  variant="solid" rounded="4" marginBottom={0.1} marginLeft={2}>
             Skills :
             </Text>
             <SkillModel  /> 

             </HStack>
             <Box alignItems="center">
      <Pressable width={400}>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return  <Box borderColor={isPressed ? "#F14E24" : "muted.400"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" rounded="8"  borderWidth="1" >
        <VStack>
       <HStack >
      
       {/* <Image source={{
      uri: "https://res.cloudinary.com/dqz0n291c/image/upload/v1672847799/javascript_o0wvki.png"
    }} alt="Alternate Text" size="lg" />
       <Image marginLeft={2} source={{
      uri: "https://res.cloudinary.com/dqz0n291c/image/upload/v1672847589/react-removebg-preview_1_z4akdf.png"
    }} alt="Alternate Text" size="lg" />
       <Image marginLeft={2} source={{
      uri: "https://res.cloudinary.com/dqz0n291c/image/upload/v1672848226/mongo_tjmo95.png"
    }} alt="Alternate Text" size="lg" /> */}
                     
{/*               
              <Pressable width={'auto'} height={'auto'} margin={2}>
                {({
                isHovered,
                isFocused,
                isPressed
              }) => {
                return  <Box borderColor={isPressed ? "#F14E24" : "muted.400"} style={{
                  transform: [{
                    scale: isPressed ? 0.95 : 1
                  }]
                }}  p="3" rounded="8"  borderWidth="2" >
                
        
                  
                <Text marginTop={-3} fontSize="md"  color="#1C2765"  colorScheme="darkBlue"  variant="solid"  rounded="4">
                         javascript
                        </Text>
                 
                
                </Box>;
              }}
              </Pressable>
              <Pressable width={'auto'} height={'auto'} margin={2}>
                {({
                isHovered,
                isFocused,
                isPressed
              }) => {
                return  <Box borderColor={isPressed ? "#F14E24" : "muted.400"} style={{
                  transform: [{
                    scale: isPressed ? 0.95 : 1
                  }]
                }}  p="3" rounded="8"  borderWidth="2" >
                
        
                  
                <Text marginTop={-3} fontSize="md"  color="#1C2765"  colorScheme="darkBlue"  variant="solid"  rounded="4">
                         javascript
                        </Text>
                 
                
                </Box>;
              }}
              </Pressable>
              <Pressable width={'auto'} height={'auto'} margin={2}>
                {({
                isHovered,
                isFocused,
                isPressed
              }) => {
                return  <Box borderColor={isPressed ? "#F14E24" : "muted.400"} style={{
                  transform: [{
                    scale: isPressed ? 0.95 : 1
                  }]
                }}  p="3" rounded="8"  borderWidth="2" >
                
        
                  
                <Text marginTop={-3} fontSize="md"  color="#1C2765"  colorScheme="darkBlue"  variant="solid"  rounded="4">
                         javascript
                        </Text>
                 
                
                </Box>;
              }}
              </Pressable>
             */}
             <Box margin={3}>
             <FontAwesome5 size={50} color={'#1C2765'}  name='react' /></Box>
             <Box margin={3}>
             <FontAwesome5 size={50} color={'#1C2765' }  name='js' /></Box>
             <Box margin={3}>
             <FontAwesome5 size={50} color={'#1C2765' }  name='github' /></Box>
             <Box margin={3}>
             <FontAwesome5 size={50} color={'#1C2765' }  name='angular' /></Box>
             <Box margin={3}>
             <FontAwesome5 size={50} color={'#1C2765' }  name='js' /></Box>
             <Box margin={3}>
             <FontAwesome5 size={50} color={'#1C2765' }  name='js' /></Box>
             <Box margin={3}>
             <FontAwesome5 size={50} color={'#1C2765' }  name='js' /></Box>
             
       </HStack>
        </VStack>
        </Box>;
      }}
      </Pressable>
    </Box>
    
        </VStack>
        <VStack>
        <Text underline color="#1C2765" bold fontSize="md" colorScheme="darkBlue"  variant="solid" rounded="4" marginBottom={0.1} marginLeft={2}>
             Project History :
             </Text>
             <Box alignItems="center">
      <Pressable width={400}>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return  <Box borderColor={isPressed ? "#F14E24" : "muted.400"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" rounded="8"  borderWidth="2" >
        <VStack>
          <HStack>
        <Text  fontSize="md" color="#1C2765" colorScheme="darkBlue"  variant="solid" marginLeft={-1} rounded="4">
                 Adress :
                </Text>
                <Text fontSize="md" color="#1C2765" colorScheme="darkBlue"  variant="solid" marginLeft={1} rounded="4"> 
                  mourouj 5 ,rue de cipidre
                </Text>
          </HStack> 
          <HStack>
        <Text  fontSize="md" color="#1C2765" colorScheme="darkBlue"  variant="solid" marginLeft={-1} rounded="4">
                 Phone number :
                </Text>
                <Text fontSize="md" color="#1C2765" colorScheme="darkBlue"  variant="solid" marginLeft={2} rounded="4"> 
                  27414994
                </Text>
          </HStack>
          <HStack>
        <Text  fontSize="md" color="#1C2765" colorScheme="darkBlue"  variant="solid" marginLeft={-1} rounded="4">
                 Email :
                </Text>
                <Text fontSize="md" color="#1C2765" colorScheme="darkBlue"  variant="solid" marginLeft={2} rounded="4"> 
                  cipidre@gmail.com
                </Text>
          </HStack>
        </VStack>
        </Box>;
      }}
      </Pressable>
    </Box>
    
        </VStack>
        </Box>
        </View>
        </ScrollView>
      );
    }
    
  export default FLProfile