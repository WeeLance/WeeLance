import { useState, useEffect } from 'react';
import {
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';

import react from 'react';
import {
  IconButton,
  Icon,
  Button,
  Modal,
  Stack,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
  Text,
  View,
  Box,
} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddProject() {
    return (
       <>
          <Center>
              <Text margin={5} color={'#F14E24'}>Add Project </Text>
              <FormControl >
              <Center >
              <FormControl.Label margin={3} ><Text color={'#1c2765'}>Project Name</Text></FormControl.Label>
             </Center>
             <Center>
             <Input
                backgroundColor={'muted.100'}
                borderColor={'muted.200'}
                size={20}
                width={350}
              /></Center>
            </FormControl>
              <FormControl >
              <Center >
              <FormControl.Label margin={3} ><Text color={'#1c2765'}>Project Category</Text></FormControl.Label>
             </Center>
             <Center>
             <Input
      
                backgroundColor={'muted.100'}
                borderColor={'muted.200'}
                width={350}
                size={'flex'}
              />
              </Center>
            </FormControl>
              <FormControl >
              <Center >
              <FormControl.Label margin={3} ><Text color={'#1c2765'}>Project Description</Text></FormControl.Label>
             </Center>
             <Center>
             <Input
             backgroundColor={'muted.100'}
             borderColor={'muted.200'}
             width={350}
            
     style={{
        flex: 1,       
        textAlignVertical: "top", 
        }}
        multiline={true}  
        numberOfLines={10}
              />
              </Center>
            </FormControl>
            </Center>
           </>
      
      )

}