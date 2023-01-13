//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../../../HomeStyle";
import { EvilIcons , FontAwesome5 , Ionicons } from "@expo/vector-icons";



export default function Stats({email,phone,git}) {
  return (
    <View  opacity={1} style={styles.container}>
      {/* <Text style={[gs.subTitleState]}>Stats</Text> */}

      <View style={styles.statContainer}>
      <Text style={styles.stat}>
          
          <EvilIcons
            name="envelope"
            size={16}
            color="#1C2765"
            style={{ marginRight: 5 }}
          />
         {email}
        </Text>
        <Text style={styles.stat}>

        <Ionicons name='call-outline' size={15} color="white" />{" "}
           {phone}

        </Text>
        <Text style={styles.stat}>
          
          <EvilIcons
            name="envelope"
            size={16}
            color="#1C2765"
            style={{ marginRight: 5 }}
          />
         {git}
        </Text>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
  
    ...gs.rowBetween,
    marginHorizontal: 16,
    borderRadius: 16,
    marginTop: -25,
    height: 75,
    backgroundColor:"white",
    borderColor:'#f14e24',
    borderWidth:1
 
  },
  statContainer:{
    ...gs.center,
    flex:1,

  },
  statAdress:{
    fontSize:20,
    fontWeight: "600",
    color: colors.text
  },
  stat:{
    fontSize: 11,
    fontWeight: "600",
    letterSpacing:1,
    color: '#1C2765',
    marginTop: 2
  }
});


