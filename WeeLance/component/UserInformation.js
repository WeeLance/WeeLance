

import React from 'react';
import {
  VStack,
  HStack,
  Input,
  ScrollView,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
  Image,
  Stack,
  Pressable,
  Badge,
  Spacer,
  Flex,
} from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


export default function UserInformation({ navigation }) {
  return (
    <ScrollView>

      <Box
        backgroundColor={'#FFFFFF'}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <VStack w="100%" space={5} alignSelf="center" alignItems={'center'}>
          <Input
            marginTop={10}
            placeholder="Bio..."
            variant="filled"
            width="90%"
            borderColor={'black'}
            borderRadius="10"
            py="1"
            px="2"
          />
        </VStack>
        <Stack
          mb="2.5"
          mt="50"
          direction={{
            base: 'column',
            md: 'row',
          }}
          space={2}
        >
          <Box alignItems="center">
            <Pressable width={350}>
              {({ isHovered, isFocused, isPressed }) => {
                return (
                  <Box
                    bg={
                      isPressed
                        ? '#1C2765'
                        : isHovered
                        ? 'coolGray.200'
                        : '#FFFFFF'
                    }
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.96 : 1,
                        },
                      ],
                    }}
                    p="5"
                    rounded="8"
                    shadow={3}
                    borderWidth="1"
                    borderColor="#F14E24"
                  >
                    <HStack alignItems="center">
                      <Image
                        source={{
                          uri: 'https://res.cloudinary.com/dvbj08pdl/image/upload/v1672851959/adress_hiksoj.png',
                        }}
                        alt="Alternate Text"
                        size="xs"
                      />
                      <Text
                        color={
                          isPressed
                            ? '#FFFFFF'
                            : isHovered
                            ? 'coolGray.200'
                            : '#1C2765'
                        }
                        colorScheme="darkBlue"
                        variant="solid"
                        rounded="4"
                      >
                        Address
                      </Text>
                      <Spacer />
                    </HStack>
                  </Box>
                );

              }}
            </Pressable>
          </Box>

          <Box alignItems="center">

            <Pressable width={400}>
              {({
                isHovered,
                isFocused,
                isPressed
              }) => {
                return <Box borderColor={isPressed ? "#F14E24" : "#F14E24"} style={{
                  transform: [{
                    scale: isPressed ? 0.96 : 1
                  }]
                }} p="5" rounded="8" borderWidth="2" >
                  <VStack>

                    <HStack alignItems="center">
                      <Image source={{
                        uri: "https://res.cloudinary.com/dvbj08pdl/image/upload/v1672925836/phone-call_xy8ndj.png"
                      }} alt="Alternate Text" size="xs" />
                      <Text colorScheme="darkBlue" color={"#1C2765"} variant="solid" rounded="4">
                        Phone Number
                      </Text>
                      <Spacer />

                    </HStack>
                  </VStack>
                </Box>;

              }}
            </Pressable>
          </Box>

          <Box alignItems="center">
            <Pressable width={400}>
              {({
                isHovered,
                isFocused,
                isPressed
              }) => {
                return <Box borderColor={isPressed ? "#F14E24" : "#F14E24"} style={{
                  transform: [{
                    scale: isPressed ? 0.96 : 1
                  }]
                }} p="5" rounded="8" borderWidth="2" >
                  <VStack>

                    <HStack alignItems="center">
                      <Image source={{
                        uri: "https://res.cloudinary.com/dvbj08pdl/image/upload/v1672925867/email_2_cjnj7r.png"
                      }} alt="Alternate Text" size="xs" />
                      <Text colorScheme="darkBlue" color={"#1C2765"} variant="solid" rounded="4">
                        Email
                      </Text>
                      <Spacer />

                    </HStack>
                  </VStack>
                </Box>;

              }}
            </Pressable>
          </Box>

          <Box alignItems="center">
            <Pressable width={400}>
              {({
                isHovered,
                isFocused,
                isPressed
              }) => {
                return <Box borderColor={isPressed ? "#F14E24" : "#F14E24"} style={{
                  transform: [{
                    scale: isPressed ? 0.96 : 1
                  }]
                }} p="5" rounded="8" borderWidth="2" >
                  <VStack>

                    <HStack alignItems="center">
                      <Image source={{
                        uri: "https://res.cloudinary.com/dvbj08pdl/image/upload/v1672852128/github_4_gkmr8h.png"
                      }} alt="Alternate Text" size="xs" />
                      <Text colorScheme="darkBlue" color={"#1C2765"} variant="solid" rounded="4">
                        Github
                      </Text>
                      <Spacer />

                    </HStack>
                  </VStack>
                </Box>;
              }}
            </Pressable>
          </Box>

          <VStack>

            <Box alignItems="center">
              <Pressable width={400}>
                {({
                  isHovered,
                  isFocused,
                  isPressed
                }) => {
                  return <Box borderColor={isPressed ? "#F14E24" : "#F14E24"} style={{
                    transform: [{
                      scale: isPressed ? 0.96 : 1
                    }]
                  }} p="5" rounded="8" borderWidth="2" >
                    <VStack>

                      <HStack alignItems="center">
                        <Image source={{
                          uri: "https://res.cloudinary.com/dvbj08pdl/image/upload/v1672925903/languages_uzs4zt.png"
                        }} alt="Alternate Text" size="xs" />
                        <Text colorScheme="darkBlue" color={"#1C2765"} variant="solid" rounded="4">
                          Language
                        </Text>
                        <Spacer />

                      </HStack>
                    </VStack>
                  </Box>;
                }}
              </Pressable>
            </Box>

          </VStack>

        </Stack>
      </Box>
    </ScrollView>
  );
}
