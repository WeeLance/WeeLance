import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { colors } from "../theme";

import StyledText from "./styledText";
import { useNavigation } from "@react-navigation/native";

const NewsItem = ({
  image,
  title,
  avatar,
  author,
  date,
  navigation,
  content,
  ...props
}) => {
 
  let activeColors = colors;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details", {
          image,
          title,
          avatar,
          author,
          date,
          content,
        });
      }}
      style={[{ backgroundColor: activeColors.secondary }, styles.container]}
      {...props}
    >
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.BottomSection}>
        <StyledText
          numberOfLines={3}
          style={[{ color: activeColors.accent }, styles.title]}
          bold
        >
          {title}
        </StyledText>
        <View style={styles.authorRow}>
          <View style={styles.author}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <StyledText bold>{author}</StyledText>
          </View>

          <StyledText
            style={[{ color: activeColors.tertiary }, styles.date]}
            small
          >
            {date}
          </StyledText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 370,
    width: 300,
    borderRadius: 25,
    marginRight: 20,
  },
  image: {
    width: 300,
    height: 190,
    borderRadius: 25,
  },
  BottomSection: {
    padding: 25,
    flex: 1,
    justifyContent: "space-between",
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 19,
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
    flex: 3,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  date: {
    textAlign: "right",
    flex: 2,
  },
});

export default NewsItem;
