import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';

function ImageCard({image,title,scaleX=1,scaleY=1}) {
    const {width,height} =useAuth();
return (
<View style={{width:width*0.5*scaleX,height:height*0.28*scaleY,alignItems:'center',}}>
<Image style={{width:'100%',height:'90%',borderRadius:width*0.05}} source={image}/>
<AppText fontFamily='PoppinsSemiBold' fontSize={width*0.035}>{title}</AppText>
</View>
);
}

export default ImageCard;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});