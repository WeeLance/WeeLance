import * as React from 'react';
import {  View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {
  Button,
  IconButton,
  Icon,
  Pressable,
  Image,
  Modal,
  NativeBaseProvider,
  Divider,
  Avatar,
  ScrollView,
  Box,
  FormControl,
  Input,
  HStack,
  Text,
  Spacer,
  VStack,
  Center,
  Stack,
  Container,
  
} from 'native-base';
import {
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
  FontAwesome5,
} from '@expo/vector-icons';
// import Example from './clientmodal';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ClientProfile({ navigation }) { 
   const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [company_name, setcompany_name] = useState('');
  const [client_name, setclient_name] = useState('');
  const [phone_number, setphone_number] = useState('');
  const [company_link, setcompany_link] = useState('');
  const [company_adress, setcompany_adress] = useState('');
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [id, setId] = useState('');
  const [data, setData] = useState([]);
  console.log('heyyy', data);
  const openModal = (placement) => {
    setOpen(!open);
    setPlacement(placement);
  };
  const update = () => {
    axios
      .put(`http://192.168.11.81:5000/client/updateOne/${id}`, {
        company_name: company_name,
        client_name: client_name,
        phone_number: phone_number,
        company_link: company_link,
        company_adress,
      })
      .then((res) => {
        console.log(res);
        setData(res.config.data)
        setId('')
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('id');
      console.log(value,'hhhhhhhhhhhhhheeeeeeeeyyyyy');
      if (value !== null) {

        
        setId(value);

      }
    } catch (error) {}
  };
  useEffect(() => {
    retrieveData();
  }, [id]);
  useEffect(() => {
    axios
      .get(`http://192.168.11.81:5000/client/getOne/${id}`)
      .then((res) => {
        setData(res.data[0]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  //---------------------------


  return (
    <>
      <Modal
        opacity={0.8}
        backgroundColor={'muted.700'}
        shadow={8}
        isOpen={open}
        onClose={() => setOpen(false)}
        safeAreaTop={true}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content maxWidth="380" {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>
            <Center>
              <Text color={'#F14E24'}>personal Information</Text>
            </Center>
          </Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Company name</FormControl.Label>
              <Input
                backgroundColor={'muted.100'}
                borderColor={'muted.200'}
                onChangeText={(newText) => {
                  setcompany_name(newText);
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Client name</FormControl.Label>
              <Input
                backgroundColor={'muted.100'}
                borderColor={'muted.200'}
                onChangeText={(newText) => {
                  setclient_name(newText);
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Company adress</FormControl.Label>
              <Input
                backgroundColor={'muted.100'}
                borderColor={'muted.200'}
                onChangeText={(newText) => {
                  setcompany_adress(newText);
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl>
                <FormControl.Label>Company link</FormControl.Label>
                <Input
                  backgroundColor={'muted.100'}
                  borderColor={'muted.200'}
                  onChangeText={(newText) => {
                    setcompany_link(newText);
                  }}
                />
              </FormControl>
              <FormControl.Label>Phone number </FormControl.Label>
              <Input
                backgroundColor={'muted.100'}
                borderColor={'muted.200'}
                onChangeText={(newText) => {
                  setphone_number(newText);
                }}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <HStack space={2}>
              <Button
              title='cancel'
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
              title='save'
                backgroundColor={'#F14E24'}
                onPress={() => {
                  setOpen(false);
                  update();
                }}
              >
                Save
              </Button>
     </HStack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
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
                  bold
                  fontSize="xl"
                  color="white"
                  colorScheme="darkBlue"
                  variant="solid"
                  rounded="4"
                >
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
                <Stack
                  direction={{
                    base: 'column',
                    md: 'row',
                  }}
                >
                  <IconButton
                    icon={
                      <MaterialCommunityIcons
                        size={18}
                        color={'#F14E24'}
                        name="pencil"
                      />
                    }
                    onPress={() => openModal('right')}
                  >
                    Right
                  </IconButton>
                </Stack>
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
    </>
  );
}
const styles = {
  top: {
    marginBottom: 'auto',
    marginTop: 0,
  },
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
  },
  left: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  right: {},
  center: {},
};

export default ClientProfile;
