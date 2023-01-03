import * as React from 'react';
import { VStack, HStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading, Image, Stack, Pressable, Badge, Spacer, Flex } from "native-base";

import { NavigationContainer } from '@react-navigation/native';




function Settings({ navigation }) {
  return (
    <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

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
              return <Box bg={isPressed ? "#1C2765" :  isHovered ? "coolGray.200" : "FFFFFF"} style={{
                transform: [{
                  scale: isPressed ? 0.96 : 1
                }]
              }} p="5" rounded="8"  borderWidth="1" borderColor="#F14E24" marginTop="-20">
                <HStack alignItems="center"
                >
                  <Image source={{
                    uri: "https://res.cloudinary.com/dvbj08pdl/image/upload/v1672743720/2846124_jybaph.png"
                  }} alt="Alternate Text" size="xs" />
                  <Text colorScheme="darkBlue" color={isPressed ? "#FFFFFF" : isHovered ? "coolGray.200" : "#1C2765"}  variant="solid" rounded="4">

                    Information Managment
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
              return <Box bg={isPressed ? "#1C2765" :  isHovered ? "coolGray.200" : "FFFFFF"} style={{
                transform: [{
                  scale: isPressed ? 0.96 : 1
                }]
              }} p="5" rounded="8" borderWidth="1" borderColor="#F14E24" marginTop="10">
                <HStack alignItems="center">
                  <Image source={{
                    uri: "https://res.cloudinary.com/dvbj08pdl/image/upload/v1672743815/images-removebg-preview_3_zuqpwv.png"
                  }} alt="Alternate Text" size="xs" />
                  <Text colorScheme="darkBlue" color={isPressed ? "#FFFFFF" : isHovered ? "coolGray.200" : "#1C2765"}  variant="solid" rounded="4">
                    Security
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
              return <Box bg={isPressed ? "#1C2765" :  isHovered ? "coolGray.200" : "FFFFFF"} style={{
                transform: [{
                  scale: isPressed ? 0.96 : 1
                }]
              }} p="5" rounded="8"  borderWidth="1" borderColor="#F14E24" marginTop="10">
                <HStack alignItems="center">
                  <Image source={{
                    uri: "https://res.cloudinary.com/dvbj08pdl/image/upload/v1672743891/images-removebg-preview_4_ynez0j.png"
                  }} alt="Alternate Text" size="xs" />
                  <Text  colorScheme="darkBlue" color={isPressed ? "#FFFFFF" : isHovered ? "coolGray.200" : "#1C2765"} variant="solid" rounded="4">
                    Notifications
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

export default Settings