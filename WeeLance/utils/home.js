//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';
import { Avatar, VStack, Center, NativeBaseProvider, HStack } from "native-base";
import { Ionicons,Entypo } from '@expo/vector-icons'
// create a component
class Category extends Component {
    render() {
        return (
            <View style={{height:130,width:130 , marginLeft:20 , borderWidth: 0.5 , borderColor: "#dddddd"}}>
                          <View style={{flex: 4}}>

 <Avatar bg="pink.600" alignSelf="center" size="xl" source={this.props.imageUri}>
          GG
        </Avatar>

                          </View>
                          <View style={{flex:1 ,paddingLeft:10 , paddingTop:10}}>
                         <HStack>
                             <Text >
                                   {this.props.name}
                                </Text>
                                
                         </HStack>
                          </View>
                         

                        </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Category;
