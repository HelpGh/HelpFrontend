import React, { useState } from 'react';
import { View, StyleSheet,Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import AppText from '../../components/AppText';
import AppHeader from '../../components/AppHeader';
import Constants from 'expo-constants';
import useAuth from '../../auth/useAuth';
import AppTextInput from '../../components/AppTextInput';
import AppPicker from '../../components/AppPicker';
import pickersData from '../../config/pickersData';
import AppDatePicker from '../../components/AppDatePicker';

import useDateAndTime from '../../hooks/useDateAndTime';
import colors from '../../config/colors';
import AppButton from '../../components/AppButton';
import AppImagePicker from '../../components/ImagePicker';

function EditProfileScreen(props) {
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
    <AppHeader  title={'Edit Profile'} />

    {/* <View style={{backgroundColor:'red',width:width*0.3,height:width*0.3,justifyContent:'center',alignItems:'center'}}>
    <Image style={{}} source={require('../../assets/images/man3.png')}/>
    <MaterialCommunityIcons style={{position:'absolute',top:'65%',right:'5%'}} name="camera-plus" size={width*0.08} color="black" />
    </View> */}
    <AppImagePicker getImageUrl={getImageUrl} clearImage={clearImage}/>

    <View style={{width:width*0.9}}>
    <AppText fontFamily='PoppinsSemiBold'>Full Name*</AppText>
    <AppTextInput placeholder={"John Tick"} padding='1%'/> 
    <AppText fontFamily='PoppinsSemiBold'>Address*</AppText>
    <AppTextInput placeholder={"17 Dawada Street, Nyadalar"} padding='1%'/>
    
    <AppPicker items={pickersData.Department} placeholder={pickersData.Department[0].label} selectedItem={selectedRegion} onSelectedItem={OnSelectedItem} title='Country*' marginTop='0%' width='100%' padding='1.7%'/>
    
    <AppPicker items={pickersData.Department} placeholder={pickersData.Department[0].label} selectedItem={selectedRegion} onSelectedItem={OnSelectedItem} title='City*' marginTop='4%' width='100%' padding='1.7%'/>

    <AppText marginTop='5%' fontFamily='PoppinsSemiBold'>Mobile Number*</AppText>
    <AppTextInput placeholder={"123456789"} padding='1%'/>
    <AppText fontFamily='PoppinsSemiBold'>Email*</AppText>
    <AppTextInput placeholder={"christian@gmail.com"} padding='1%'/>

    {/* Date Of Birth */}
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:'5%'}}>
        <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.04}>Date of Birth</AppText>
        <AppDatePicker scaleX={0.95} scaleT={0.9}/>
    </View>

    <View style={{width:width*0.5,flexDirection:'row',alignSelf:'center'}}>
        <TouchableOpacity style={{flex:2,alignItems:'center',}}
        onPress={()=>setSex('male')}>
        <Ionicons name="ios-man" size={width*0.1} color={sex=='male'?colors.secondary:'#000'} />
            <AppText fontFamily='PoppinsSemiBold' color={sex=='male'?colors.secondary:'#000'}>Male</AppText>
        </TouchableOpacity>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <AppText fontFamily='PoppinsSemiBold'>Or</AppText>
        </View>
        <TouchableOpacity style={{flex:2,alignItems:'center'}}
        onPress={()=>setSex('female')}>
        <Ionicons name="ios-woman" size={width*0.1} color={sex=='female'?colors.secondary:'#000'} />
            <AppText fontFamily='PoppinsSemiBold' color={sex=='female'?colors.secondary:'#000'}>Female</AppText>
        </TouchableOpacity>
    </View>

    <AppButton text={"Confirm"} width='50%' alignSelf='center' Size={width*0.05}/>


    
    <View style={{height:Constants.statusBarHeight*1.5}}></View>
    </View>
</ScrollView>
);
}

export default EditProfileScreen;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
 alignItems:'center',
 backgroundColor:colors.primary,
}
});