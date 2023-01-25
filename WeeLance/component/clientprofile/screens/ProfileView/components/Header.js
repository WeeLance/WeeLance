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
export default function Header({ name, category, openModal, id, line }) {
  //------------firebase upload picture---------
  // console.log(line, 'edadazhhf');
  const [icon, setIcon] = useState('select');
  const [image, setImage] = useState(line);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [p, setPP] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const update = () => {
    console.log('upldat');
    axios

      .put(`http://192.168.169.52:5000/freelancer/updatePhoto/${id}`, {
        fl_image: image,
      })
      .then((res) => console.log(res.data, 'sucucucucucucucuc'))
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //  if(p){
  //   uploadImage().then((res) => console.log(image, 'result'));

  //   console.log('uploading');
  //  }else{
  //   console.log('noth');
  //  }
  // }, [p]);
  const uploadImage = async () => {
    setLoading(true);
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', image, true);
      xhr.send(null);
    });
    const ref = firebase.storage().ref().child(`Pictures/${id}`);
    const snapshot = ref.put(blob);
    snapshot.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        setUploading(true);
      },
      (error) => {
        setUploading(false);
        console.log(error);
        alert(error);
        blob.close();

        return;
      },

      () => {
        snapshot.snapshot.ref.getDownloadURL().then((url) => {
          setUploading(false);

          console.log('Download URL: ', url);
          setImage(url);
          setLoading(false);
          blob.close();

          return url;
        });
      }
    );
  };
  // console.log(image, 'imagaimage');
  //----------end of firebase upload picture----
  // console.log(name);
  const renderIcon = () => {
    if (icon == 'select') {
      return (
        <AntDesign
          onPress={() => {
            pickImage();
            setIcon('upload');
          }}
          name="pluscircleo"
          size={20}
          color={colors.pink}
        />
      );
    } else if (icon == 'uplaod') {
      return (
        <AntDesign
          onPress={() => uploadImage()}
          name="home"
          size={20}
          color={colors.pink}
        />
      );
    }
  };
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
            <Entypo
              name="dots-three-vertical"
              color={colors.text}
              size={24}
              onPress={() => openModal('right')}
            />
          </View>

          <View style={{ top: -30 }}>
            <View style={styles.imageContainer}>
              <View>
                <View>
                  <View style={styles.check}>
                    {icon == 'select' && (
                      <AntDesign
                        onPress={() => {
                          pickImage();
                          setIcon('upload');
                        }}
                        name="pluscircleo"
                        size={20}
                        color={colors.pink}
                      />
                    )}
                    {icon == 'upload' && (
                      <AntDesign
                        onPress={() => {
                          setIcon('update');
                          uploadImage();
                        }}
                        name="home"
                        size={20}
                        color={colors.pink}
                      />
                    )}
                    {icon == 'update' && (
                      <AntDesign
                        onPress={() => {
                          setIcon('select');
                          update();
                        }}
                        name="check"
                        size={20}
                        color={colors.pink}
                      />
                    )}
                  </View>
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
