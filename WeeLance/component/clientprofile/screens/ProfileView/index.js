import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import { gs, colors } from '../../HomeStyle';
import Header from './components/Header';
import Stats from './components/Stats';
import About from './components/About';
import Location from './components/Location';
import Skills from './components/Skills';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CheckIcon,
  Button,
  Select,
  Modal,
  Stack,
  FormControl,
  Input,
  HStack,
  Center,
} from 'native-base';
import ClientProjects from '../../../ClientProjects';
export default function index() {
  const [showContent, setShowContent] = useState(false);
  const [id, setId] = useState('');
  const [data, setData] = useState([]);
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const [company_name, setcompany_name] = useState('');
  const [client_name, setclient_name] = useState('');
  const [phone_number, setphone_number] = useState('');
  const [company_link, setcompany_link] = useState('');
  const [company_adress, setcompany_adress] = useState('');

  const [photos, setPhotos] = useState('');
  const [git, setGithob] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [name, setName] = useState('');
  // console.log('aaaaaaaaaaaaa', data, id);

  const openModal = (placement) => {
    setOpen(!open);
    setPlacement(placement);
  };
  const update = () => {
    axios

      .put(`http://192.168.11.13:5000/client/updateOne/${id}`, {
        company_name: company_name,
        client_name: client_name,
        phone_number: phone_number,
        company_link: company_link,
        company_adress,
      })
      .then((res) => {
        // console.log(res);
        setData(res.config.data);
        setId('');
      })
      .catch((err) => {
        console.log(err);
      });
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

          .get(`http://192.168.11.13:5000/client/getOne/${id}`)

          .then((res) => {
            setData(res.data[0]);
            // setPhotos(res.data[0].fl_image);
            // console.log('===========================>', res.data[0].fl_image);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, photos]);
  // console.log('le image ===========================>', data.fl_image);

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
                autoCapitalize="none"
                backgroundColor={'muted.100'}
                borderColor={'muted.200'}
                onChangeText={(newText) => {
                  setName(newText);
                }}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>bio</FormControl.Label>
              <Input
                autoCapitalize="none"
                backgroundColor={'muted.100'}
                borderColor={'muted.200'}
                onChangeText={(newText) => {
                  setBio(newText);
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
                autoCapitalize="none"
                onChangeText={(newText) => {
                  setGithob(newText);
                }}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>portfolio_link</FormControl.Label>
              <Input
                autoCapitalize="none"
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
                  label="Grapics & Design"
                  value="Grapics & Design"
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
                borderRadius={15}
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
      <View>
        <Header
          line={photos}
          id={id}
          name={data.client_name}
          category={data.company_name}
          openModal={openModal}
        />
        <Stats
          email={data.client_email}
          phone={data.phone_number}
          git={data.company_link}
          port={data.portfolio}
        />
        <About bio={data.fl_bio} />
        <Location location={data.company_adress} />
        <ClientProjects />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBg,
  },
});
