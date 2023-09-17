import React from 'react';
import { View, StyleSheet, TouchableOpacity,Image } from 'react-native';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';
import AppText from './AppText';

function WhiteCard({ImageUrl,text='text',ScaleX=1,ScaleY=1,ImageSize=1,onPress}) {
    const {width,height}= useAuth();
return (
<TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:width*0.27*ScaleX,height:width*0.35*ScaleY,borderRadius:width*0.03,backgroundColor:colors.white,padding:'1%'}}
onPress={onPress}>
                <Image style={{height:width*0.13*ImageSize,resizeMode:'contain'}}  source={ImageUrl}/>
                <AppText textAlign='center' fontFamily='PoppinsSemiBold'>{text}</AppText>
            </TouchableOpacity>
);
}

export default WhiteCard;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});