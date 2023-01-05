import React from 'react' 
// import { View , Text ,Sty } from 'native-base'
import { Text ,View , StyleSheet,TouchableOpacity ,Image ,FlatList} from 'react-native' 
import { color } from 'react-native-reanimated' 
import { AntDesign } from '@expo/vector-icons'; 
import { Divider,HStack ,Box } from 'native-base'; 
import data from '../data/notif';

export default function notification() {
  return ( 
    <View> 
    <FlatList  
    data = {data}  
    renderItem = {({item})=>{ 
        return (
<View style = {styles.container}> 
<View style = {styles.HeaderLeftImageView}>  
<Image style = {styles.HeaderLeftImage }  source = { require("../assets/home/first.jpg")}  />
</View>  


<View style = {{flexDirection :"row" , marginLeft : 10 }}> 
<View>  
    <HStack>
        <Box>
    <Text style = {{  color : '#1C2765' ,fontSize : 15 } }> {item.name}</Text> 

    <Text style = {{flex : 1}}>{item.content}</Text>
    </Box> 
    <AntDesign name="delete" size={20} color ="F14E24" style ={{marginLeft : 100 }}    /> 
        
         </HStack>
          <Divider orientation="horizontal" marginTop={2.5} />
    </View>  
</View> 
</View>  
)   
 }} 
/>

  </View> 

 )
}   

const styles = StyleSheet.create({  
    container : {  
        flex : 1 , 
        width :"100%", 
        height : "100%", 
        padding : 15  , 
        backgroundColor :"White" , 
        flexDirection : "row"
    } ,
    HeaderLeftImage : {  
        width :"100%" , 
     height : "100%" , 
     borderRadius : 50 ,
    } ,
    HeaderLeftImageView :{  
        width : 50 , 
        height : 50 , 
        borderRadius : 40 / 2 , 
        marginLeft : 15 ,
    }
})
