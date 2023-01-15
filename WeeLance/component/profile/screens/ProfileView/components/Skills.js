//import liraries
//
import {
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
  FontAwesome5,
} from '@expo/vector-icons';

//import liraries
import { Box, Center, Divider, HStack } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import index from '..';
import { gs, colors } from '../../../HomeStyle';
import axios from 'axios';
import {  useState, useEffect } from 'react';

export default function Skills() {
  const [skills, setSkills] = useState([]);
console.log(skills);
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

          .get(`http://192.168.106.52:5000/skills/getAll`)

          .then((res) => {
            setSkills(res.data);
            console.log('<----------------->', res.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <View style={[gs.sectioncontainer, { marginTop: 8 }]}>
      <HStack>

      <Text style={gs.sectionTitle}>My Skills</Text>
<Box marginLeft={270}>

      <FontAwesome5 name="plus" size={17} color="#1c2765" />
</Box>
      </HStack>
      <Center>
        <Box
          marginBottom={5}
          marginLeft={0}
          top={1}
          bottom={-10}
          height={40}
          width={370}
          borderColor={'#f14e24'}
          p="8"
          rounded="8"
          borderWidth="1"
        >
          <ScrollView>
      <View style={styles.photosContainer}>
                {skills.map((skill, index)=>{
                   
                    return (
                    
                        
                <Center space={2} w="90%">
              <HStack justifyContent="space-between">
                <Text fontSize={15}>{skill.skill}</Text>
              </HStack>
              <Divider />
            </Center>
                   
                    
                        ) })}
            </View>

            {/* <Center space={2} w="90%">
              <HStack justifyContent="space-between">
                <Text fontSize={15}>TypeScript</Text>
              </HStack>
              <Divider />
            </Center> */}
          </ScrollView>
        </Box>
      </Center>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  photosContainer: {
    //    flexDirection:'row',
    //    flexDirection:'wrap',
    //     marginTop:16,
    flex: 1,
    flexWrap: 'wrap',

    flexDirection: 'row',
  },
  photo: {
    height: 115,
    width: 115,
    margin: 6,
    borderRadius: 10,
  },
});
