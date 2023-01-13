//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../../../HomeStyle";

// create a component
export default function About({bio}) {
  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>ABOUT ME</Text>
      <Text style={styles.about} >
   
       {bio}
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
    lineHeight : 22,
  
  }
});
