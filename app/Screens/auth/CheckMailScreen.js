import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';
import AppText from '../../components/AppText';
import { Ionicons } from '@expo/vector-icons';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import { useTheme } from '../../hooks/ThemeContext';


function CheckMailScreen(props) {
    const {width,height}=useAuth();
    const {theme}=useTheme();
return (
<View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
    <View style={{width:width*0.1,height:width*0.1,backgroundColor:colors.secondary,borderRadius:30,justifyContent:'center',alignItems:'center',paddingRight:'1%',alignSelf:'flex-start',marginLeft:'5%'}}>
<Ionicons name="ios-chevron-back-sharp" size={width*0.08} color={colors.primary} />
    </View>
    <Image style={{width:width*0.7,height:width*0.7}} source={require('../../assets/images/undraw_Mobile_inbox_re_ciwq.png')}/>
    <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.05}>Check your mail</AppText>
    <AppText color={colors.medium}>Enter the verification code we just sent to</AppText>
    <AppText color={colors.secondary}>joe..tick@gmail.com</AppText>
    <AppTextInput marginTop='5%' borderRadius={width*0.01} width='90%'  placeholder={'Enter email or mobile number'}/>
    <AppButton width='90%' text={'Continue'}/>

    <AppText fontFamily='PoppinsSemiBold'>Didn't receive code? <AppText fontFamily='PoppinsSemiBold' color={colors.secondary}>Resend</AppText></AppText>
    
</View>
);
}

export default CheckMailScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center',
}
});




