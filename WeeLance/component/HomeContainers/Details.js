//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image  } from "react-native";
import { StatusBar } from "expo-status-bar";
import MainContainer from "./HomeContainers/MainContainer";
import StyledText from "./HomeContainers/styledText";
import NewsSection from "./HomeContainers/NewsSection";
import { newsData , exploreData} from "./data";
import PopularServices from "./HomeContainers/PopularServices";

import { colors } from "../theme";




// create a component
export default function Details() {
    let activeColors = colors;
  return (
    <MainContainer
    
    style={{ backgroundColor: activeColors.secondary }}
    >


        
      <Image source={newsData[0].image} style={styles.image} />

<View style={styles.BottomSection}>
  <StyledText numberOfLines={3} style={[{ color: activeColors.accent }, styles.title]} bold>
    {newsData[0].title}
  </StyledText>
  <View style={styles.authorRow}>
    <View style={styles.author}>
      <Image source={{ uri: newsData[0].avatar }} style={styles.avatar} />
      <StyledText bold>{newsData[0].author}</StyledText>
    </View>


    <StyledText style={[{color: activeColors.tertiary},styles.date]} small>{newsData[0].date}</StyledText>
  </View>
</View>
    </MainContainer>
  );
}

// define your styles
const styles = StyleSheet.create({
   
    image: {
      width: '100%',
      height: 300,
     
    },
    BottomSection: {
      padding: 25,
      flex :1,
      justifyContent : "space-between"
    },
    authorRow: {
      flexDirection:'row',
      alignItems: 'center',
      justifyContent : "space-between"
    },
    title: {
      fontSize: 19,
    },
    author: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 25,
      flex :3
    },
    avatar: {
      height: 30,
      width: 30,
      borderRadius: 15,
      marginRight: 10,
    },
    date:{
      textAlign:'right',
      flex :2
    }
  });