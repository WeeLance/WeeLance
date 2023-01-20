//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import MainContainer from "../HomeContainers/MainContainer";
import StyledText from "../HomeContainers/styledText";

import { newsData} from "../../component/data";


import { colors } from "../theme";

// create a component
export default function Details({route}) {
  let activeColors = colors;
  const { image,
    title,
    avatar,
    author,
    date,
    content}= route?.params;
  return (
    <MainContainer style={{ backgroundColor: activeColors.secondary }}>
      <Image source={{ uri:image}} style={styles.image} />

      <View
        style={[
          { backgroundColor: activeColors.secondary },
          styles.BottomSection,
        ]}
      >
        <StyledText
          numberOfLines={3}
          style={[{ color: activeColors.accent }, styles.title]}
          bold
        >
          {title}
        </StyledText>
        <View style={styles.authorRow}>
          <View style={styles.author}>
            <Image source={{ uri:avatar }} style={styles.avatar} />
            <StyledText bold>{author}</StyledText>
          </View>

          <StyledText
            style={[{ color: activeColors.tertiary }, styles.date]}
            small
          >
            {date}
          </StyledText>
        </View>

        <StyledText
            style={styles.content}
            
          >
            {content}
          </StyledText>

      </View>
    </MainContainer>
  );
}

// define your styles
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  BottomSection: {
    padding: 25,
    top: -30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    marginBottom: 20,
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
    flex: 3,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 25,
  },
  date: {
    textAlign: "right",
    flex: 2,
  },
  content :{
    marginTop: 15
  }
});
