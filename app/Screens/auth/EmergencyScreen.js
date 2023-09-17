import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Ionicons,EvilIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import AppText from '../../components/AppText';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import AppPicker from '../../components/AppPicker';
import pickersData from '../../config/pickersData';
import AppHeader from '../../components/AppHeader';
import routes from '../../navigation/routes';

function EmergencyScreen({navigation}) {
    const {width,height}=useAuth();
    const [selectedItem,setSelectedItem]=useState(pickersData.Department[0]);
    const [selectedRegion,setSelectedRegion]=useState(pickersData.Region[0]);


    const OnSelectedItem=(item)=>{
        setSelectedItem(item)
    }
    const OnSelectedRegion=(item)=>{
        setSelectedRegion(item)
    }

return (
<ScrollView contentContainerStyle={styles.container}>
    {/* <View style={{width:'90%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:'3%'}}>
    <Ionicons name="ios-chevron-back-sharp" size={width*0.08} color={colors.primary} style={{padding:'0.5%',backgroundColor:colors.secondary,borderRadius:30,}} />
    <AppText fontFamily='PoppinsSemiBold'>Emergency Contacts</AppText>
    <View style={{flexDirection:'row'}}>
    <Ionicons name="ios-search-outline" size={width*0.08} color={colors.secondary} />
    <MaterialCommunityIcons name="bell" size={width*0.08} color={colors.secondary} />
    </View>
    </View> */}
    <AppHeader title={'Emergency Contacts'}/>

    <ImageBackground
    source={require('../../assets/images/Rectangle80.png')}
    resizeMode='contain'
    style={{width:width*0.9,height:height*0.4,alignItems:'center',marginBottom:'5%'}}>
        <View style={{width:'85%',marginTop:'3%'}}>

        <AppText fontFamily='PoppinsSemiBold'fontSize={width*0.03} marginTop='2%' color={colors.white}>Ghana Police</AppText>
        <AppButton marginVertical={0} backgroundColor={colors.white} Size={width*0.033} Color='#000' text={'191 (Toll-free for all Networks)'}/>
        <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.03} marginTop='2%' color={colors.white}>Fire Service</AppText>
        <AppButton marginVertical={0} backgroundColor={colors.white} Size={width*0.033} Color='#000' text={'192 or 999 (Toll-free for all Networks)'}/>
        <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.03} marginTop='2%' color={colors.white}>Ambulance</AppText>
        <AppButton marginVertical={0} backgroundColor={colors.white} Size={width*0.033} Color='#000' text={'193'}/>
        </View>
    </ImageBackground>

        <AppText fontSize={width*0.03} fontFamily='PoppinsSemiBold'>Search for your locality Emergency Contact here</AppText>
        <AppPicker items={pickersData.Department} placeholder={pickersData.Department[0].label} selectedItem={selectedItem} onSelectedItem={OnSelectedItem} title='Department' marginTop='3%'/>
        
        <AppPicker items={pickersData.Region} placeholder={pickersData.Region[0].label} selectedItem={selectedRegion} onSelectedItem={OnSelectedRegion} title='Region' marginTop='3%'/>
        <AppPicker items={pickersData.Region} placeholder={pickersData.Region[0].label} selectedItem={selectedRegion} onSelectedItem={OnSelectedRegion} title='Region' marginTop='3%'/>

        <AppButton text={'Search'} width='50%' Size={width*0.045} onPress={()=>navigation.navigate(routes.EMERGENCYCONTACTS)}/>
</ScrollView>
);
}

export default EmergencyScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center',
 marginTop:Constants.statusBarHeight,
 backgroundColor:colors.primary
}
});