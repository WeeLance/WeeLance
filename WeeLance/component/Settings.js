import * as React from 'react';
import {
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

import { NavigationContainer } from '@react-navigation/native';
import Security from './Security';
import Info from './information-managment';
import Notification from './notification';
function Settings({ navigation }) {
  return (
    <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <VStack>
        <Box>
          <Info />
          <Security />
          {/* <Notification /> */}
        </Box>
      </VStack>
    </Box>
  );
}

export default Settings;
