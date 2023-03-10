import React from 'react';
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

function Example() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
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
              <Text color={'#F14E24'}>Personal Information</Text>
            </Center>{' '}
          </Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Phone Number</FormControl.Label>
              <Input _focus={{borderColor: '#F14E24'}} backgroundColor={'muted.100'} borderColor={'muted.200'} ref={initialRef} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input _focus={{borderColor: '#F14E24'}} backgroundColor={'muted.100'} borderColor={'muted.200'} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Adress</FormControl.Label>
              <Input _focus={{borderColor: '#F14E24'}} backgroundColor={'muted.100'} borderColor={'muted.200'} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button
              borderRadius={15}
                bgColor={'#f14e24'}
                onPress={() => {
                  setModalVisible(false);
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
                  marginTop="150"
                >
                  <HStack alignItems="center">
                    <Image
                      source={{
                        uri: 'https://res.cloudinary.com/dvbj08pdl/image/upload/v1672848147/management_b5udbw.png',
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
                      Information Managment
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
      <Center flex={2} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
