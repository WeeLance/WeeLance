//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import MainContainer from "../HomeContainers/MainContainer";
import StyledText from "../HomeContainers/styledText";

import { newsData} from "../../component/data";
import {
  Button, Block, Card,  Icon, NavBar,
} from 'galio-framework';

import Constants from 'expo-constants';
import { colors } from "../theme";
import theme from './stylingcol';

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
    <Block safe flex>
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
      <Card
      flex
      borderless
      shadowColor={theme.COLORSss.BLACK}
      style={styles.authorr}
      title="Christopher Moon"
      caption="139 minutes ago"
      avatar="http://i.pravatar.cc/100?id=article"
      location={(
        <Block row right>
          <Block row middle style={{ marginHorizontal: theme.SIZES.BASE }}>
            <Icon name="eye" family="font-awesome" color={theme.COLORSss.MUTED} size={theme.SIZES.FONT * 0.875} />
            <Text
              p
              color={theme.COLORSss.MUTED}
              size={theme.SIZES.FONT * 0.875}
              style={{ marginLeft: theme.SIZES.BASE * 0.25 }}
            >
              25.6k
            </Text>
          </Block>
          <Block row middle>
            <Icon name="heart" family="font-awesome" color={theme.COLORSss.MUTED} size={theme.SIZES.FONT * 0.875} />
            <Text
              p
              color={theme.COLORSss.MUTED}
              size={theme.SIZES.FONT * 0.875}
              style={{ marginLeft: theme.SIZES.BASE * 0.25 }}
            >
              936
            </Text>
          </Block>
        </Block>
      )}
    />
      
    </MainContainer>
    </Block>
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
  },
  authorr: {
    position: 'absolute',
    right: theme.SIZES.BASE,
    left: theme.SIZES.BASE,
    bottom: Constants.statusBarHeight,
    backgroundColor: theme.COLORSss.WHITE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: theme.SIZES.BASE / 2,
  },
});
