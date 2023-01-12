import * as React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  IconButton,
  CheckIcon,
  Icon,
  Button,
  Select,
  Modal,
  Stack,
  FormControl,
  Input,
  Pressable,
  Divider,
  Avatar,
  ScrollView,
  Box,
  HStack,
  Text,
  Spacer,
  VStack,
  Image,
  Center,
} from 'native-base';
import Example from './freelancerModal';
import { UserContext } from '../contextes';
import SkillModel from './SkillModel';
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
} from '@expo/vector-icons';
import { Path, G } from 'react-native-svg';
import Technologies from './Technologies';
import { useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import FeedBack from './feedbckModal';

function FLProfile({ navigation }) {
  const [showContent, setShowContent] = useState(false);
  const [id, setId] = useState('');
  const [data, setData] = useState([]);
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [phone, setPhone] = useState('');
  const [git, setGithob] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [name, setName] = useState('');
  console.log('aaaaaaaaaaaaa', data, id);
  const update = () => {
    axios
      .put(`http://192.168.11.81:5000/freelancer/updateOne/${id}`, {
        fl_phone_number: phone,
        github_link: git,
        portfolio_link: portfolio,
        category: category,
        fl_name: name,
      })
      .then((res) => {
        console.log(res);
        setData(res.config.data);
        setId('');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };
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
          .get(`http://192.168.11.81:5000/freelancer/getOne/${id}`)
          .then((res) => {
            setData(res.data[0]);
            console.log('hhhhhhhhhh', res.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <Modal
        opacity={0.8}
        backgroundColor={'muted.700'}
        shadow={8}
        isOpen={open}
        onClose={() => setOpen(false)}
        safeAreaTop={true}
      >
        <Modal.Content maxWidth="380" {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>
            <Center>
              <Text color={'#F14E24'}>personal Information</Text>
            </Center>
          </Modal.Header>
          <Modal.Body>
            <FormControl mt="3">
              <FormControl.Label>name</FormControl.Label>
              <Input
                backgroundColor={'muted.100'}
                borderColor={'muted.200'}
                onChangeText={(newText) => {
                  setName(newText);
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>phone number </FormControl.Label>
              <Input
                backgroundColor={'muted.100'}
                borderColor={'muted.200'}
                keyboardType="numeric"
                onChangeText={(newText) => {
                  setPhone(newText);
                }}
              />
            </FormControl>

            <FormControl mt="3">
              <FormControl.Label>github_link</FormControl.Label>
              <Input
                backgroundColor={'muted.100'}
                borderColor={'muted.200'}
                onChangeText={(newText) => {
                  setGithob(newText);
                }}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>portfolio_link</FormControl.Label>
              <Input
                backgroundColor={'muted.100'}
                borderColor={'muted.200'}
                onChangeText={(newText) => {
                  setPortfolio(newText);
                }}
              />
            </FormControl>

            <FormControl mt="3">
              <FormControl.Label>Choose role</FormControl.Label>
              <Select
                backgroundColor={'muted.100'}
                borderColor={'muted.200'}
                minWidth="200"
                accessibilityLabel="Choose Category"
                onValueChange={(value) => {
                  setCategory(value);
                }}
                placeholder="Choose Category"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={5} />,
                }}
                mt="0.5"
              >
                <Select.Item
                  label=" Grapics & Design"
                  value=" Grapics & Design"
                />
                <Select.Item
                  label="Programming & Tech"
                  value="Programming & Tech"
                />
                <Select.Item
                  label="Digital Marketing"
                  value="Digital Marketing"
                />
                <Select.Item
                  label="Video & Animation"
                  value="Video & Animation"
                />
                <Select.Item label="Music and Audio" value="Music and Audio" />
              </Select>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <HStack>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
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
                  {data && data.fl_name}
                </Text>

                <Text
                  fontSize="md"
                  colorScheme="darkBlue"
                  color="#F14E24"
                  variant="solid"
                  rounded="4"
                >
                  {data.category}
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
                  underline
                  marginTop={2}
                  marginRight={150}
                  color="#1C2765"
                  bold
                  fontSize="md"
                  colorScheme="darkBlue"
                  variant="solid"
                  rounded="4"
                  marginBottom={0.1}
                  marginLeft={2}
                >
                  Personal Information :
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
                <Pressable
                  width={400}
                  onPress={() => setShowContent(!showContent)}
                >
                  {({ isHovered, isFocused, isPressed }) => {
                    return showContent === true ? (
                      <Center>
                        <Box
                          marginLeft={0}
                          top={1}
                          width={370}
                          borderColor={isPressed ? '#F14E24' : 'muted.400'}
                          style={{
                            transform: [
                              {
                                scale: isPressed ? 0.95 : 1,
                              },
                            ],
                          }}
                          p="5"
                          rounded="8"
                          borderWidth="2"
                        >
                          <VStack>
                            <Box size={75} marginLeft={280}></Box>
                            <HStack marginTop={-20}>
                              <Text
                                fontSize="md"
                                color="#1C2765"
                                colorScheme="darkBlue"
                                variant="solid"
                                marginLeft={-1}
                                rounded="4"
                              >
                                Email :
                              </Text>
                              <Text
                                fontSize="md"
                                color="#1C2765"
                                colorScheme="darkBlue"
                                variant="solid"
                                marginLeft={2}
                                rounded="4"
                              >
                                {data.fl_email}
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
                                {data.fl_phone_number}
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
                                github :
                              </Text>
                              <Text
                                fontSize="md"
                                color="#1C2765"
                                colorScheme="darkBlue"
                                variant="solid"
                                marginLeft={2}
                                rounded="4"
                              >
                                {data.github_link}
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
                                portfolio :
                              </Text>
                              <Text
                                fontSize="md"
                                color="#1C2765"
                                colorScheme="darkBlue"
                                variant="solid"
                                marginLeft={2}
                                rounded="4"
                              >
                                {data.portfolio_link}
                              </Text>
                            </HStack>
                          </VStack>
                        </Box>
                      </Center>
                    ) : (
                      <Center>
                        <Box
                          marginLeft={0}
                          top={1}
                          width={370}
                          borderColor={isPressed ? '#F14E24' : 'muted.400'}
                          style={{
                            transform: [
                              {
                                scale: isPressed ? 0.95 : 1,
                              },
                            ],
                          }}
                          p="5"
                          rounded="8"
                          borderWidth="2"
                        >
                          <VStack>
                            <Box size={75} marginLeft={280}></Box>
                            <HStack marginTop={-20}>
                              <Text
                                fontSize="md"
                                color="#1C2765"
                                colorScheme="darkBlue"
                                variant="solid"
                                marginLeft={-1}
                                rounded="4"
                              >
                                Email :
                              </Text>
                              <Text
                                fontSize="md"
                                color="#1C2765"
                                colorScheme="darkBlue"
                                variant="solid"
                                marginLeft={2}
                                rounded="4"
                              >
                                {data.fl_email}
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
                                {data.fl_phone_number}
                              </Text>
                            </HStack>
                          </VStack>
                        </Box>
                      </Center>
                    );
                  }}
                </Pressable>
              </Box>
            </VStack>
            <VStack>
              <Text
                underline
                color="#1C2765"
                marginTop={2}
                marginRight={300}
                bold
                fontSize="md"
                colorScheme="darkBlue"
                variant="solid"
                rounded="4"
                marginBottom={0.1}
                marginLeft={2}
              >
                Skills :
              </Text>
              <Pressable width={400}>
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Center>
                      <Box
                        marginLeft={0}
                        top={1}
                        width={370}
                        borderColor={'muted.400'}
                        p="5"
                        rounded="8"
                        borderWidth="2"
                      >
                        <Center space={2} w="90%">
                          <HStack justifyContent="space-between">
                            <Text>TypeScript</Text>
                          </HStack>
                          <Divider />
                          <HStack justifyContent="space-between">
                            <Text>JavaScript</Text>
                          </HStack>
                          <Divider />
                          <HStack justifyContent="space-between">
                            <Text>React</Text>
                          </HStack>
                        </Center>
                      </Box>
                    </Center>
                  );
                }}
              </Pressable>
            </VStack>
            <VStack>
              <Text
                underline
                color="#1C2765"
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
                      <Center>
                        <Box
                          marginLeft={0}
                          top={1}
                          width={370}
                          borderColor={isPressed ? '#F14E24' : 'muted.400'}
                          style={{
                            transform: [
                              {
                                scale: isPressed ? 0.95 : 1,
                              },
                            ],
                          }}
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
                                mourouj 5 ,rue de cipidre
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
                                27414994
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
                                Email :
                              </Text>
                              <Text
                                fontSize="md"
                                color="#1C2765"
                                colorScheme="darkBlue"
                                variant="solid"
                                marginLeft={2}
                                rounded="4"
                              >
                                cipidre@gmail.com
                              </Text>
                            </HStack>
                          </VStack>
                        </Box>
                      </Center>
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
export default FLProfile;
