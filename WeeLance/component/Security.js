import React, { useState } from 'react';
import { SafeAreaView } from "react-native";
import app from "./firebase";
import { getAuth } from "firebase/auth";
import {
  Modal,
  FormControl,
  VStack,
  HStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
  Image,
  Stack,
  Pressable,
  Badge,
  Spacer,
  Flex,
} from 'native-base';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
function Example() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const auth = getAuth(app);
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");

  const reauthenticate = (currentPwd) => {
    var user = auth.currentUser;
    console.log(user.email);
    var cred = EmailAuthProvider.credential(user.email, currentPwd);
    return reauthenticateWithCredential(user, cred);
  };
  const onChangePwd = () => {
    reauthenticate(currentPwd).then(() => {
      var user = auth.currentUser;
      console.log(user.uid);
      updatePassword(user, newPwd)
        .then((res) => {
          console.log(res); 
          alert("password changed");
        })
        .catch((error) => {
          alert(error);
        });
    });
  };

  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        opacity={0.8}
        backgroundColor={'muted.700'}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>
            <Center>
              <Text color={'#F14E24'}>Change your password</Text>
            </Center>{' '}
          </Modal.Header>
          <Modal.Body>
          <FormControl>
          <FormControl.Label>current password</FormControl.Label>
          <Input
            onChangeText={(newTewt) => {
              setCurrentPwd(newTewt);
            }}
          ></Input>
        </FormControl>
        <FormControl>
          <FormControl.Label>new password</FormControl.Label>
          <Input
            onChangeText={(newTewt) => {
              setNewPwd(newTewt);
            }}
          ></Input>
        </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  onChangePwd()
                 setModalVisible(!modalVisible);
                }}
              >
                Cancel
              </Button>
              <Button 
              borderRadius={15}
              backgroundColor={'#F14E24'}
                onPress={() => {
                  onChangePwd()
                  setModalVisible(!modalVisible);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <HStack space="4" justifyContent="center" alignItems="center">
        <Box alignItems="center">
          <Pressable
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            width={350}
          
        >
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box
                  bg={
                    isPressed
                      ? '#1C2765'
                      : isHovered
                      ? 'coolGray.200'
                      : '#FFFFFF'
                  }
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                  p="5"
                  rounded="8"
                  borderWidth="1"
                  borderColor="#F14E24"
                  marginTop="-10"

                >
                  <HStack alignItems="center">
                    <Image
                      source={{
                        uri: 'https://res.cloudinary.com/dvbj08pdl/image/upload/v1672848238/shield_mzt1za.png',
                      }}
                      alt="Alternate Text"
                      size="xs"
                    />
                    <Text
                      colorScheme="darkBlue"
                      color={
                        isPressed
                          ? '#FFFFFF'
                          : isHovered
                          ? 'coolGray.200'
                          : '#1C2765'
                      }
                      variant="solid"
                      rounded="4"
                    >
                      Security
                    </Text>
                    <Spacer />
                  </HStack>
                </Box>
              );
            }}
          </Pressable>
        </Box>
      </HStack>
    </>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
