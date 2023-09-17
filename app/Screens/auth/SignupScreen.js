import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons,EvilIcons,Entypo } from '@expo/vector-icons';

import Constants from 'expo-constants';
import AppText from '../../components/AppText';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import AppTextInput from '../../components/AppTextInput';
import Appbutton from '../../components/AppButton';
import AppTextInputPassword from '../../components/AppTextInputPassword';
import { useTheme } from '../../hooks/ThemeContext';

function SignupScreen(props) {
    const {width,height}= useAuth();
    const { theme, toggleTheme } = useTheme();
    console.log(theme.backgroundColor)
return (
<ScrollView contentContainerStyle={[styles.container,{backgroundColor:theme.backgroundColor,height:height+Constants.statusBarHeight}]}>
    <ImageBackground
    source={require('../../assets/images/Rectangle2.png')}
    style={{height:height*0.43,width:width,alignItems:'center'}}>
        <Ionicons name="ios-chevron-back-sharp" size={width*0.08} color={colors.secondary} style={{padding:'1%',backgroundColor:colors.primary,borderRadius:30,alignSelf:'flex-start',marginTop:Constants.statusBarHeight+10,marginLeft:'5%',}} />
        <AppText fontFamily='PoppinsExtraBold' fontSize={width*0.07}>WELCOME <AppText fontSize={width*0.07} color={colors.white} fontFamily='PoppinsExtraBold'>BACK!</AppText></AppText>
        <AppText fontFamily='PoppinsExtraBold'>Great to see you again!</AppText>
    </ImageBackground>
    <View style={{width:'90%',marginTop:'-10%'}}>
        <AppText fontFamily='PoppinsExtraBold' fontSize={width*0.07}>Sign Up</AppText>
        <AppText fontFamily='PoppinsExtraBold'>Looks like you don’t have an account.
Let’s create a new account for 
@joe..tick@gmail.com</AppText>
    </View>
    <View style={{width:'90%',marginTop:'5%'}}> 
        <AppText fontFamily='PoppinsSemiBold'>Name</AppText>
        <AppTextInput placeholder={'christian@gmail.com'}
        borderRadius={10}/>
        <AppText fontFamily='PoppinsSemiBold'>Password</AppText>
        <AppTextInputPassword placeholder={'*****'} padding='2.5%'/>
        <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.035} marginTop='3%'>By selecting Agree and Continue below, I agree to <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.035} color={colors.secondary}>Terms of Service and Privacy Policy.</AppText></AppText>
        <Appbutton text={'Continue'} marginVertical={0} padding='1.5%' Size={width*0.055}
        onPress={()=>toggleTheme()}/>

        

    </View>
</ScrollView>
);
}

export default SignupScreen;
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        // backgroundColor:colors.primary,
        
       },
       googleandapple:{
           backgroundColor:colors.white,flexDirection:'row',justifyContent:'center',alignItems:'center',padding:'3%',borderWidth:1,borderColor:colors.secondary,borderRadius:10
       }
});