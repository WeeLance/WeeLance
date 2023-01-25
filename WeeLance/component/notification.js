import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Text,
  Pressable,
  Heading,
  IconButton,
  Icon,
  HStack,
  Avatar,
  Center,
} from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// define your styles

export default function Basic() {
  const [id, setId] = useState('');
  const [proj, setProj] = useState([]);
  const [user, setUser] = useState([]);
  console.log(proj, '<==========>');

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

          .get(`http://192.168.169.52:5000/freelancer/getOne/${id}`)

          .then((res) => {
            setUser(res.data[0]);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://192.168.169.52:5000/project/getCategory/${user.category}`)
      .then((res) => {
        console.log(res.data);
        setProj(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  const data = [
    {
      id: '58',
      post_title: 'Heavy weight',
      postImage:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      post_city: 'newYork',
      username: 'hela ayed',
      notification: ' applied to your project',
      time: '09:00',
    },
    {
      id: '59',
      post_title: 'Heavy weight',
      postImage:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      post_city: 'newYork',
      username: 'chokri hmema',
      notification: ' give you 3 stars',
      time: '08:30',
    },
    {
      id: '60',
      post_title: 'Heavy weight',
      postImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      post_city: 'newYork',
      username: 'hedi jouini',
      notification: ' visit your profile',
      time: '14:00',
    },
    {
      id: '51',
      post_title: 'Heavy weight',
      postImage:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      post_city: 'newYork',
      username: 'amal jmour',
      notification: ' give you 2 stars',
      time: '13:00',
    },
    {
      id: '52',
      post_title: 'Heavy weight',
      postImage:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      post_city: 'newYork',
      username: 'ameni lefi',
      notification: ' applied to your project',
      time: '11:00',
    },
    {
      id: '70',
      post_title: 'Heavy weight',
      postImage:
        'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      post_city: 'newYork',
      username: 'karim mastouri',
      notification: ' give you 4 stars',
      time: '13:30',
    },
    {
      id: '563',
      post_title: 'Heavy weight',
      postImage:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      post_city: 'newYork',
      username: 'rania ouesleti',
      notification: ' applied to your project',
      time: '15:30',
    },
    {
      id: '595',
      post_title: 'Heavy weight',
      postImage:
        'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      post_city: 'newYork',
      username: 'Walid abdeslem',
      notification: ' applied to your project',
      time: '21:00',
    },
    {
      id: '100',
      post_title: 'Heavy weight',
      postImage:
        'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      post_city: 'newYork',
      username: 'ahmed chraief',
      notification: ' applied to your project',
      time: '22:30',
    },
    {
      id: '120',
      post_title: 'Heavy weight',
      postImage:
        'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      post_city: 'newYork',
      username: 'ahmed gaaya',
      notification: ' applied to your project',
      time: '22:40',
    },
    {
      id: '130',
      post_title: 'Heavy weight',
      postImage:
        'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80',
      post_city: 'newYork',
      username: 'yeser mtawaa',
      notification: ' applied to your project',
      time: '23:45',
    },
    {
      id: '140',
      post_title: 'Heavy weight',
      postImage:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      post_city: 'newYork',
      username: 'fakhri manai',
      notification: ' applied to your project',
      time: '00:00',
    },
    {
      id: '1574',
      post_title: 'Heavy weight',
      postImage:
        'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      post_city: 'newYork',
      username: 'mouna chebbi',
      notification: ' applied to your project',
      time: '23:00',
    },
    {
      id: '785',
      post_title: 'Heavy weight',
      postImage:
        'https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      post_city: 'newYork',
      username: 'hichem salem',
      notification: ' applied to your project',
      time: '22:00',
    },
  ];
  const [listData, setListData] = useState(data);
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    console.log(proj, 'sqdqdqdqdqd', listData);
    let arr = [];
    for (let i = 0; i < proj.length; i++) {
      axios
        .get(
          `http://192.168.169.52:5000/client/getOne/${proj[i].client_client_id}`
        )
        .then((res) => {
          console.log(res.data);
          arr.push(res.data[0]);
        });
    }
    setTimeout(() => setUsers(arr.reverse()), 100);
    setListData(proj.reverse());
  }, [proj]);
  console.log(Users[0], '=================================>');
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log('This row opened', rowKey);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.container}>
      <View style={styles.HeaderLeftImageView}>
        <Image
          style={styles.HeaderLeftImage}
          source={{ uri: item.postImage }}
        />
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <View>
          <Text style={{ color: '#1C2765', fontSize: 15 }}>
            {item.project_name}
          </Text>
          <Text style={{ color: '#64676B' }}>
            {Users[index] && Users[index].client_email}
          </Text>
        </View>
        <View>
          <Text style={{ color: '#64676B' }}>{item.notification}</Text>
        </View>
      </View>
    </View>
  );
  const renderHiddenItem = (data, rowMap) => (
    <HStack flex={1} pl={2}>
      <Pressable
        px={10}
        ml="auto"
        cursor="pointer"
        bg="dark.500"
        justifyContent="center"
        onPress={() => closeRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}
      >
        <Icon as={<Ionicons name="close" />} color="white" />
      </Pressable>
      <Pressable
        px={4}
        cursor="pointer"
        bg="red.500"
        justifyContent="center"
        onPress={() => deleteRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}
      >
        <Icon as={<MaterialIcons name="delete" />} color="white" />
      </Pressable>
    </HStack>
  );

  return (
    <Box bg="white" safeArea flex={1}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-130}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </Box>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  HeaderLeftImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  HeaderLeftImageView: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginLeft: -15,
  },
});
