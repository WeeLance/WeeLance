

  import * as React from 'react';
  import { Button, View } from 'react-native';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { NavigationContainer } from '@react-navigation/native';
  import {  Pressable,Image,NativeBaseProvider, Divider,Avatar,ScrollView , Box , HStack ,Text,Spacer, VStack, Center } from 'native-base';
  

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
          <Text marginTop={2}  color="#1C2765" bold fontSize="sm" colorScheme="darkBlue"  variant="solid" rounded="4" marginBottom={0.1} marginLeft={2}>
             Personal Information 
             </Text>
             <Box alignItems="center">
      <Pressable width={400}>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return  <Box borderColor={isPressed ? "#F14E24" : "muted.400"}  p="5" rounded="8"  borderWidth="2" >
        <VStack>
          <HStack>
        <Text  fontSize="md" color="#1C2765" colorScheme="darkBlue"  variant="solid" marginLeft={-1} rounded="4">
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
            <Text color="#1C2765" bold fontSize="sm" colorScheme="darkBlue"  variant="solid" rounded="4" marginBottom={0.1} marginLeft={2}>
             Skills 
             </Text>
             <Box alignItems="center">
      <Pressable width={400}>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return  <Box borderColor={isPressed ? "#F14E24" : "muted.400"}  p="5" rounded="8"  borderWidth="1" >
        <VStack>
       <HStack>
       <Box borderColor={"muted.400"}   p="6" rounded="sm"  borderWidth="2" >
      Skills
    </Box>
       <Box  p="12" rounded="xl" >
      Skills
    </Box>
       </HStack>
        </VStack>
        </Box>;
      }}
      </Pressable>
    </Box>
    
        </VStack>
        <VStack>
        <Text color="#1C2765" bold fontSize="sm" colorScheme="darkBlue"  variant="solid" rounded="4" marginBottom={0.1} marginLeft={2}>
             Project History :
             </Text>
             <Box alignItems="center">
      <Pressable width={400}>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return  <Box borderColor={isPressed ? "#F14E24" : "muted.400"}  p="5" rounded="8"  borderWidth="2" >
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