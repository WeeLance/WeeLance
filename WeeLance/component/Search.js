import React from "react";
import { VStack,HStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading,Image ,Stack, Pressable ,Badge ,Spacer,Flex } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {TouchableOpacity} from 'react-native'

export default function Search({ navigation }) {
    return (
     
      <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   
   <VStack w="100%" space={5} alignSelf="center" alignItems={'center'} >
        <Input   placeholder="Search" variant="filled" width="90%" borderColor={'black'} borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
      </VStack>
      <Stack mb="2.5" mt="50" direction={{
        base: "column",
        md: "row"
      }} space={2} >
        
      
    
        <Box alignItems="center">
      <Pressable width={350}>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="#F14E24">
              <HStack alignItems="center">
              <Image source={{
      uri: "https://res.cloudinary.com/dqz0n291c/image/upload/v1672686764/graphic_design_ucnrxo.png"
    }} alt="Alternate Text" size="xs" />
                <Text colorScheme="darkBlue" _text={{
              color: "white"
            }} variant="solid" rounded="4">
                  Graphic & Design
                </Text>
                <Spacer />
              
              </HStack>
            
             
            </Box>;
      }}
      </Pressable>
    </Box>
       
    <Box alignItems="center">
      <Pressable width={350}>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="#F14E24">
              <HStack alignItems="center">
              <Image source={{
      uri: "https://res.cloudinary.com/dqz0n291c/image/upload/v1672688980/321933435_952355665736672_5670334860395096637_n_e7ryon.png"
    }} alt="Alternate Text" size="xs" />
                <Text colorScheme="darkBlue" _text={{
              color: "white"
            }} variant="solid" rounded="4">
                  Digital Marketing
                </Text>
                <Spacer />
              
              </HStack>
            
             
            </Box>;
      }}
      </Pressable>
    </Box>
         
    <Box alignItems="center">
      <Pressable width={350}>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="#F14E24">
              <HStack alignItems="center">
              <Image source={{
      uri: "https://res.cloudinary.com/dqz0n291c/image/upload/v1672689216/323104718_405535691757516_64578633585712750_n_ji6n3w.png"
    }} alt="Alternate Text" size="xs" />
                <Text colorScheme="darkBlue" _text={{
              color: "white"
            }} variant="solid" rounded="4">
                  Writing & Translation
                </Text>
                <Spacer />
              
              </HStack>
            
             
            </Box>;
      }}
      </Pressable>
    </Box>
         
    <Box alignItems="center">
      <Pressable width={350}>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="#F14E24">
              <HStack alignItems="center">
              <Image source={{
      uri: "https://res.cloudinary.com/dqz0n291c/image/upload/v1672689275/322930819_3437028629859965_8892030850391710350_n_rithkn.png"
    }} alt="Alternate Text" size="xs" />
                <Text colorScheme="darkBlue" _text={{
              color: "white"
            }} variant="solid" rounded="4">
                Programming & Tech
                </Text>
                <Spacer />
              
              </HStack>
            
             
            </Box>;
      }}
      </Pressable>
    </Box>
         
    <Box alignItems="center">
      <Pressable width={350}>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="#F14E24">
              <HStack alignItems="center">
              <Image source={{
      uri: "https://res.cloudinary.com/dqz0n291c/image/upload/v1672689345/image_2023-01-02_205543536_soud2u.png"
    }} alt="Alternate Text" size="xs" />
                <Text colorScheme="darkBlue" _text={{
              color: "white"
            }} variant="solid" rounded="4">
                  Video & Animation
                </Text>
                <Spacer />
              
              </HStack>
            
             
            </Box>;
      }}
      </Pressable>
    </Box>
         
    <Box alignItems="center">
      <Pressable width={350}>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="#F14E24">
              <HStack alignItems="center">
              <Image source={{
      uri: "https://res.cloudinary.com/dqz0n291c/image/upload/v1672689386/image_2023-01-02_205625116_k1g11m.png"
    }} alt="Alternate Text" size="xs" />
                <Text colorScheme="darkBlue" _text={{
              color: "white"
            }} variant="solid" rounded="4">
                  Music & Audio
                </Text>
                <Spacer />
              
              </HStack>
            
             
            </Box>;
      }}
      </Pressable>
    </Box>
         
    <Box alignItems="center">
      <Pressable width={350} >
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="#F14E24">
              <HStack alignItems="center">
              <Image source={{
      uri: "https://res.cloudinary.com/dqz0n291c/image/upload/v1672689426/image_2023-01-02_205705247_zsh965.png"
    }} alt="Alternate Text" size="xs" />
                <Text colorScheme="darkBlue"   _text={{
              color: "white"
            }} variant="solid" rounded="4">
                  Buisness
                </Text>
                <Spacer />
              
              </HStack>
            
             
            </Box>;
      }}
      </Pressable>
    </Box>
         
        </Stack>
       
    </Box>  
    );
  }
