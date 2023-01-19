//import liraries
//
import {
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
  FontAwesome5,
} from '@expo/vector-icons';

//import liraries
import { TouchableOpacity } from 'react-native';
import {
  Box,
  Center,
  Icon,
  Divider,
  HStack,
  VStack,
  Modal,
  FormControl,
  Input,
  Button,
  SearchBar,
} from 'native-base';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import index from '..';
import { gs, colors } from '../../../HomeStyle';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [id, setId] = useState('');
  const [searched, setSearched] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  console.log('id', id);

  console.log('ssssss', skills);
  console.log(('daaaataa', data));
  //  const [back ,setBack] = useState(true)

  console.log(skills);

  useEffect(() => {
    retrieveData();
  }, []);
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
    axios

      .get(`http://192.168.43.145:5000/flskills/freelancerSkills/${id}`)

      .then((res) => {
        setSkills(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get('http://192.168.43.145:5000/skills/getAll')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addSkill = (skill_id) => {
    axios
      .post(`http://192.168.43.145:5000/flskills/addSkill`, {
        fl_id: id,
        skill_id: skill_id,
      })
      .then((res) => {
        console.log('skill added');
        axios

          .get(`http://192.168.43.145:5000/flskills/freelancerSkills/${id}`)

          .then((res) => {
            setSkills(res.data);
          });
      })
      .catch((err) => console.log(err));
  };

  // search skills

  const handleSearch = () => {
    if (searched === '') {
      setData(data);
    }
    setData((data) => {
      return data.filter((element) => {
        return element.skill.toLowerCase().includes(searched.toLowerCase());
      });
    });
  };

  return (
    <View style={[gs.sectioncontainer, { marginTop: 8 }]}>
      <HStack>
        <Text style={gs.sectionTitle}>My Skills</Text>
        <Box marginLeft={270}>
          <Pressable onPress={() => setShowModal(true)}>
            <FontAwesome5
              marginRight={1}
              name="plus"
              size={17}
              color="#1c2765"
            />
          </Pressable>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              <Modal.Header>Add Skills</Modal.Header>
              <Modal.Body>
                <HStack space={2} justifyContent="center">
                  <Input
                    marginBottom={1}
                    marginTop={0}
                    bgColor={'transparent'}
                    placeholder="Search"
                    variant="filled"
                    width="220"
                    borderColor={'muted.200'}
                    borderRadius="35"
                    py="1"
                    px="2"
                    _focus={{ borderColor: '#F14E24' }}
                    onChangeText={(newText) => {
                      setSearched(newText);
                    }}
                    InputRightElement={
                      <Pressable
                        onPress={() => {
                          handleSearch();
                        }}
                      >
                        <Icon
                          ml="2"
                          size="4"
                          color="warning.400"
                          marginRight={'2'}
                          as={<Ionicons name="ios-search" />}
                        />
                      </Pressable>
                    }
                  />
                </HStack>

                <FlatList
                  data={data}
                  numColumns={2}
                  scrollEnabled
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          addSkill(item.skills_id);
                          console.log('hi');
                        }}
                      >
                        <View style={styles.card} key={item['id']}>
                          <Center space={1} w="48%">
                            {/* <Pressable 
                 onPress={()=>{console.log("wwww")}} 
                 > */}
                            <Text style={styles.text}>{item.skill}</Text>
                            {/* </Pressable> */}
                          </Center>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                ></FlatList>

                {/* </Box> */}
              </Modal.Body>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="ghost"
                    colorScheme="blueGray"
                    onPress={() => {
                      setShowModal(false);
                    }}
                  >
                    Cancel
                  </Button>
                  {/* <Button 
             color={"#1c2765"  } 
              onPress={() => {
              setShowModal(false);
            }}>
                Save
              </Button> */}
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
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
              {skills.map((skill, index) => {
                return (
                  <Center space={3} w="90%">
                    <HStack justifyContent="space-between">
                      <Text fontSize={15}>{skill.skill}</Text>
                    </HStack>
                    <Divider />
                  </Center>
                );
              })}
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
  card: {
    flex: 1,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    backgroundColor: '#E4E4E4',
    margin: 5,
    borderRadius: 10,
  },
  text: {
    // paddingRight: "2%",
    textAlign: 'center',
    width: '180%',
    fontSize: 12,
    color: 'black',
  },
});

// define your styles
