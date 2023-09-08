import React from 'react';
import { View, StyleSheet } from 'react-native';
import useAuth from '../auth/useAuth';
import AppText from './AppText';
import colors from '../config/colors';
import ImageCard from './ImageCard';

function Cart({title='title',image,Size=1,amount='0',...other}) {
    const {width,height}= useAuth();
return (
<View style={{flexDirection:'row',justifyContent:'space-between',height:height*0.15,...other}}>

<View style={{width:'30%'}}>
<ImageCard image={image} scaleX={0.55} scaleY={0.6}/>
</View>
<View style={{width:'68%',justifyContent:'space-between'}}>
    <View style={{height:'50%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View>
        <AppText fontSize={width*0.035*Size} fontFamily='PoppinsSemiBold'>{title}</AppText>
        <AppText fontSize={width*0.035*Size}>20% off</AppText>
        </View>
        <View>
        <AppText fontSize={width*0.035*Size} color={colors.medium}>Qty:</AppText>
        <AppText borderBottomWidth={1} fontFamily='PoppinsSemiBold'>3{'>'}</AppText>
        </View>
        <View>
        <AppText fontSize={width*0.045} fontFamily='PoppinsSemiBold'>{amount}</AppText>
        </View>
    </View>
        
    <View style={{height:'20%',justifyContent:'flex-end',flexDirection:'row',}}>
    <AppText borderBottomWidth={1} fontSize={width*0.035}>Remove</AppText>
    <AppText fontSize={width*0.035}> | </AppText>
    <AppText borderBottomWidth={1} fontSize={width*0.035}>Save for later</AppText>
    </View>
</View>
{/* 

<View style={{backgroundColor:'orange',flexDirection:'row'}}>
<View>
<View>
<AppText>House Guard</AppText>
<AppText>20% off</AppText>
</View>
<View>
<AppText>Oty</AppText>
<AppText>3{'>'}</AppText>
</View>
<View>
<AppText>20.00</AppText>
</View>
</View>
</View>
</View>
<View style={{backgroundColor:'blue'}}>
<AppText>Save</AppText>
*/}
</View>
);
}

export default Cart;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});