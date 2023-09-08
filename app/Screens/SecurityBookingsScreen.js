import React from 'react';
import { View, StyleSheet,Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import AppText from '../components/AppText';
import AppHeader from '../components/AppHeader';
import Constants from 'expo-constants';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';
import ImageCard from '../components/ImageCard';
import ViewAll from '../components/ViewAll';

function SecurityBookingsScreen(props) {
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

        <AppText marginVertical='2%' alignSelf='center' fontFamily='PoppinsSemiBold' fontSize={width*0.045}>Let us be your Trusted Security Plug</AppText>

    
    <ViewAll marginBottom='0%' title='Security Guard'/>

    <View style={{marginVertical:'3%',width:width*0.9,flexDirection:'row',justifyContent:'space-between'}}>
            <ImageCard title={'House Guard'} image={require('../assets/images/rec/Rectangle63.png')} scaleX={0.55} scaleY={0.7}/>
            <ImageCard title={'Office Guard'} image={require('../assets/images/rec/Rectangle71.png')} scaleX={0.55} scaleY={0.7}/>
            <ImageCard title={'Occasion Guard'} image={require('../assets/images/rec/Rectangle72.png')} scaleX={0.55} scaleY={0.7}/>
    </View>


    <ViewAll marginBottom='0%' title='Security Installation'/>

    <View style={{marginVertical:'3%',width:width*0.9,flexDirection:'row',justifyContent:'space-between'}}>
            <ImageCard title={'CCTV Installation'} image={require('../assets/images/rec/Rectangle26.png')} scaleX={0.55} scaleY={0.7}/>
            <ImageCard title={'Electic Fence'} image={require('../assets/images/rec/Rectangle75.png')} scaleX={0.55} scaleY={0.7}/>
            <ImageCard title={'Car Tracking'} image={require('../assets/images/rec/Rectangle77.png')} scaleX={0.55} scaleY={0.7}/>
    </View>
    
    <ViewAll marginBottom='0%' title='Cyber Security'/>

    <View style={{marginVertical:'3%',width:width*0.9,flexDirection:'row',justifyContent:'space-between'}}>
            <ImageCard title={'Network Security'} image={require('../assets/images/rec/Rectangle74.png')} scaleX={0.55} scaleY={0.7}/>
            <ImageCard title={'Cloud Security'} image={require('../assets/images/rec/Rectangle76.png')} scaleX={0.55} scaleY={0.7}/>
            <ImageCard title={'Application Security'} image={require('../assets/images/rec/Rectangle78.png')} scaleX={0.55} scaleY={0.7}/>
    </View>

        
        
    </View>

    <View style={{height:Constants.statusBarHeight*1.5}}></View>
</ScrollView>
);
}

export default SecurityBookingsScreen;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
 alignItems:'center',
 marginTop:Constants.statusBarHeight,
 backgroundColor:colors.primary
}
});