import * as React from 'react';
import { Button, View, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  NativeBaseProvider,
  Avatar,
  Text,
  VStack,
  Box,
  Center,
  HStack,
  Image,
  Input,
  Icon,
} from 'native-base';
import styles from '../utils/styles';

import Category from '../utils/home';
import { Ionicons } from '@expo/vector-icons';
import Rating from './Rating';

function HomeScreen({ navigation }) {
  const myRef = React.useRef(null);
  React.useEffect(() => {
    if (myRef.current && myRef.current.setNativeProps) {
      const styleObj = {
        borderWidth: 1.5,
        borderRadius: 25,
        borderColor: '#f14e24',
      };
      myRef.current.setNativeProps({
        style: styleObj,
      });
    }
  }, [myRef]);
  return (
    <ScrollView>
      <Box backgroundColor={'#1C2765'} shadow={2} maxWidth="100%">
        <Image
        alt="description of image"
          source={{
            uri: 'https://res.cloudinary.com/dqz0n291c/image/upload/v1673044528/SCOOPER_tkmbde.png',
          }}
          resizeMode="cover"
          height={149}
          roundedTop="md"
        />
      </Box>

      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, paddingTop: 25 }}>
          <Center marginBottom={10} marginTop={-7} backgroundColor={'#1c2765'}>
            <Input
              marginBottom={5}
              marginTop={5}
              bgColor={'transparent'}
              placeholder="Search"
              variant="filled"
              width="350"
              borderColor={'muted.200'}
              borderRadius="35"
              py="1"
              px="2"
              _focus={{ borderColor: '#F14E24' }}
              InputLeftElement={
                <Icon
                  ml="2"
                  size="4"
                  color="warning.400"
                  as={<Ionicons name="ios-search" />}
                />
              }
            />
          </Center>

          <Text
            color={'#1C2765'}
            style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 10 }}
          >
            Grapics & Design
          </Text>
          <View style={{ height: 140, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}
                name="hela ayed"
              />

              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="chokri hmema"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="hedi jouini"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                }}
                name="amal jmour"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="ameni lefi"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="karim mastouri"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, paddingTop: 25 }}>
          <Text
            color={'#1C2765'}
            style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 10 }}
          >
            Programming & Tech
          </Text>
          <View style={{ height: 140, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="rania ouesleti"
              />

              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                }}
                name="Walid abdeslem"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}
                name="ahmed chraief"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="ahmed gaaya"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="yeser mtawaa"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80',
                }}
                name="fakhri manai"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, paddingTop: 25 }}>
          <Text
            color={'#1C2765'}
            style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 10 }}
          >
            Digital Marketing
          </Text>
          <View style={{ height: 140, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="mouna chebbi"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="hichem salem"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="ron gonzales"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1643732994192-03856731da2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="zaineb gharbi"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="aymen chaouech"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1649123245135-4db6ead931b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                }}
                name="makrem mgannem"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, paddingTop: 25 }}>
          <Text
            color={'#1C2765'}
            style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 10 }}
          >
            Video & Animation
          </Text>
          <View style={{ height: 140, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                }}
                name="kalthoum heni"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                }}
                name="heni abdelmlak"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1645830166230-187caf791b90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                }}
                name="aymen tibi"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                }}
                name="majdi baklouti"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1645378999488-63138abdecd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                }}
                name="sarah mellouli"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1651346158507-a2810590687f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                }}
                name="cyrine daoued"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, paddingTop: 25 }}>
          <Text
            color={'#1C2765'}
            style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 10 }}
          >
            Music and Audio
          </Text>
          <View style={{ height: 140, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1636041282523-1add6c493ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk3fHxhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                }}
                name="safouen garali"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEzfHxhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                }}
                name="salim aouani"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1661747675166-5cf96bd5d0dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI4fHxhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                }}
                name="dhia djobbi"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1625426193702-15200f5c008f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="achref rezgui"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="kais saied"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1594616838951-c155f8d978a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="saif omrane"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, paddingTop: 25 }}>
          <Text
            color={'#1C2765'}
            style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 10 }}
          >
            Buisness
          </Text>
          <View style={{ height: 140, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="saif benzarti"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1626038135427-bd4eb8193ba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="amir jendouba"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="nouha hajri"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="nihel sammoud"
              />
              <Category
                imageUri={{
                  uri: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                name="yousef mahjoub"
              />
              <Category
                imageUri={{
                  uri: 'https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000',
                }}
                name="amal mokni"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </ScrollView>

    //       <VStack>

    // <Box style={{padding:10}}>

    //     <HStack >

    //       <Image  marginLeft={0.5} borderRadius={25}  source={{
    //       uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672753573/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_1_xssl6n.png"
    //     }} alt="Alternate Text" size="xl" />
    //       <Image marginLeft={0.5}  borderRadius={25} source={{
    //       uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769863/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_4_pfxyyd.png"
    //     }} alt="Alternate Text" size="xl" />
    //       <Image marginLeft={0.5}  borderRadius={25} source={{
    //       uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769834/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_7_f4t7ia.png"
    //     }} alt="Alternate Text" size="xl" />
    //     </HStack>

    //     </Box>
    //       <Center marginTop={4} >
    //       <Text bold fontSize="lg" color="#1C2765" marginBottom={4} >Programming</Text>
    //       </Center>
    // <Box style={{padding:10}}>

    //     <HStack >

    //       <Image  marginLeft={0.5} borderRadius={25}  source={{
    //       uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769717/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_6_f3u2r7.png"
    //     }} alt="Alternate Text" size="xl" />
    //       <Image marginLeft={0.5}  borderRadius={25} source={{
    //       uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769765/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_5_nkzcnh.png"
    //     }} alt="Alternate Text" size="xl" />
    //       <Image marginLeft={0.5}  borderRadius={25} source={{
    //       uri: "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769802/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_3_yish3i.png"
    //     }} alt="Alternate Text" size="xl" />
    //     </HStack>

    //     </Box>

    //       </VStack>

    // <Text bold style={styles.text}>Grapics & Design </Text>
  );
}

export default HomeScreen;
