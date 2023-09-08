import React from 'react';
import { View, StyleSheet,Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import AppText from '../components/AppText';
import AppHeader from '../components/AppHeader';
import Constants from 'expo-constants';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';

function EnvironmentalReportScreen(props) {
    const {width}=useAuth();
return (
<ScrollView contentContainerStyle={styles.container}>
    <AppHeader title={'Child Report'} goBack={false}/>
    <View style={{width:'90%'}}>
    <View style={{flexDirection:'row',alignItems:'center',marginBottom:'5%'}}>
            <Image resizeMode='contain' source={require('../assets/images/man3.png')} style={{marginRight:'5%',width:width*0.18,height:width*0.18,}}/>
    
            <View>
                <AppText fontFamily='PoppinsSemiBold' >Welcome 🙂</AppText>
                <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.054}>Joe Tick</AppText>
                <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.033} color={colors.medium}>Tema, Ghana</AppText>
            </View>
        </View>

        <AppText marginVertical='5%' alignSelf='center' fontFamily='PoppinsSemiBold' fontSize={width*0.06}>Feel Free and Fill Free</AppText>

        <View style={{marginVertical:'3%',width:width*0.9,flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:width*0.27,height:width*0.45,borderRadius:width*0.05,backgroundColor:colors.white}}>
                <Image source={require('../assets/images/report/Vector4.png')}/>
                <AppText textAlign='center' fontFamily='PoppinsSemiBold'>Spoilt Traffic Light</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:width*0.27,height:width*0.45,borderRadius:width*0.05,backgroundColor:colors.white}}>
                <Image source={require('../assets/images/report/Vector5.png')}/>
                <AppText textAlign='center' fontFamily='PoppinsSemiBold'>Crime</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:width*0.27,height:width*0.45,borderRadius:width*0.05,backgroundColor:colors.white}}>
                <Image source={require('../assets/images/report/map_female.png')}/>
               <AppText textAlign='center' fontFamily='PoppinsSemiBold'>Female Abuse</AppText>
            </TouchableOpacity>
        </View>
        <View style={{marginVertical:'3%',width:width*0.9,flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:width*0.27,height:width*0.45,borderRadius:width*0.05,backgroundColor:colors.white}}>
                <Image source={require('../assets/images/report/Vector3.png')}/>
                <AppText textAlign='center' fontFamily='PoppinsSemiBold'>Missing Car</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:width*0.27,height:width*0.45,borderRadius:width*0.05,backgroundColor:colors.white}}>
                <Image source={require('../assets/images/report/Vector1.png')}/>
                <AppText textAlign='center' fontFamily='PoppinsSemiBold'>Missing Person</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:width*0.27,height:width*0.45,borderRadius:width*0.05,backgroundColor:colors.white}}>
                <Image source={require('../assets/images/report/Group.png')}/>
               <AppText textAlign='center' fontFamily='PoppinsSemiBold'>Reckless Driving</AppText>
            </TouchableOpacity>
        </View>
        <View style={{marginVertical:'3%',width:width*0.9,flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:width*0.27,height:width*0.45,borderRadius:width*0.05,backgroundColor:colors.white}}>
                <Image source={require('../assets/images/report/Vector2.png')}/>
                <AppText textAlign='center' fontFamily='PoppinsSemiBold'>Road Block</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:width*0.27,height:width*0.45,borderRadius:width*0.05,backgroundColor:colors.white}}>
                <Image source={require('../assets/images/report/Vector6.png')}/>
                <AppText textAlign='center' fontFamily='PoppinsSemiBold'>Wanted Person</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:width*0.27,height:width*0.45,borderRadius:width*0.05,backgroundColor:colors.white}}>
                <Image source={require('../assets/images/report/Vector.png')}/>
               <AppText textAlign='center' fontFamily='PoppinsSemiBold'>Track Me</AppText>
            </TouchableOpacity>
        </View>
        
    </View>

    <View style={{height:Constants.statusBarHeight*1.5}}></View>
</ScrollView>
);
}

export default EnvironmentalReportScreen;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
 alignItems:'center',
 marginTop:Constants.statusBarHeight,
 backgroundColor:colors.primary
}
});