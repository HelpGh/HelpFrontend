import React from 'react';
import { View, StyleSheet, ImageBackground,Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons,EvilIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import AppText from '../../components/AppText';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import AppScrowEmojis from '../../components/AppScrowEmojis';
import AppScrowImages from '../../components/AppScrowImages';
import ViewAll from '../../components/ViewAll';
import routes from '../../navigation/routes';

function HomeScreen({navigation}) {
    const {width,height} = useAuth();
return (
<ScrollView contentContainerStyle={styles.container}>
    <ImageBackground
    source={require('../../assets/images/Rectangle23.png')}
    style={{width:width,height:height*0.4}}>
        <View style={{flexDirection:'row',marginTop:'10%',justifyContent:'space-between',alignItems:'center',width:'90%',alignSelf:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/images/man2.png')}/>
            <View style={{marginLeft:'5%'}}>
                <AppText fontFamily='PoppinsSemiBold' color={colors.white}>Hi Joe,</AppText>
                <AppText fontFamily='PoppinsSemiBold' color={colors.white}>Welcome back!</AppText>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <Ionicons name="ios-search-outline" size={width*0.08} color={colors.primary} />
            <MaterialCommunityIcons name="bell" size={width*0.08} color={colors.primary} />
            </View>
        </View>


        <View style={{width:'95%',height:height*0.3,backgroundColor:colors.primary,alignSelf:'center',position:'absolute',top:'40%',borderRadius:20,flexWrap:'wrap',flexDirection:'row',overflow:'hidden',gap:0.7}}>
            <TouchableOpacity
             style={styles.box}
             onPress={()=>{
                navigation.navigate(routes.HOMETAB,{
                    screen:routes.CHILD_REPORT,
                    params:{item:''}})
            }}>
                <Image source={require('../../assets/images/box/healthicons_child-care.png')}/>
                <AppText fontSize={width*0.035} fontFamily='PoppinsSemiBold' textAlign='center'>Child Report</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}
            onPress={()=>{
                navigation.navigate(routes.HOMETAB,{
                    screen:routes.ENVIRONMENTAL_REPORT,
                    params:{item:''}})
            }}>
            <Image source={require('../../assets/images/box/env.png')}/>
                <AppText fontSize={width*0.035} fontFamily='PoppinsSemiBold' textAlign='center'>Environmental Report</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}
             onPress={()=>{
                navigation.navigate(routes.HOMETAB,{
                    screen:routes.SAFETY,
                    params:{item:''}})
            }}>
            <Image source={require('../../assets/images/box/tabler_folders.png')}/>
                <AppText fontSize={width*0.035} fontFamily='PoppinsSemiBold' textAlign='center'>Safety Folder</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}
            onPress={()=>{
                navigation.navigate(routes.HOMETAB,{
                    screen:routes.SECURITY_BOOKINGS,
                    params:{item:''}})
            }}>
            <Image source={require('../../assets/images/box/Vector.png')}/>
                <AppText fontSize={width*0.035} fontFamily='PoppinsSemiBold' textAlign='center'>Security Bookings</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}
            onPress={()=>{
                navigation.navigate(routes.HOMETAB,{
                    screen:routes.MISSING_PEOPLE,
                    params:{item:''}})
            }}>
            <Image source={require('../../assets/images/box/twemoji_person.png')}/>
                <AppText fontSize={width*0.035} fontFamily='PoppinsSemiBold' textAlign='center'>Missing Person</AppText>
            </TouchableOpacity>
            <View style={styles.box}>
            <Image source={require('../../assets/images/box/fluent-emoji-flat_person-light.png')}/>
                <AppText fontSize={width*0.035} fontFamily='PoppinsSemiBold' textAlign='center'>Wanted Person</AppText>
            </View>
        </View>
    </ImageBackground>
    <ViewAll title='Updates' marginTop='20%' width={'95%'}/>
    <AppScrowEmojis/>
    
    <ViewAll title='Popular Bookings' marginTop='5%' width={'95%'}/>
    <AppScrowImages/>
    <View style={{width:width,height:Constants.statusBarHeight*1.5}}></View>
</ScrollView>
);
}

export default HomeScreen;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
 alignItems:'center',
 backgroundColor:colors.primary,
//  paddingBottom:Constants.statusBarHeight
},
box:{
    width:'33.17%',
    height:'50%',
    backgroundColor:colors.white,
    justifyContent:'center',
    alignItems:'center'
}
});