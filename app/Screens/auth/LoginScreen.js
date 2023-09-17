import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';
import { Ionicons,EvilIcons,Entypo } from '@expo/vector-icons';

import Constants from 'expo-constants';
import AppText from '../../components/AppText';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import Appbutton from '../../components/AppButton';
import AppTextInputPassword from '../../components/AppTextInputPassword';
import routes from '../../navigation/routes';
import { useTheme } from '../../hooks/ThemeContext';

function LoginScreen({navigation}) {
    const {width,height}= useAuth();
    const {theme}=useTheme();
return (
<ScrollView contentContainerStyle={[styles.container,{height:height+Constants.statusBarHeight,backgroundColor:theme.backgroundColor}]}>
    <ImageBackground
    source={require('../../assets/images/Rectangle2.png')}
    style={{height:height*0.43,width:width,alignItems:'center'}}>
        <Ionicons name="ios-chevron-back-sharp" size={width*0.08} color={colors.secondary} style={{padding:'1%',backgroundColor:colors.primary,borderRadius:30,alignSelf:'flex-start',marginTop:Constants.statusBarHeight+10,marginLeft:'5%',marginBottom:'5%'}} onPress={()=>navigation.goBack()} />
        <AppText fontFamily='PoppinsExtraBold' fontSize={width*0.065}>REPORT AND FEEL <AppText fontSize={width*0.065} color={colors.white} fontFamily='PoppinsExtraBold'>SECURED!</AppText></AppText>
        {/* <AppText fontFamily='PoppinsExtraBold'>Great to see you again!</AppText> */}
    </ImageBackground>
    <View style={{width:'90%',}}>
        <AppText fontFamily='PoppinsExtraBold' fontSize={width*0.07}>Log In</AppText>
        <View style={{flexDirection:'row'}}>
            <Image source={require('../../assets/images/man.png')} style={{marginRight:'5%'}}/>
            <View>
                <AppText fontFamily='PoppinsSemiBold'>Joe Tick</AppText>
                <AppText fontFamily='PoppinsSemiBold'>joe..tick@gmail.com</AppText>
            </View>
        </View>
    </View>
    <View style={{width:'90%',marginTop:'5%'}}> 
        <AppText fontFamily='PoppinsSemiBold'>Password</AppText>
        <AppTextInputPassword placeholder={'*****'} padding='2.5%'/>
        <Appbutton text={'Continue'} marginVertical={0} padding='1.5%' Size={width*0.055}/>

        <AppText fontFamily='PoppinsSemiBold' marginTop='10%' fontSize={width*0.04} color={colors.secondary}
        onPress={()=>navigation.navigate(routes.FORGETPASSWORD)}>Forgot your password?</AppText>
        <AppText fontFamily='PoppinsSemiBold' marginTop='10%' fontSize={width*0.04} 
        onPress={()=>navigation.navigate(routes.SIGNUP)}>Don't have an account?<AppText color={colors.secondary} fontFamily='PoppinsSemiBold' fontSize={width*0.045}> SignUp</AppText></AppText>
        

    </View>
</ScrollView>
);
}

export default LoginScreen;
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        // backgroundColor:colors.primary,
        height:'100%'
       },
       googleandapple:{
           backgroundColor:colors.white,flexDirection:'row',justifyContent:'center',alignItems:'center',padding:'3%',borderWidth:1,borderColor:colors.secondary,borderRadius:10
       }
});