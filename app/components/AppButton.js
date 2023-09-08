import React from 'react';
import { Dimensions,StyleSheet,TouchableOpacity,Text, ActivityIndicator } from 'react-native';
import AppStyles from '../config/AppStyles';
import AppText from './AppText';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';


function AppButton({onPress,text,active=false,Color='#fff',Size,...otherprop}) {
    const {width}= useAuth();
return (
    <TouchableOpacity style={[styles.scrowCard,{padding:width*0.025,...otherprop}]}
    onPress={onPress}>
        {active && <ActivityIndicator color={'#fff'} size={25} animating={active}/>}
        {!active &&
        <AppText fontSize={Size?Size:width*0.06} fontFamily={'PoppinsExtraBold'} color={Color}>{text}</AppText>}
    </TouchableOpacity>
);
}

export default AppButton;
const styles = StyleSheet.create({
    scrowCard:{
        width:'100%',
        borderRadius:10,
        marginVertical:15,
        padding:10,
        alignItems:'center',
        backgroundColor:AppStyles.colors.secondary,
        // elevation:3,
        shadowOffset:{
            width:1,
            height:1
          },
          shadowColor:'#333',
          shadowOpacity:0.3,
          shadowRadius:2,
    }
});