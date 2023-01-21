import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  FlatList,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Avatar,
  HStack,
  Center,
  NativeBaseProvider,
  Image,
  Box,
  Pressable,
} from 'native-base';
import axios from 'axios';

const { width, height } = Dimensions.get('screen');
// { route }

// const Data = [
//   {
//     key: 0,
//     image:
//       'https://res.cloudinary.com/dnwi9wvci/image/upload/v1674138278/W5HI6Y4DINDTNP76R6CLA5IWRU_svgjic.jpg',
//     name: 'Macie Bush',
//     jobTitle: 'graphic & design',
//     email: 'wiem@gmail.com',
//   },
//   {
//     key: 0,
//     image:
//       'https://res.cloudinary.com/dnwi9wvci/image/upload/v1674137848/personnel-image-4483_vlrdcr.jpg',
//     name: 'Peter Merritt',
//     jobTitle: 'graphicdesjhv',
//     email: 'wiem@gmail.com',
//   },
//   {
//     key: 0,
//     image:
//       'https://res.cloudinary.com/dnwi9wvci/image/upload/v1674251230/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950_nptqci.jpg',
//     name: 'Kathleen Osborne',
//     jobTitle: 'graphicdesjhv',
//     email: 'wiem@gmail.com',
//   },
//   {
//     key: 0,
//     image:
//       'https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769765/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_5_nkzcnh.png',
//     name: 'Lilli Santiago',
//     jobTitle: 'graphicdesjhv',
//     email: 'wiem@gmail.com',
//   },
//   {
//     key: 0,
//     image:
//       'https://res.cloudinary.com/dnwi9wvci/image/upload/v1672753573/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_1_xssl6n.png',
//     name: 'Lawson Todd',
//     jobTitle: 'graphicdesjhv',
//     email: 'wiem@gmail.com',
//   },
//   {
//     key: 0,
//     image:
//       'https://res.cloudinary.com/dnwi9wvci/image/upload/v1672769717/Black_Abstract_Graphic_Designer_LinkedIn_Profile_Picture_6_f3u2r7.png',
//     name: 'Richard Ball',
//     jobTitle: 'graphicdesjhv',
//     email: 'wiem@gmail.com',
//   },
//   {
//     key: 0,
//     image:
//       'https://res.cloudinary.com/dnwi9wvci/image/upload/v1671182446/IMG_0168_uuvouj.jpg',
//     name: 'Raphael Wiley',
//     jobTitle: 'graphicdesjhv',
//     email: 'wiem@gmail.com',
//   },
//   {
//     key: 0,
//     image:
//       'https://res.cloudinary.com/dnwi9wvci/image/upload/v1674257394/shutterstock_563564683-scaled_gmcxab.jpg',
//     name: 'Yousef Meza',
//     jobTitle: 'graphicdesjhv',
//     email: 'wiem@gmail.com',

//   },
//   {
//     key: 0,
//     image:
//       'https://res.cloudinary.com/dnwi9wvci/image/upload/v1674257527/7-ways-to-become-the-person-everyone-respects_qgatq4.jpg',
//     name: 'Astrid Molina',
//     jobTitle: 'graphicdesjhv',
//     email: 'wiem@gmail.com',

//   },
//   {
//     key: 0,
//     image:
//       'https://res.cloudinary.com/dnwi9wvci/image/upload/v1674257602/reserved-person-line_dhyyjb.jpg',
//     name: 'Willie Haines',
//     jobTitle: 'graphicdesjhv',
//     email: 'wiem@gmail.com',

//   },
//   {
//     key: 0,
//     image:
//       'https://res.cloudinary.com/dnwi9wvci/image/upload/v1674257648/images_kfgh1l.jpg',
//     name: 'Patricia Rocha',
//     jobTitle: 'graphicdesjhv',
//     email: 'wiem@gmail.com',

//   },
//   {
//     key: 0,
//     image:
//       'https://res.cloudinary.com/dnwi9wvci/image/upload/v1674257711/images_lk6f69.jpg',
//     name: 'Owais Irwin',
//     jobTitle: 'graphicdesjhv',
//     email: 'wiem@gmail.com',
//   }
// ];

const BG_IMG =
  'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?aut1265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

const SPACING = 20;

const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export default function freelancerList({ route,navigation }) {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  console.log('aaaaaaaaaaaaaaaaaaaaa', route.params.title);
  // const [starRating, setStarRating] = useState(4);

  const [data, setData] = useState('');
  console.log('hhhhhhhhh', data);

  useEffect(() => {
    axios
      .get(`http://192.168.11.13:5000/freelancer//getByy/${route.params.title}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* <Box
    // borderRadius={25}
    // borderWidth={2}
    // borderColor={'#000000'}
    marginLeft={14}
    marginRight={14}
      height={550}
      backgroundColor={'#FFF'}
      marginTop={70}
      marginBottom={130}
    > */}
      <View style={StyleSheet.absoluteFillObject}>
        <View style={{ flex: 1 }}>
          <Image source={{ uri: BG_IMG }} blurRadius={80} />
          <Animated.FlatList
            data={data}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            keyExtractor={(item) => item.key}
            contentContainerStyle={{
              padding: SPACING,
              paddingTop: StatusBar.currentHeight || 42,
            }}
            renderItem={({ item, index }) => {
              const inputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 2),
              ];
              const opacityInputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 0.5),
              ];
              const scale = scrollY.interpolate({
                inputRange,
                outputRange: [1, 1, 1, 0],
              });
              const opacity = scrollY.interpolate({
                inputRange: opacityInputRange,
                outputRange: [1, 1, 1, 0],
              });
              const pressed=item.freelancer_id
              console.log('<=======>',pressed);
              return (
                <Pressable
                onPress={() => {
                  navigation.navigate("userProfile",{pressed});
                }}
                >
                  <Animated.View
                    style={{
                      flexDirection: 'row',
                      padding: SPACING,
                      marginBottom: SPACING,
                      backgroundColor: 'rgba(255,255,255,0.8)',
                      alignItems: 'center',
                      height: 90,
                      borderRadius: 12,
                      borderColor: 'red',
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: '#1c2765',
                      opacity,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 10,
                      },
                      shadowOpacity: 0.3,
                      shadowRadius: 20,
                      transform: [{ scale }],
                    }}
                  >
                    <Image
                      source={{ uri: item.fl_image }}
                      style={{
                        width: AVATAR_SIZE,
                        height: AVATAR_SIZE,
                        borderRadius: AVATAR_SIZE,
                        marginRight: SPACING / 2,
                      }}
                      size={50}
                    />
                    <View style={{ justifyContent: 'center' }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '700',
                          opacity: 0.7,
                          marginLeft: SPACING / 2,
                        }}
                      >
                        {item.fl_name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          opacity: 0.7,
                          color: '#1c2765',
                          marginLeft: SPACING / 2,
                        }}
                      >
                        {' '}
                        {item.category}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          opacity: 0.8,
                          color: '#1c2765',
                          marginLeft: SPACING / 2,
                        }}
                      >
                        {' '}
                        {item.email}
                      </Text>
                    </View>
                  </Animated.View>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
      {/* </Box> */}
    </View>
  );
}
