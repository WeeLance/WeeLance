//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
// import { SwipeListView } from "react-native-swipe-list-view";

// create a component
const NOtificatioNN = () => {
 
  const data = [
    {
      id: "58",
      post_title: "Heavy weight",
      postImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      post_city: "newYork",
      username: "hela ayed",
      notification: " applied to your project",
      time: "09:00",
    },
    {
      id: "58",
      post_title: "Heavy weight",
      postImage:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      post_city: "newYork",
      username: "chokri hmema",
      notification: " give you 3 stars",
      time: "08:30",
    },
    {
      id: "58",
      post_title: "Heavy weight",
      postImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      post_city: "newYork",
      username: "hedi jouini",
      notification: " visit your profile",
      time: "14:00",
    },
    {
      id: "58",
      post_title: "Heavy weight",
      postImage:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      post_city: "newYork",
      username: "amal jmour",
      notification: " give you 2 stars",
      time: "13:00",
    },
    {
      id: "58",
      post_title: "Heavy weight",
      postImage:
        "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      post_city: "newYork",
      username: "ameni lefi",
      notification: " applied to your project",
      time: "11:00",
    },
    {
      id: "58",
      post_title: "Heavy weight",
      postImage:
        "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      post_city: "newYork",
      username: "karim mastouri",
      notification: " give you 4 stars",
      time: "13:30",
    },
    {
      id: "58",
      post_title: "Heavy weight",
      postImage:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      post_city: "newYork",
      username: "rania ouesleti",
      notification: " applied to your project",
      time: "15:30",
    },
    {
      id: "58",
      post_title: "Heavy weight",
      postImage:
        "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      post_city: "newYork",
      username: "Walid abdeslem",
      notification: " applied to your project",
      time: "21:00",
    },
    {
      id: "58",
      post_title: "Heavy weight",
      postImage:
        "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      post_city: "newYork",
      username: "ahmed chraief",
      notification: " applied to your project",
      time: "22:30",
    },
    {
      id: "58",
      post_title: "Heavy weight",
      postImage:
        "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      post_city: "newYork",
      username: "ahmed gaaya",
      notification: " applied to your project",
      time: "22:40",
    },
    {
      id: "58",
      post_title: "Heavy weight",
      postImage:
        "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80",
      post_city: "newYork",
      username: "yeser mtawaa",
      notification: " applied to your project",
      time: "23:45",
    },
    {
      id: "58",
      post_title: "Heavy weight",
      postImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      post_city: "newYork",
      username: "fakhri manai",
      notification: " applied to your project",
      time: "00:00",
    },
    {
      id: "58",
      post_title: "Heavy weight",
      postImage:
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      post_city: "newYork",
      username: "mouna chebbi",
      notification: " applied to your project",
      time: "23:00",
    },
    {
      id: "58",
      post_title: "Heavy weight",
      postImage:
        "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      post_city: "newYork",
      username: "hichem salem",
      notification: " applied to your project",
      time: "22:00",
    },
  ];
  return (
    
  
      <ScrollView >
        <View style={styles.container}>
          <FlatList
          data={data}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.container}>
                <View style={styles.HeaderLeftImageView}>
                  <Image
                    style={styles.HeaderLeftImage}
                    source={{ uri: item.postImage }}
                  />
                </View>
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                  <View>
                    <Text style={{ color: "#1C2765", fontSize: 15 }}>
                      {item.username}
                    </Text>
                    <Text style={{ color: "#64676B" }}>{item.time}</Text>
                  </View>
                  <View>
                    <Text style={{ color: "#64676B" }}>
                      {item.notification}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        /></View>
        
      </ScrollView>
 
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 15,
    backgroundColor: "white",
    flexDirection: "row",
  },
  HeaderLeftImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  HeaderLeftImageView: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginLeft: -15,
  },
});

//make this component available to the app
export default NOtificatioNN;
