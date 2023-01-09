import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { NativeBaseProvider, Box, Text, Pressable, Heading, IconButton, Icon, HStack, Avatar, Center } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';



export default function Basic() {
  const [listData, setListData] = useState([{text:'amdouni'},{text:'wiem'},{text:'walid'},{text:'mariem'},{text:'abderahim'}]);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = ({
    item,
    index
  }) => (<Box width="100%">
      <Pressable onPress={() => console.log('You touched me')} alignItems="center" bg="white" borderBottomColor="trueGray.200" borderBottomWidth={1} justifyContent="center" height={50} underlayColor={'#AAA'} _pressed={{
      bg: 'trueGray.200'
    }} py={8}>
        <HStack width="100%" px={4}>
          <HStack space={2} alignItems="center">
        
            <Text width={100} height={50}>{item.text}</Text>
           
          </HStack>
        </HStack>
      </Pressable>
    </Box>)

  const renderHiddenItem = (data, rowMap) => <HStack flex={1} pl={2}>
      <Pressable px={10} ml="auto" cursor="pointer" bg="dark.500" justifyContent="center" onPress={() => closeRow(rowMap, data.item.key)} _pressed={{
      opacity: 0.5
    }}>
        <Icon as={<Ionicons name="close" />} color="white" />
      </Pressable>
      <Pressable px={4} cursor="pointer" bg="red.500" justifyContent="center" onPress={() => deleteRow(rowMap, data.item.key)} _pressed={{
      opacity: 0.5
    }}>
        <Icon as={<MaterialIcons name="delete" />} color="white" />
      </Pressable>
    </HStack>;

  return <Box bg="white" safeArea flex={1}>
      <SwipeListView data={listData} renderItem={renderItem} renderHiddenItem={renderHiddenItem} rightOpenValue={-130} previewRowKey={'0'} previewOpenValue={-40} previewOpenDelay={3000} onRowDidOpen={onRowDidOpen} />
    </Box>;
}


    