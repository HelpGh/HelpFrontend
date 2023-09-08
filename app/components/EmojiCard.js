import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import useAuth from '../auth/useAuth';
import AppText from './AppText';
import colors from '../config/colors';

function EmojiCard({image,title,number}) {
    const {width,height}=useAuth();
return (
<View style={{height:height*0.22,width:width*0.3,backgroundColor:colors.white,borderRadius:width*0.03,justifyContent:'flex-end',alignItems:'center',paddingVertical:'0.5%'}}>
        <View style={{height:'70%',justifyContent:'center'}}>
        <Image source={image}/>
        </View>
        <View style={{alignItems:'center',height:'30%'}}>
        <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.035}>{title}</AppText>
        <AppText fontFamily='PoppinsSemiBold' color={colors.medium}>{number}</AppText>
        </View>
    </View>
);
}

export default EmojiCard;
const styles = StyleSheet.create({
container:{
// flex:1,
justifyContent:'center',
 alignItems:'center'
}
});