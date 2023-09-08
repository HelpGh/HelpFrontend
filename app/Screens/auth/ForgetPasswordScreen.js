import React from 'react';
import { View, StyleSheet,Image,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppText from '../../components/AppText';
import { Ionicons } from '@expo/vector-icons';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';


function ForgetPasswordScreen(props) {
    const {width,height}=useAuth();
return (
<ScrollView contentContainerStyle={styles.container}>
    <View style={{width:width*0.1,height:width*0.1,backgroundColor:colors.secondary,borderRadius:30,justifyContent:'center',alignItems:'center',paddingRight:'1%',alignSelf:'flex-start',marginLeft:'5%'}}>
        <Ionicons name="ios-chevron-back-sharp" size={width*0.08} color={colors.primary} />
    </View>

    <Image style={{width:width*0.9,height:width*0.7}} resizeMode='contain' source={require('../../assets/images/undraw_Forgot_password_re_hxwm.png')}/>
    <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.05}>Forgot password?</AppText>
    <AppText color={colors.medium}>No worries, we’ll send you reset instructions.</AppText>
    <AppTextInput marginTop='5%' borderRadius={width*0.01} width='90%'  placeholder={'Enter email or mobile number'}/>
    <AppButton width='90%' text={'Reset Password'}/>

    <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.045}>Remember Password? <AppText fontFamily='PoppinsSemiBold' color={colors.secondary} fontSize={width*0.045}>Login</AppText></AppText>
    
</ScrollView>
);
}

export default ForgetPasswordScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center',
 marginTop:Constants.statusBarHeight,
 backgroundColor:colors.primary
}
});