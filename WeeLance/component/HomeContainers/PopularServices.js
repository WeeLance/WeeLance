import { FlatList} from "react-native";
import ServicesItems from "./ServicesItems";



const PopularServices = ({data ,navigation}) => {
 
  return (
  <FlatList  data={data}
  renderItem={({item})=> <ServicesItems navigation={navigation} {...item}/> }
  keyExtractor={({id})=> id.toString()}
  horizontal={true}
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{
    paddingLeft : 25,
    paddingTop : 25,

  }}
  />
  );
};



export default PopularServices;
