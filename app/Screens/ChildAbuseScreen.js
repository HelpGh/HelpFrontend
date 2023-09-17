import React, { useState } from 'react';
import { View, StyleSheet,Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import AppText from '../components/AppText';
import AppHeader from '../components/AppHeader';
import Constants from 'expo-constants';
import useAuth from '../auth/useAuth';
import AppTextInput from '../components/AppTextInput';
import AppPicker from '../components/AppPicker';
import pickersData from '../config/pickersData';
import AppDatePicker from '../components/AppDatePicker';

import useDateAndTime from '../hooks/useDateAndTime';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import AppImagePicker from '../components/ImagePicker';
import routes from '../navigation/routes';

function ChildAbuseScreen({navigation}) {
    const {width,height}=useAuth();
    const [selectedRegion,setSelectedRegion]=useState(pickersData.Department[0]);
    const [sex,setSex]=useState('male');
    const [clearImage,setClearImage] = useState(false);
    const [ImageUrl, setImageUrl] = useState();

    const OnSelectedItem=(item)=>{
        setSelectedRegion(item)
    }

    const getImageUrl=(url)=>{
        return setImageUrl(url);
      }
    // const {show,date,getDate,getTime,mode}=useDateAndTime();
return (
<ScrollView contentContainerStyle={styles.container}>
    <AppHeader  title={'Child Abuse'} />

    <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.05}>Victim Details</AppText>


    <View style={{width:width*0.9}}>
    <AppText fontFamily='PoppinsSemiBold'>Name*</AppText>
    <AppTextInput placeholder={"John Tick"} padding='1%'/> 
    <AppText fontFamily='PoppinsSemiBold'>Address*</AppText>
    <AppTextInput placeholder={"17 Dawada Street, Nyadalar"} padding='1%'/>
    
    <AppPicker items={pickersData.Department} placeholder={pickersData.Department[0].label} selectedItem={selectedRegion} onSelectedItem={OnSelectedItem} title='Region*' marginTop='0%' width='100%' padding='1.7%'/>
    
    <AppPicker items={pickersData.Department} placeholder={pickersData.Department[0].label} selectedItem={selectedRegion} onSelectedItem={OnSelectedItem} title='City*' marginTop='4%' width='100%' padding='1.7%'/>

    <AppText marginTop='5%' fontFamily='PoppinsSemiBold'>Contact Detail*</AppText>
    <AppTextInput placeholder={"123456789"} padding='1%'/>
    <AppText fontFamily='PoppinsSemiBold'>Age</AppText>
    <AppTextInput placeholder={"00"} padding='1%' width='20%'/>

   
   <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.045}>Someone closer/Trusted Details</AppText>
   <AppText fontFamily='PoppinsSemiBold'>Name*</AppText>
    <AppTextInput placeholder={"John Tick"} padding='1%'/> 
    <AppText marginTop='1%' fontFamily='PoppinsSemiBold'>Contact Detail*</AppText>
    <AppTextInput placeholder={"123456789"} padding='1%'/>

    <AppButton text={"Confirm"} width='40%' alignSelf='flex-end' Size={width*0.04} onPress={()=>{
        navigation.navigate(routes.HOMETAB,{
            screen:routes.CHAT,
            params:{item:''}})
    }}/>


    
    <View style={{height:Constants.statusBarHeight*1.5}}></View>
    </View>
</ScrollView>
);
}

export default ChildAbuseScreen;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
 alignItems:'center',
 backgroundColor:colors.primary,
 marginTop:Constants.statusBarHeight
}
});