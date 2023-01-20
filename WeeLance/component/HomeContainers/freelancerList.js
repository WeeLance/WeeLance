import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import {
  ScrollView,
  FlatList,
  Stack,
  VStack,
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
  View,
} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Category from '../../utils/home';
export default function freelancerList({ route }) {
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
    <Box>hi</Box>

  );
}
