import {  StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../theme";

import StyledText from "./styledText";

const NewsItem = ({ image, title,  ...props }) => {
 
  return (
    <TouchableOpacity 
      style={[ styles.container]}
      {...props}
    >
      <Image source={{ uri: image }} style={[styles.image , StyleSheet.absoluteFill]} />

     
        <StyledText style={styles.title} bold>
          {title}
        </StyledText>
      
     
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginRight: 20,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },


  title: {
    fontSize: 19,
    color :  colors.primary,
    height : '100%',
    width : '100%',
    textAlign :'center',
    textAlignVertical :'center',
    backgroundColor : '#0006',
    borderRadius : 60,
    borderWidth : 1,
    borderColor : '#f14e24',



  },
  
  
});

export default NewsItem;
 