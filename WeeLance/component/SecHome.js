
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MainContainer from './HomeContainers/MainContainer';
import StyledText from './HomeContainers/styledText';
import NewsSection from './HomeContainers/NewsSection';
import { newsData, exploreData } from './data';
import PopularServices from './HomeContainers/PopularServices';
import LottieAnimationScreen from "./lottie"

import { Box, ScrollView,Image, Center } from 'native-base';


// create a component
export default function HomEE({navigation}) {
  
  return (

   

    <ScrollView>
      <Box backgroundColor={'#1C2765'} shadow={2} maxWidth="100%">
        <Image
          alt="description of image"
          source={{
            uri: 'https://res.cloudinary.com/dqz0n291c/image/upload/v1673044528/SCOOPER_tkmbde.png',
          }}
          resizeMode="cover"
          height={149}
          roundedTop="md"
        />
      </Box>
      <MainContainer>
      

        <StyledText style={styles.sectionTitle} big>
          Trending News
        </StyledText>
        <NewsSection data={newsData} navigation={navigation}  />
        <StyledText style={styles.sectionTitle} big>
          Popular Services
        </StyledText>
        <PopularServices data={exploreData} navigation={navigation} />
            <LottieAnimationScreen />

      </MainContainer>
    </ScrollView>

  );
}

// define your styles
const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 25,
    marginLeft: 25,
  },
});
