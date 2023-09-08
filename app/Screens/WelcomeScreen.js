import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons,EvilIcons,Entypo } from '@expo/vector-icons';

import Constants from 'expo-constants';
import AppText from '../components/AppText';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';
import AppTextInput from '../components/AppTextInput';
import Appbutton from '../components/AppButton';

function WelcomeScreen(props) {
    const {width,height}= useAuth();
return (
<ScrollView contentContainerStyle={styles.container}>
    <ImageBackground
    source={require('../assets/images/Rectangle2.png')}
    style={{height:height*0.43,width:width,alignItems:'center'}}>
        <Ionicons name="ios-chevron-back-sharp" size={width*0.08} color="black" style={{padding:'1%',backgroundColor:colors.primary,borderRadius:30,alignSelf:'flex-start',marginTop:Constants.statusBarHeight+10,marginLeft:'5%',}} />
        <AppText fontFamily='PoppinsExtraBold' fontSize={width*0.07}>WELCOME <AppText fontSize={width*0.07} color={colors.white} fontFamily='PoppinsExtraBold'>BACK!</AppText></AppText>
        <AppText fontFamily='PoppinsExtraBold'>Great to see you again!</AppText>
    </ImageBackground>
    <View style={{width:'90%'}}> 
        <AppText fontFamily='PoppinsSemiBold'>Email or Mobile Number</AppText>
        <AppTextInput placeholder={'christian@gmail.com'}
        borderRadius={10}/>

        <Appbutton text={'Continue'} marginVertical={0}/>
        <AppText alignSelf='center' fontFamily='PoppinsSemiBold'>Or</AppText>

        <TouchableOpacity style={{backgroundColor:colors.white,flexDirection:'row',justifyContent:'center',alignItems:'center',padding:'3%',borderWidth:1,borderColor:colors.secondary,borderRadius:10}}>
        <EvilIcons name="sc-google-plus" size={width*0.09} color="black" />
            <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.05} > Continue with Google</AppText>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.googleandapple,{marginTop:'5%'}]}>
        <Ionicons name="ios-logo-apple" size={width*0.08} color="black" />
            <AppText fontFamily='PoppinsSemiBold'fontSize={width*0.05} > Continue with Apple</AppText>
        </TouchableOpacity>
        <AppText fontFamily='PoppinsSemiBold' marginTop='5%'>Don’t have an account? <AppText fontFamily='PoppinsSemiBold' color={colors.secondary}>Sign Up</AppText></AppText>
        <AppText fontFamily='PoppinsSemiBold'>Forgot password? </AppText>

        <TouchableOpacity style={{backgroundColor:colors.secondary,flexDirection:'row',justifyContent:'center',alignItems:'center',padding:'3%',borderRadius:10,marginTop:'5%'}}>
        <Entypo name="squared-plus" size={width*0.08} color={colors.white} />
            <AppText fontFamily='PoppinsSemiBold'fontSize={width*0.05} color={colors.white}> Emergency Contacts</AppText>
        </TouchableOpacity>

    </View>
</ScrollView>
);
}

export default WelcomeScreen;
const styles = StyleSheet.create({
container:{
 alignItems:'center',
 backgroundColor:colors.primary
},
googleandapple:{
    backgroundColor:colors.white,flexDirection:'row',justifyContent:'center',alignItems:'center',padding:'3%',borderWidth:1,borderColor:colors.secondary,borderRadius:10
}
});