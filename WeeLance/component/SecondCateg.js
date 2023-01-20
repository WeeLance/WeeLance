import * as React from 'react';
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
import {
  Avatar,
  HStack,
  Center,
  NativeBaseProvider,
  Image,
  Box, 
  Pressable
} from 'native-base';
const { width, height } = Dimensions.get('screen');

const Data = [
  {
    key: 0,
    image:
      'https://res.cloudinary.com/dqz0n291c/image/upload/v1672848401/image_2023-01-04_170637676_kr5c9b.png',
    name: 'Graphic & Design',
    jobTitle: 'graphic & design',
    email: 'wiem@gmail.com',
  },
  {
    key: 0,
    image:
      'https://res.cloudinary.com/dqz0n291c/image/upload/v1672848480/image_2023-01-04_170755562_dayg0i.png',
    name: 'Digital Marketing',
    jobTitle: 'graphicdesjhv',
    email: 'wiem@gmail.com',
  },
  {
    key: 0,
    image:
      'https://res.cloudinary.com/dqz0n291c/image/upload/v1673183117/image_2023-01-08_140503657-removebg-preview_oq3th2.png',
    name: 'Textwriting & Translation',
    jobTitle: 'graphicdesjhv',
    email: 'wiem@gmail.com',
  },
  {
    key: 0,
    image:
      'https://res.cloudinary.com/dqz0n291c/image/upload/v1673183223/image_2023-01-08_140654057-removebg-preview_vcxdck.png',
    name: 'Programing & Tech',
    jobTitle: 'graphicdesjhv',
    email: 'wiem@gmail.com',
  },
  {
    key: 0,
    image:
      'https://res.cloudinary.com/dqz0n291c/image/upload/v1673183268/image_2023-01-08_140738668-removebg-preview_rnmvw0.png',
    name: 'Video & Animation',
    jobTitle: 'graphicdesjhv',
    email: 'wiem@gmail.com',
  },
  {
    key: 0,
    image:
      'https://res.cloudinary.com/dqz0n291c/image/upload/v1673183302/image_2023-01-08_140819483_dfojwx.png',
    name: 'Music & Audio',
    jobTitle: 'graphicdesjhv',
    email: 'wiem@gmail.com',
  },
  {
    key: 0,
    image:
      'https://res.cloudinary.com/dqz0n291c/image/upload/v1673183330/image_2023-01-08_140847638_bid38n.png',
    name: 'Business',
    jobTitle: 'graphicdesjhv',
    email: 'wiem@gmail.com',
  },
];

const BG_IMG =
  'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?aut1265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

const SPACING = 20;

const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export default ({navigation}) => { 
  const nav =(Category)=>{ 
    navigation.navigate("ProjectbyCategory" , {Category : Category})
  }
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View backgroundColor={'#FFF'}>
      <Box
      // borderRadius={25}
      // borderWidth={2}
      // borderColor={'#000000'}
      marginLeft={14}
      marginRight={14}
        height={550}
        backgroundColor={'#FFF'}
        marginTop={70}
        marginBottom={130}
      >
        <View style={StyleSheet.absoluteFillObject}>
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: BG_IMG }}
              blurRadius={80}
            />
            <Animated.FlatList
              data={Data}
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
                  ITEM_SIZE * (index + 1),
                ];
                const scale = scrollY.interpolate({
                  inputRange,
                  outputRange: [1, 1, 1, 0],
                });
                const opacity = scrollY.interpolate({
                  inputRange: opacityInputRange,
                  outputRange: [1, 1, 1, 0],
                });
                return ( 
                  <Pressable  onPress={()=>{nav(item.name) }}>
                  <Animated.View 
                    style={{
                      flexDirection: 'row',
                      padding: SPACING,
                      marginBottom: SPACING,
                      backgroundColor: 'rgba(255,255,255,0.8)',
                      borderRadius: 12,
                      borderColor: 'red',
                      borderWidth: 1.5,
                      borderRadius: 25,
                      borderColor: '#f14e24',
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
                      source={{ uri: item.image }}
                      //    style={{ width:AVATAR_SIZE , height: AVATAR_SIZE  ,
                      // marginRight: SPACING /2  }}
                      size={50}
                    />
                    <View style={{ justifyContent: 'center' }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '700',
                          opacity: 0.7,
                          marginLeft: SPACING / 2,
                        }}
                      >
                        {' '}
                        {item.name}
                      </Text>
                      {/* <Text style={{fontSize: 18 , opacity: .7}}> {item.jobTitle}</Text> */}
                      {/* <Text style={{ fontSize:14 , opacity: .8 , color: '#0099cc' }}> {item.email}</Text>  */}
                    </View>
                  </Animated.View> 
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      </Box>
    </View>
  );
};
