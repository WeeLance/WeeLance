import { useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../contextes';
import Navigation from './navigation';
import { Text } from 'native-base';
export default function Logout({ navigation }) {
  const { setRoles } = useContext(UserContext);
  useEffect(() => {
    AsyncStorage.clear();
    setRoles(null);
    navigation.navigate('WelcomePage');
  }, []);

  return(<Text>hi</Text>)
}
