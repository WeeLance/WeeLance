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

export default function Search({ navigation }) {
  return (
    <ScrollView>
      <Box
        backgroundColor={'#FFFFFF'}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <VStack w="100%" space={5} alignSelf="center" alignItems={'center'}>
          <Input
            marginTop={10}
            placeholder="Search"
            variant="filled"
            width="90%"
            borderColor={'black'}
            borderRadius="10"
            py="1"
            px="2"
            InputLeftElement={
              <Icon
                ml="2"
                size="4"
                color="gray.400"
                as={<Ionicons name="ios-search" />}
              />
            }
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
                          uri: 'https://res.cloudinary.com/dqz0n291c/image/upload/v1672848401/image_2023-01-04_170637676_kr5c9b.png',
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
                        Graphic & Design
                      </Text>
                      <Spacer />
                    </HStack>
                  </Box>
                );
              }}
            </Pressable>
          </Box>

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
                          uri: 'https://res.cloudinary.com/dqz0n291c/image/upload/v1672848480/image_2023-01-04_170755562_dayg0i.png',
                        }}
                        alt="Alternate Text"
                        size="xs"
                      />
                      <Text
                        colorScheme="darkBlue"
                        color={
                          isPressed
                            ? '#FFFFFF'
                            : isHovered
                            ? 'coolGray.200'
                            : '#1C2765'
                        }
                        variant="solid"
                        rounded="4"
                      >
                        Digital Marketing
                      </Text>
                      <Spacer />
                    </HStack>
                  </Box>
                );
              }}
            </Pressable>
          </Box>

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
                          uri: 'https://res.cloudinary.com/dqz0n291c/image/upload/v1672848562/image_2023-01-04_170918410_e7jsyg.png',
                        }}
                        alt="Alternate Text"
                        size="xs"
                      />
                      <Text
                        colorScheme="darkBlue"
                        color={
                          isPressed
                            ? '#FFFFFF'
                            : isHovered
                            ? 'coolGray.200'
                            : '#1C2765'
                        }
                        variant="solid"
                        rounded="4"
                      >
                        Writing & Translation
                      </Text>
                      <Spacer />
                    </HStack>
                  </Box>
                );
              }}
            </Pressable>
          </Box>

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
                          uri: 'https://res.cloudinary.com/dqz0n291c/image/upload/v1672848597/image_2023-01-04_170952959_ofssnj.png',
                        }}
                        alt="Alternate Text"
                        size="xs"
                      />
                      <Text
                        colorScheme="darkBlue"
                        color={
                          isPressed
                            ? '#FFFFFF'
                            : isHovered
                            ? 'coolGray.200'
                            : '#1C2765'
                        }
                        variant="solid"
                        rounded="4"
                      >
                        Programming & Tech
                      </Text>
                      <Spacer />
                    </HStack>
                  </Box>
                );
              }}
            </Pressable>
          </Box>

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
                          uri: 'https://res.cloudinary.com/dqz0n291c/image/upload/v1672848651/image_2023-01-04_171039850_khwdfz.png',
                        }}
                        alt="Alternate Text"
                        size="xs"
                      />
                      <Text
                        colorScheme="darkBlue"
                        color={
                          isPressed
                            ? '#FFFFFF'
                            : isHovered
                            ? 'coolGray.200'
                            : '#1C2765'
                        }
                        variant="solid"
                        rounded="4"
                      >
                        Video & Animation
                      </Text>
                      <Spacer />
                    </HStack>
                  </Box>
                );
              }}
            </Pressable>
          </Box>

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
                          uri: 'https://res.cloudinary.com/dqz0n291c/image/upload/v1672848683/image_2023-01-04_171119223_rdxwrm.png',
                        }}
                        alt="Alternate Text"
                        size="xs"
                      />
                      <Text
                        colorScheme="darkBlue"
                        color={
                          isPressed
                            ? '#FFFFFF'
                            : isHovered
                            ? 'coolGray.200'
                            : '#1C2765'
                        }
                        variant="solid"
                        rounded="4"
                      >
                        Music & Audio
                      </Text>
                      <Spacer />
                    </HStack>
                  </Box>
                );
              }}
            </Pressable>
          </Box>

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
                          uri: 'https://res.cloudinary.com/dqz0n291c/image/upload/v1672848738/image_2023-01-04_171214180_uvmqan.png',
                        }}
                        alt="Alternate Text"
                        size="xs"
                      />
                      <Text
                        colorScheme="darkBlue"
                        color={
                          isPressed
                            ? '#FFFFFF'
                            : isHovered
                            ? 'coolGray.200'
                            : '#1C2765'
                        }
                        variant="solid"
                        rounded="4"
                      >
                        Buisness
                      </Text>
                      <Spacer />
                    </HStack>
                  </Box>
                );
              }}
            </Pressable>
          </Box>
        </Stack>
      </Box>
    </ScrollView>
  );
}
