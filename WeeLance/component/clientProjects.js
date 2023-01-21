import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
  Stack,
  VStack,
  NativeBaseProvider,
  Box,
  Text,
  Pressable,
  Heading,
  IconButton,
  Icon,
  HStack,
  Avatar,
  Center,
  View,
} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function clientProjects() {
  const [id, setId] = useState('');
  const [data, setData] = useState('');

  console.log(id);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('id');
      // console.log(AsyncStorage.getItem('id'));
      if (value !== null) {
        // We have data!!
        setId(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    retrieveData()
      .then(() => {
        axios

          .get(`http://192.168.11.13:5000/project/getOne/${id}`)

          .then((res) => {
            setData(res.data);
            console.log('hhhhhhhhhh', res.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <FlatList

      data={data}
      scrollEnabled
      renderItem={({ item, index }) => {
        return (
          <Box alignItems="center">
            <Box
width={"90%"}
              
              rounded="lg"
              overflow="hidden"
              borderColor="#f14e24"
              borderWidth="1"
              _dark={{
                borderColor: 'coolGray.600',
                backgroundColor: '#ffffff',
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: 'white',
              }}
            >
              <VStack p="4" space={3}>
            
                  <Text style={{fontSize:20,color:'#1c2765'}}>
                    Project Name : {item.project_name}
                  </Text>
                  <Text
                    fontSize="md"
                    _light={{
                      color: '#1c2765',
                    }}
                    _dark={{
                      color: 'violet.400',
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1"
                  >
                    Project Category : {item.project_category}
                  </Text>
              
                <Text fontWeight="500"
                 _light={{
                  color: '#1c2765',
                }}>
                  project description :{item.project_description}
                </Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between"
                >
                  <HStack alignItems="center">
                    <Text fontWeight="500"
                 _light={{
                  color: '#1c2765',
                }}>
                      status :
                    </Text>
                    <Text
                      color="coolGray.600"
                      _light={{
                        color: 'green.400',
                      }}
                      fontWeight="400"
                    >
                      {item.project_status}
                    </Text>
                  </HStack>
                </HStack>
              </VStack>
            </Box>
          </Box>
        );
      }}
    />
  );
}
