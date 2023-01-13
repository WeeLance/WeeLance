//import liraries
//

//import liraries
import { Box, Center, Divider, HStack } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import index from '..';
import { gs, colors } from '../../../HomeStyle';

const photos = [
  require('../../../../../assets/profile/1.jpg'),
  require('../../../../../assets/profile/2.jpg'),
  require('../../../../../assets/profile/3.jpg'),
  require('../../../../../assets/profile/4.jpg'),
  require('../../../../../assets/profile/5.jpg'),
];
export default function Skills() {
  return (
    <View style={[gs.sectioncontainer, { marginTop: 8 }]}>
      <Text style={gs.sectionTitle}>My Skills</Text>

      {/* <View style={styles.photosContainer}>
                {photos.map((photo, index)=>{
                   
                    return (
                    
                     <Image source={photo} key={index} style={[styles.photo]} />
                        
                
                   
                    
                        ) })}
            </View> */}
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
            <Center space={2} w="90%">
              <HStack justifyContent="space-between">
                <Text fontSize={15}>TypeScript</Text>
              </HStack>
              <Divider />
              <HStack justifyContent="space-between">
                <Text fontSize={15}>JavaScript</Text>
              </HStack>
              <Divider />
              <HStack justifyContent="space-between">
                <Text fontSize={15}>React</Text>
              </HStack>
              <Divider />
              <HStack justifyContent="space-between">
                <Text fontSize={15}>React</Text>
              </HStack>
              <Divider />
              <HStack justifyContent="space-between">
                <Text fontSize={15}>React</Text>
              </HStack>
              <Divider />
              <HStack justifyContent="space-between">
                <Text fontSize={15}>React</Text>
              </HStack>
              <Divider />
              <HStack justifyContent="space-between">
                <Text fontSize={15}>React</Text>
              </HStack>
            </Center>
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
