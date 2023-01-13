import React, {useState,useEffect} from 'react'
import {ScrollView , FlatList,Stack, VStack , NativeBaseProvider, Box, Text, Pressable, Heading, IconButton, Icon, HStack, Avatar, Center, View } from 'native-base';
import axios from 'axios'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 



export default function ProjectbyCategory({route}) {  
  console.log("aaaaaaaaaaaaaaaaaaaaa",route.params.Category); 
  const [data, setData] = useState(''); 
  console.log( "hhhhhhhhh" , data)


 useEffect(()=>{ 
  axios. get (`http://192.168.1.12:5000/project/getCategory/${route.params.Category}`) 
  .then ((res)=>{setData(res.data)}) 
  .catch((err)=>{ console.log((err));})
 },[])

 
  return ( 
    
      <FlatList  
      data={ data}  
      scrollEnabled
      renderItem = {({item,index})=>{ 
        return (
        <Box alignItems="center"  >
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="2" _dark={{
    borderColor: "coolGray.600",
    backgroundColor: "gray.700"
  }} _web={{
    shadow: 2,
    borderWidth: 0
  }} _light={{
    backgroundColor: "gray.50"
  }}>
     
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
           PROJECT N AME : {item.project_name}
          </Heading>
          <Text fontSize="xs" _light={{
          color: "violet.500"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            project category : {item.project_category}
          </Text>
        </Stack>
        <Text fontWeight="400"> 
        project description :
         {item.project_description}
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} fontWeight="400">
              status :
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>  
  )

      }}
      />
    
  
  )
}

