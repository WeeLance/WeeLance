//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { gs, colors } from '../../../HomeStyle';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
// import { ImagePicker } from 'expo';
import { useContext, useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
//---------Firebase---------
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyAJ3axTDvkPvHMfJVNUJ7YPYjqy0sVtsz8',
  authDomain: 'weelance-fc16c.firebaseapp.com',
  projectId: 'weelance-fc16c',
  storageBucket: 'weelance-fc16c.appspot.com',
  messagingSenderId: '646513291713',
  appId: '1:646513291713:web:f9f32488a8e39fd9f8bf40',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const app = initializeApp(firebaseConfig);

//------------firebase----------;
export default function Header({ name, category, id, line }) {
  //------------firebase upload picture---------
  // console.log(line, 'edadazhhf');
  const [icon, setIcon] = useState('select');
  const [image, setImage] = useState(line);
  const [p, setPP] = useState(null);
  
  
  return (
    <>
      <LinearGradient
        colors={[colors.orange, colors.pink]}
        start={[1, 1]}
        end={[2, 3]}
      >
        <View
          style={{
            marginHorizontal: 11,
            paddingVertical: 2,
            color: '#1C2765',
            height: 310,
          }}
        >
          <View style={gs.rowBetween}>
            <Ionicons name="" color={colors.pink} size={32} />
           
          </View>

          <View style={{ top: -30 }}>
            <View style={styles.imageContainer}>
              <View>
                <View>
                 
                  <Image
                    source={{
                      uri: image ? image : line,
                    }}
                    style={{ width: 100, height: 100, borderRadius: 32 }}
                  />
                </View>
              </View>
            </View>
            <View style={[gs.center, { marginVertical: 12 }]}>
              <Text style={gs.title}>{name}</Text>
              <Text style={[gs.title, { marginTop: 8 }]}>{category}</Text>

              <TouchableOpacity borderRadius={25} style={styles.follow}>
                <Entypo
                  name="plus"
                  size={20}
                  color="rgba(255, 255, 255, 0.6)"
                />
                <Text style={styles.followText}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
}

// define your styles
const styles = StyleSheet.create({
  right: {},

  imageContainer: {
    ...gs.center,
    marginTop: 16,
  },
  check: {
    ...gs.center,
    backgroundColor: colors.text,
    borderRadius: 100,
    width: 32,
    height: 32,
    position: 'absolute',
    zIndex: 1,
    right: -16,
    bottom: 16,
  },
  follow: {
    ...gs.button,
    ...gs.rowCenter,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 16,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 2,
    borderRadius: 25,
  },
  followText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '600',
    marginLeft: 4,
  },
});
