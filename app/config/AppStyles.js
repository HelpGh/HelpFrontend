import { Platform,Dimensions } from "react-native";
import colors from "./colors";

export default{
    colors,
    text:{
        color:colors.dark,
        fontSize:Dimensions.get('window').width*0.04,
        // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        fontFamily: "PoppinsRegular",
        textAlign:'left',
    }
}
