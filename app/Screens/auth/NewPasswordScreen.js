import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';
import AppText from '../../components/AppText';
import { Ionicons } from '@expo/vector-icons';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import AppButton from '../../components/AppButton';
import AppTextInputPassword from '../../components/AppTextInputPassword';


function NewPasswordScreen(props) {
    const {width,height}=useAuth();
return (
<View style={styles.container}>
    <View style={{width:width*0.1,height:width*0.1,backgroundColor:colors.secondary,borderRadius:30,justifyContent:'center',alignItems:'center',paddingRight:'1%',alignSelf:'flex-start',marginLeft:'5%'}}>
<Ionicons name="ios-chevron-back-sharp" size={width*0.08} color={colors.primary} />
    </View>
    <Image style={{width:width*0.7,height:width*0.7}} source={require('../../assets/images/undraw_Authentication_re_svpt.png')}/>
    <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.05}>Forgot password?</AppText>
    <AppText color={colors.medium}>The password must be different than before.</AppText>
    
    <AppTextInputPassword marginTop='5%' borderRadius={width*0.01} width='90%'  placeholder={'New Password'}/>
    <AppTextInputPassword marginTop='1%' borderRadius={width*0.01} width='90%'  placeholder={'Confirm Password'}/>
    <AppButton width='90%' text={'Continue'}/>
    
</View>
);
}

export default NewPasswordScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center',
 marginTop:Constants.statusBarHeight,
 backgroundColor:colors.primary
}
});

