import React from "react";
import { VStack, HStack, Input, ScrollView, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading, Image, Stack, Pressable, Badge, Spacer, Flex } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native'

export default function UserInformation({ navigation }) {
  return (
    <ScrollView>
      <Box backgroundColor={'#FFFFFF'} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <VStack w="100%" space={5} alignSelf="center" alignItems={'center'} >
          <Input marginTop={10} placeholder="Bio..." variant="filled" width="90%" borderColor={'black'} borderRadius="10" py="1" px="2" />
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
                return <Box bg={isPressed ? "#1C2765" : isHovered ? "coolGray.200" : "#FFFFFF"} style={{
                  transform: [{
                    scale: isPressed ? 0.96 : 1
                  }]
                }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="#F14E24">
                  <HStack alignItems="center">
                    <Image source={{
                      uri: "https://res.cloudinary.com/dvbj08pdl/image/upload/v1672851959/adress_hiksoj.png"
                    }} alt="Alternate Text" size="xs" />
                    <Text color={isPressed ? "#FFFFFF" : isHovered ? "coolGray.200" : "#1C2765"} colorScheme="darkBlue" variant="solid" rounded="4">
                      Address
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
                return <Box bg={isPressed ? "#1C2765" : isHovered ? "coolGray.200" : "#FFFFFF"} style={{
                  transform: [{
                    scale: isPressed ? 0.96 : 1
                  }]
                }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="#F14E24">
                  <HStack alignItems="center">
                    <Image source={{
                      uri: "https://res.cloudinary.com/dvbj08pdl/image/upload/v1672852023/phone-call_jpm8kq.png"
                    }} alt="Alternate Text" size="xs" />
                    <Text colorScheme="darkBlue" color={isPressed ? "#FFFFFF" : isHovered ? "coolGray.200" : "#1C2765"} variant="solid" rounded="4">
                      Phone Number
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
                return <Box bg={isPressed ? "#1C2765" : isHovered ? "coolGray.200" : "#FFFFFF"} style={{
                  transform: [{
                    scale: isPressed ? 0.96 : 1
                  }]
                }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="#F14E24">
                  <HStack alignItems="center">
                    <Image source={{
                      uri: "https://res.cloudinary.com/dvbj08pdl/image/upload/v1672852060/email_2_dwamls.png"
                    }} alt="Alternate Text" size="xs" />
                    <Text colorScheme="darkBlue" color={isPressed ? "#FFFFFF" : isHovered ? "coolGray.200" : "#1C2765"} variant="solid" rounded="4">
                      Email
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
                return <Box bg={isPressed ? "#1C2765" : isHovered ? "coolGray.200" : "#FFFFFF"} style={{
                  transform: [{
                    scale: isPressed ? 0.96 : 1
                  }]
                }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="#F14E24">
                  <HStack alignItems="center">
                    <Image source={{
                      uri: "https://res.cloudinary.com/dvbj08pdl/image/upload/v1672852128/github_4_gkmr8h.png"
                    }} alt="Alternate Text" size="xs" />
                    <Text colorScheme="darkBlue" color={isPressed ? "#FFFFFF" : isHovered ? "coolGray.200" : "#1C2765"} variant="solid" rounded="4">
                      Github
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
                return <Box bg={isPressed ? "#1C2765" : isHovered ? "coolGray.200" : "#FFFFFF"} style={{
                  transform: [{
                    scale: isPressed ? 0.96 : 1
                  }]
                }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="#F14E24">
                  <HStack alignItems="center">
                    <Image source={{
                      uri: "https://res.cloudinary.com/dvbj08pdl/image/upload/v1672852174/languages_ritlcu.png"
                    }} alt="Alternate Text" size="xs" />
                    <Text colorScheme="darkBlue" color={isPressed ? "#FFFFFF" : isHovered ? "coolGray.200" : "#1C2765"} variant="solid" rounded="4">
                      Language
                    </Text>
                    <Spacer />

                  </HStack>


                </Box>;
              }}
            </Pressable>
          </Box>


        </Stack>

      </Box>
    </ScrollView>
  );
}
