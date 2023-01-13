import { View, Text , StyleSheet, StatusBar , ActivityIndicator} from "react-native";
import React from "react";
import {gs , colors} from "../../HomeStyle"
import Header from "./components/Header"
import Stats from './components/Stats'
import About from './components/About'
import Location from './components/Location'
import Skills from './components/Skills'
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function index () {

  const [showContent, setShowContent] = useState(false);
  const [id, setId] = useState('');
  const [data, setData] = useState([]);
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [bio, setBio] = useState('');

  const [phone, setPhone] = useState('');
  const [git, setGithob] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [name, setName] = useState('');
  console.log('aaaaaaaaaaaaa', data, id);

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

          .get(`http://192.168.11.81:5000/freelancer/getOne/${id}`)

          .then((res) => {
            setData(res.data[0]);
            console.log('hhhhhhhhhh', res.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

 
    return (
      <View>
          <Header name={data.fl_name} category={data.category} /> 
          <Stats email={data.fl_email} phone={data.fl_phone_number} git={data.github_link} port={portfolio}/>
          <About bio={data.fl_bio}/>
          <Location />  
          <Skills />  


      </View>
    );
  }



const styles = StyleSheet.create({
  container:{
   backgroundColor: colors.darkBg

  }
});
