import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {
  Pressable,
  Image,
  NativeBaseProvider,
  Divider,
  Avatar,
  ScrollView,
  Box,
  HStack,
  Text,
  Spacer,
  VStack,
  Center,
} from 'native-base';

import Example from './clientmodal';
import { useContext ,useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


function ClientProfile({ navigation }) {

  const [id,setId] = useState("")
  const [data,setData] = useState([])
  console.log("heyyy" , data);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('id');
      if (value !== null) {
        setId(value)
      }
    } catch (error){}
  };
  useEffect(()=>{ retrieveData()},[])
  useEffect(()=>{
    axios.get('http://10.0.2.2:5000/client/updateOne/UgdHf0NmalOe1OmzSYjl5rV3CeB3')
    .then((res)=>{ setData(res.data[0])})
    .catch((err)=>{console.log(err);})
  },[])





  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Box backgroundColor={'#1C2765'} p="10" rounded="8">
          <HStack w="100%" space={5} alignSelf="center" alignItems={'center'}>
            <Avatar
              bg="pink.600"
              alignSelf="center"
              size="xl"
              source={{
                uri: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80',
              }}
            >
              GG
            </Avatar>
            <VStack>
              <Text
                bold fontSize="xl" color="white" colorScheme="darkBlue" variant="solid" rounded="4">
                {data.company_name}
              </Text>

              <Text
                fontSize="md"
                colorScheme="darkBlue"
                color="#F14E24"
                variant="solid"
                rounded="4"
              >
                {data.client_name}
              </Text>
              <Spacer />
            </VStack>
          </HStack>
        </Box>
        <Divider />
        <Box>
          <VStack>
            <HStack>
              <Text
                marginTop={2}
                marginRight={175}
                color="#F14E24"
                bold
                fontSize="md"
                colorScheme="darkBlue"
                variant="solid"
                rounded="4"
                marginBottom={0.1}
                marginLeft={2}
              >
                Personal Information
              </Text>
              <Example />
            </HStack>
            <Box alignItems="center">
              <Pressable width={400}>
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                      borderColor={isPressed ? '#F14E24' : 'muted.400'}
                      p="5"
                      rounded="8"
                      borderWidth="2"
                    >
                      <VStack>
                        <HStack>
                          <Text
                            fontSize="md"
                            color="#1C2765"
                            colorScheme="darkBlue"
                            variant="solid"
                            marginLeft={-1}
                            rounded="4"
                          >
                            Adress :
                          </Text>
                          <Text
                            fontSize="md"
                            color="#1C2765"
                            colorScheme="darkBlue"
                            variant="solid"
                            marginLeft={2}
                            rounded="4"
                          >
                            {data.company_adress}
                          </Text>
                        </HStack>
                        <HStack>
                          <Text
                            fontSize="md"
                            color="#1C2765"
                            colorScheme="darkBlue"
                            variant="solid"
                            marginLeft={-1}
                            rounded="4"
                          >
                            Phone number :
                          </Text>
                          <Text
                            fontSize="md"
                            color="#1C2765"
                            colorScheme="darkBlue"
                            variant="solid"
                            marginLeft={2}
                            rounded="4"
                          >
                            {data.phone_number}
                          </Text>
                        </HStack>
                        <HStack>
                          <Text
                            fontSize="md"
                            color="#1C2765"
                            colorScheme="darkBlue"
                            variant="solid"
                            marginLeft={-1}
                            rounded="4"
                          >
                            company link:
                          </Text>
                          <Text
                            fontSize="md"
                            color="#1C2765"
                            colorScheme="darkBlue"
                            variant="solid"
                            marginLeft={2}
                            rounded="4"
                          >
                            {data.company_link}
                          </Text>
                        </HStack>
                      </VStack>
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
          </VStack>

          <VStack>
            <Text
              color="#F14E24"
              bold
              fontSize="md"
              colorScheme="darkBlue"
              variant="solid"
              rounded="4"
              marginBottom={0.1}
              marginLeft={2}
            >
              Project History :
            </Text>
            <Box alignItems="center">
              <Pressable width={400}>
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                      borderColor={isPressed ? '#F14E24' : 'muted.400'}
                      p="5"
                      rounded="8"
                      borderWidth="2"
                    >
                      <VStack>
                        <HStack>
                          <Text
                            fontSize="md"
                            color="#1C2765"
                            colorScheme="darkBlue"
                            variant="solid"
                            marginLeft={-1}
                            rounded="4"
                          >
                            Adress :
                          </Text>
                          <Text
                            fontSize="md"
                            color="#1C2765"
                            colorScheme="darkBlue"
                            variant="solid"
                            marginLeft={1}
                            rounded="4"
                          >
                            {data.company_adress}
                          </Text>
                        </HStack>
                        <HStack>
                          <Text
                            fontSize="md"
                            color="#1C2765"
                            colorScheme="darkBlue"
                            variant="solid"
                            marginLeft={-1}
                            rounded="4"
                          >
                            Phone number :
                          </Text>
                          <Text
                            fontSize="md"
                            color="#1C2765"
                            colorScheme="darkBlue"
                            variant="solid"
                            marginLeft={2}
                            rounded="4"
                          >
                            {data.phone_number}
                          </Text>
                        </HStack>
                        <HStack>
                          <Text
                            fontSize="md"
                            color="#1C2765"
                            colorScheme="darkBlue"
                            variant="solid"
                            marginLeft={-1}
                            rounded="4"
                          >
                            company link:
                          </Text>
                          <Text
                            fontSize="md"
                            color="#1C2765"
                            colorScheme="darkBlue"
                            variant="solid"
                            marginLeft={2}
                            rounded="4"
                          >
                            {data.company_link}
                          </Text>
                        </HStack>
                      </VStack>
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
          </VStack>
        </Box>
      </View>
    </ScrollView>
  );
}

export default ClientProfile;
