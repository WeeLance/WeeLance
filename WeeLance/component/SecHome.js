//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import MainContainer from "./HomeContainers/MainContainer";
import StyledText from "./HomeContainers/styledText";
import NewsSection from "./HomeContainers/NewsSection";
import { newsData , exploreData} from "./data";
import PopularServices from "./HomeContainers/PopularServices";
import LottieAnimationScreen from "./lottie"
import {

  Box
 
} from 'native-base';


// create a component
export default function HomEE() {
  return (
   
      <MainContainer>
        
      <StyledText style={styles.sectionTitle} big>
        Trending News
      </StyledText>
      <NewsSection  data={newsData}/>
      <StyledText style={styles.sectionTitle} big>
       Popular Services
      </StyledText>
      <PopularServices data={exploreData}/> 
      <LottieAnimationScreen />
    </MainContainer>
  
   
   
  );
}

// define your styles
const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 25,
    marginLeft: 25,
  },
});
