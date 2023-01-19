import { Text } from "react-native";
import { colors } from "../theme";



const StyledText = ({ children , style ,big, small,bold, ...props }) => {
  let activeColors = colors;
  return (
    
      <Text
        style={[{
          color: activeColors.tint,
          fontSize:small ?  14 : big  ? 24 : 16, 
          fontWeight: bold || big  ?  "bold" : "normal"
        }, style,
    ]}
       
        {...props}
      >
        {children}
        
      </Text>
 
  );
};



export default StyledText;
