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
  Select,
  CheckIcon,
} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieAnimationScreen2 from './lottietwo';

import Category from '../utils/home';
export default function AddProject() {
  const [id, setId] = useState('');
  console.log(id);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  console.log('hhhhhhhhhhhh', category);

  // const add =()=>{

  //   axios.post(`http://192.168.11.13:5000/project/addProject`,{project_name: name,project_category : category,project_description : description, client_id :id})

  //   .then(()=>{console.log("project added");})
  //   .catch((err)=>{console.log(err);})
  // }

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('id');
      // console.log(AsyncStorage.getItem('id'));
      if (value !== null) {
        // We have data!!
        console.log(value);
        setId(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  const add = () => {
    axios

      .post(`http://192.168.11.13:5000/project/addProject`, {
        project_name: name,
        project_category: category,
        project_description: description,
        client_id: id,
      })
      .then(() => {
        console.log('project added');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    retrieveData();
  }, [id]);
  return (
    <>
      <Center>
        <FormControl>
          <FormControl.Label margin={3}>
            <Text style={{ marginLeft: 19 ,fontSize: 18 }} color={"#1c2765"}>

              Project Name
            </Text>
          </FormControl.Label>

          <Center>
            <Input
             borderRadius={15}
              backgroundColor={"white"}
              borderColor={"muted.200"}

              size={20}
              width={350}
              onChangeText={(newText) => {
                setName(newText);
              }}
            />
          </Center>
        </FormControl>

        <FormControl>
          <FormControl.Label margin={3}>
            <Text style={{ marginLeft: 19,fontSize: 18 }} color={"#1c2765"}>

              Project Description
            </Text>
          </FormControl.Label>

          <Center>
            <Input

             borderRadius={15}
              backgroundColor={"white"}
              borderColor={"muted.200"}

              width={350}
              style={{
                flex: 1,
                textAlignVertical: 'top',
              }}
              multiline={true}
              numberOfLines={10}
              onChangeText={(newText) => {
                setDescription(newText);
              }}
            />
          </Center>
          <FormControl>
            <FormControl.Label margin={3}>

              <Text style={{ marginLeft: 19 ,fontSize: 18}} color={"#1c2765"}>

                Project Category
              </Text>
            </FormControl.Label>

            <Box maxW="300">
              <Select
              borderColor={''}
              backgroundColor={'white'}
                selectedValue={category}
                minWidth="350"
                accessibilityLabel="Choose category"
                placeholder="Choose Category"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setCategory(itemValue)}
                marginLeft={15}
              >
                <Select.Item
                  label="Graphic & Design"
                  value="Graphic & Design"
                />
                <Select.Item
                  label="Digital Marketing"
                  value="Digital Marketing"
                />
                <Select.Item
                  label="Programing & Tech"
                  value="Programing & Tech"
                />
                <Select.Item
                  label="Video & Animation"
                  value="Video & Animation"
                />
                <Select.Item label="Music & Audio" value="Music & Audio" />
                <Select.Item label="Business" value="Business" />
              </Select>
            </Box>
          </FormControl>

          <LottieAnimationScreen2 />

          <Button
            borderRadius={15}
            marginTop={10}
            marginLeft={8}
            height="10"
            width="350"
            backgroundColor="#1C2765"
            onPress={() => {
              add();
            }}
          >
            add project
          </Button>
        </FormControl>
      </Center>
    </>
  );
}
