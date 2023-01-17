import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:  "space-around",
  },
  button: {
    backgroundColor: '#1C2765',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5
  },
  bottomContainer: {
  justifyContent: 'center',
    height: height ,
    
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 35,
    paddingLeft: 10,
    
  },
  formButton: {
    backgroundColor: '#1C2765',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 4,
      
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formInputContainer: {
    marginBottom: 140,
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: 'center',
  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    top: -20
  },
  text:{
    fontWeight: "bold",
    padding: 30,
    alignSelf: 'center',
    flex:1 ,
    fontSize:20,
    

  }
,
image:{
  justifyContent:"center"
}

});

export default styles;