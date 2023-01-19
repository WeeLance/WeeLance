//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import MainContainer from "./HomeContainers/MainContainer";
import StyledText from "./HomeContainers/styledText";
import NewsSection from "./HomeContainers/NewsSection";
import { newsData , exploreData} from "./data";
import PopularServices from "./HomeContainers/PopularServices";

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
