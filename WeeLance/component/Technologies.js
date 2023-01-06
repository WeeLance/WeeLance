import * as React from "react";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH =  200;
const ITEM_HEIGHT = 200;

const images = [
  "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672918323/react-logo_3x_pq2ry9.jpg",
  "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672918425/images_pzjo77.jpg",
  "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672918526/1_p8kr-K6qcq_25g6ToWH01Q_bkpaga.jpg",
  "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672918576/react_native_final_file_dfg85e.jpg",
  "https://res.cloudinary.com/dnwi9wvci/image/upload/v1672918624/generatedHeaderImage-1639689510090_atqqkb.jpg",
];

const data = images.map((image, index) => ({
  key: String(index),
  photo: image,
  avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
    Math.random() * 40
  )}.jpg`,
}));
export default function technology() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <View
              style={{ width, justifyContent: "center", alignItems: "center" }}
            >
              <View
                style={{
                  borderRadius: 14,
                  

                  shadowColor: "#000",

                  shadowOpacity: 0.5,
                  shadowRadius: 30,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  borderRadius: 18,
                  padding: 12,

                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    overflow: "hidden",
                    alignItems: "center",
                    borderRadius: 14,
                   
                     
                  }}
                >
                  <Animated.Image
                    source={{ uri: item.photo }}
                    style={{
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT,
                      resizeMode: "cover",
                      transform: [
                        {
                             translateX, 
                      }],
                      
                    }}
                  />
                </View>
              </View>

              {/* <Image
                source={{ uri: item.avatar_url }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60,
                }}
              /> */}
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
