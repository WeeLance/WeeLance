import { StyleSheet   } from 'react-native'



export const colors ={
    darkBg: "#222",
     lightBg: '#333',
     darkHl: "#666" ,
     lightHl : "#888",
     pink: "#f14e24",
     text : "#fff",
     textSec: '#aaa',
     orange:'#1C2765',
     black: '#000'
}
export const gs =StyleSheet.create({
    sectionContainer:{
      paddingVertical: 9,
      paddingHorizontal:15 ,
      marginBottom :8,
      backgroundColor: "#1C2765",
      

    },
    sectioncontainer:{
      paddingVertical: 9,
      paddingHorizontal:15 ,
      marginBottom :8,
      backgroundColor: "white",
      

    },
    rowCenter:{
      flexDirection:'row',
      alignItems:"center"
    },
    rowBetween:{
        flexDirection : 'row',
        justifyContent: 'space-between'
    },
    title:{
        color:colors.text,
        fontSize: 20,
        top:1
    },
    center :{
      alignItems: 'center',
      justifyContent: 'center'
    },
    subTitle :{
      fontWeight: "600",
      textTransform: "uppercase",
      color: "rgba(255, 255, 255, 0.6)",
      fontSize: 15 ,
      letterSpacing: 1
    },
    subTitleState :{
      fontWeight: "600",
      
      color: "rgba(255, 255, 255, 1)",
      fontSize: 15 ,
      letterSpacing: 1
    },
    button:{
      justifyContent: 'center',
      alignItems: 'center',
  
      borderRadius:100,
      
    },
    sectionTitle:{
      fontWeight: "700",
      color: "#1C2765",
      fontSize :15
    }
})