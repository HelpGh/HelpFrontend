import React from 'react';
import { View, StyleSheet } from 'react-native';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';
import AppText from './AppText';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import GoBackButton from './GoBackButton';


function AppHeader({title,changeBgColor=false,goBack=true,marginLeft='0%'}) {
    const {width,height}=useAuth();
return (
<View style={{width:'90%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:'3%'}}>
    <GoBackButton marginLeft={marginLeft} changeBgColor={changeBgColor} goBack={goBack}/>
    <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.05}>{title}</AppText>
    <View style={{flexDirection:'row'}}>
    <Ionicons name="ios-search-outline" size={width*0.08} color={colors.secondary} />
    <MaterialCommunityIcons name="bell" size={width*0.08} color={colors.secondary} />
    </View>
    </View>
);
}

export default AppHeader;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});