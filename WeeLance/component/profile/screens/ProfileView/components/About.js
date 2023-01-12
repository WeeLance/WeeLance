//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../../../HomeStyle";

// create a component
export default function About() {
  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>ABOUT ME</Text>
      <Text style={styles.about}>
   
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  about:{
    fontSize:15,
    fontWeight: "500",
    color: colors.darkHl,
    marginTop :8 ,
    lineHeight : 22
  }
});
