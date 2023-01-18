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

import Rating from '../component/Rating';

let FeedBack = () => {
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  const [id, setId] = useState('');
  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };
  console.log(feedback);
  return (
    <>
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <IconButton
          icon={<MaterialIcons size={27} color={'#F14E24'} name="feedback" />}
          onPress={() => openModal('right')}
        >
          Right
        </IconButton>
      </Stack>
      <Modal
        color={'white'}
        opa
        //  collapsable={true}

        shadow={8}
        isOpen={open}
        onClose={() => setOpen(false)}
        safeAreaTop={true}
      >
        <Modal.Content maxWidth="380" width={'450'} {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>
            <Center>
              <Text color={'#F14E24'}>personal Information</Text>
            </Center>
          </Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Rate </FormControl.Label>
              <Box margin={3} marginBottom={10}>
                <Center>
                  <Rating />
                </Center>
              </Box>
            </FormControl>
            <FormControl>
              <FormControl.Label>Feedback </FormControl.Label>
              <Input
                backgroundColor={'muted.100'}
                borderColor={'muted.200'}
                onChangeText={(newText) => {
                  setFeedback(newText);
                }}
                height={200}
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

export default FeedBack;
