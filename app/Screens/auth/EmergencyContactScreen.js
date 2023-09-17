import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../../components/AppText';
import useAuth from '../../auth/useAuth';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import colors from '../../config/colors';
import AppButton from '../../components/AppButton';
import routes from '../../navigation/routes';

function EmergencyContactScreen({navigation}) {
    const {width,height}=useAuth();
return (
<View style={styles.container}>
<View style={{width:'90%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:'3%'}}>
    <Ionicons name="ios-chevron-back-sharp" size={width*0.08} color={colors.primary} style={{padding:'0.5%',backgroundColor:colors.secondary,borderRadius:30,}} />
    <AppText fontFamily='PoppinsSemiBold'>Adabraka</AppText>
    <View style={{flexDirection:'row'}}>
    <Ionicons name="ios-search-outline" size={width*0.08} color={colors.secondary} />
    <MaterialCommunityIcons name="bell" size={width*0.08} color={colors.secondary} />
    </View>
    </View>


    <View style={{backgroundColor:colors.secondary,width:width*0.9,borderRadius:20,height:height*0.5,justifyContent:'center',alignItems:'center',marginVertical:'10%'}}>
    <AppText fontFamily='PoppinsSemiBold' color={colors.white}>Adabraka Police Station</AppText>
    <AppButton backgroundColor={colors.white} Color={'#000'} Size={width*0.04} width='80%' text={'0302-221368'}/>
    <AppText fontFamily='PoppinsSemiBold' color={colors.white}>Greater Accra Fire Service</AppText>
    <AppButton backgroundColor={colors.white} Color={'#000'} Size={width*0.04} width='80%' text={'0302-221368'}/>
    <AppText fontFamily='PoppinsSemiBold' color={colors.white}>Ambulance( Adabraka Polyclinic)</AppText>
    <AppButton backgroundColor={colors.white} Color={'#000'} Size={width*0.04} width='80%' text={'0302-221368'}/>
    </View>

    <View style={{width:'90%',alignItems:'center'}}>
        <AppText fontFamily='PoppinsSemiBold'>Helpedful is here to Secure You</AppText>
        <AppButton  width='95%' text={'Login'} padding={width*0.01} Size={width*0.055}
        onPress={()=>navigation.navigate(routes.LOGIN)}/>
    </View>
</View>
);
}

export default EmergencyContactScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center',
 backgroundColor:colors.primary,
 marginTop:Constants.statusBarHeight
}
});