import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import Constants from 'expo-constants';
import AppTextInput from '../components/AppTextInput';
import AppPicker from '../components/AppPicker';
import pickersData from '../config/pickersData';
import useAuth from '../auth/useAuth';
import AppText from '../components/AppText';
import AppDatePicker from '../components/AppDatePicker';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function SecurityBookingsFormScreen(props) {
    const [selectedRegion,setSelectedRegion]=useState(pickersData.Category[0]);
    const {width,height}=useAuth();

    const OnSelectedItem=(item)=>{
        setSelectedRegion(item)
    }
return (
<ScrollView contentContainerStyle={styles.container}>
    <AppHeader title={'Security Bookings'}/>

    <View style={{width:width*0.9,marginTop:'5%'}}>
        <AppPicker items={pickersData.Category} onSelectedItem={OnSelectedItem} selectedItem={selectedRegion} title='Category' width='100%'/>

    <AppText marginTop='5%' fontFamily='PoppinsSemiBold'>Number of Guards</AppText>
        <AppTextInput placeholder={'4'}/> 
    <AppText fontFamily='PoppinsSemiBold'>Email Address</AppText>
        <AppTextInput placeholder={'jick@gmail.com'}/> 
    <AppText fontFamily='PoppinsSemiBold'>Contact</AppText>
        <AppTextInput placeholder={'0553999247'}/> 
    
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:'5%'}}>
        <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.04}>Starting Date</AppText>
        <AppDatePicker scaleX={0.95} scaleT={0.9}/>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:'5%'}}>
        <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.04}>Ending Date</AppText>
        <AppDatePicker scaleX={0.95} scaleT={0.9}/>
    </View>
    <AppText fontFamily='PoppinsSemiBold'>Brief Description</AppText>
        <AppTextInput placeholder={'Write brief description'}/> 
    </View>

    <AppButton width={'50%'} Size={width*0.05} text={'Add to cart'}/>
    <AppButton width={'50%'} Size={width*0.05} text={'Checkout'}/>

    <View style={{height:Constants.statusBarHeight*1.5}}></View>
</ScrollView>
);
}

export default SecurityBookingsFormScreen;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
 alignItems:'center',
 marginTop:Constants.statusBarHeight,
 backgroundColor:colors.primary
}
});