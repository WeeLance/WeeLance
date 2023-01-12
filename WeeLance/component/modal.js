import { useState } from 'react';
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

let Example = () => {
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };

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
              <FormControl.Label>adress</FormControl.Label>
              <Input backgroundColor={'muted.100'} _focus={{borderColor:'#F14E24'}}  />
            </FormControl>
            <FormControl>
              <FormControl.Label>phone number </FormControl.Label>
              <Input _focus={{borderColor: '#F14E24'}} backgroundColor={'muted.100'}  />
            </FormControl>

            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input backgroundColor={'muted.100'} _focus={{borderColor: '#F14E24'}} borderColor={'muted.200'} />
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
