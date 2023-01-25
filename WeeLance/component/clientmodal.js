import { useState, useEffect } from 'react';
import {
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
  FontAwesome5,
} from '@expo/vector-icons';

import React from 'react';
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
} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

let Example = () => {
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [company_name, setcompany_name] = useState('');
  const [client_name, setclient_name] = useState('');
  const [phone_number, setphone_number] = useState('');
  const [company_link, setcompany_link] = useState('');
  const [company_adress, setcompany_adress] = useState('');
  const [id, setId] = useState('');
  console.log(id);

  const update = () => {
    axios

      .put(`http://192.168.169.52:5000/client/updateOne/${id}`, {
        company_name: company_name,
        client_name: client_name,
        phone_number: phone_number,
        company_link: company_link,
        company_adress,
      })
      .then((res) => {
        console.log(res);
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
      if (value !== null) {
        setId(value);
      }
    } catch (error) {
      //data is here
    }
  };
  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <>
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <IconButton
          icon={
            <MaterialCommunityIcons size={18} color={'#F14E24'} name="pencil" />
          }
          onPress={() => openModal('right')}
        >
          Right
        </IconButton>
      </Stack>
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
            <Button.Group space={2}>
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
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

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

export default Example;
