import { useState, useEffect } from 'react';
import {
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
  FontAwesome5,
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
  Select,
  CheckIcon,
} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

let Example = () => {
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [phone, setPhone] = useState('');
  const [git, setGithob] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const update = () => {
    axios
      .put(`http://192.168.103.2:5000/freelancer/updateOne/${id}`, {
        fl_phone_number: phone,
        github_link: git,
        portfolio_link: portfolio,
        category: category,
        fl_name: name,
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
        // We have data!!
        setId(value);
      }
    } catch (error) {
      // Error retrieving data
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
