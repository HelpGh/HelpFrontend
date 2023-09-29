import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';


import AppHeader from '../../components/AppHeader';
import useAuth from '../../auth/useAuth';
import { useTheme } from '../../hooks/ThemeContext';
import AppText from '../../components/AppText';

function MissingPeopleScreen(props) {
    const {theme}=useTheme();
    const {width}=useAuth();
return (
<View style={[styles.container,{backgroundColor:theme.primary}]}>
    <AppHeader title={'Missing People'}/>

    <AppText fontSize={width*0.05} fontFamily='PoppinsSemiBold'>Filter</AppText>
    <View style={{flexDirection:'row',width:width*0.9,justifyContent:'space-between',gap:10}}>
        <View style={{backgroundColor:theme.white,flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row',padding:'2%',borderRadius:5,justifyContent:'space-between'}}>
            <AppText fontSize={width*0.035} fontFamily='PoppinsSemiBold'>Region</AppText>
            <Ionicons name="ios-chevron-down-sharp" size={width*0.06} color={theme.secondary} />
        </View>
        <View style={{backgroundColor:theme.white,flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row',padding:'2%',borderRadius:5,justifyContent:'space-between'}}>
        <AppText fontSize={width*0.035} fontFamily='PoppinsSemiBold'>City</AppText>
            <Ionicons name="ios-chevron-down-sharp" size={width*0.06} color={theme.secondary} />
        </View>
        <View style={{backgroundColor:theme.white,flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row',padding:'2%',borderRadius:5,justifyContent:'space-between'}}>
        <AppText fontSize={width*0.035} fontFamily='PoppinsSemiBold'>Age</AppText>
            <Ionicons name="ios-chevron-down-sharp" size={width*0.06} color={theme.secondary} />
        </View>
        <View style={{backgroundColor:theme.white,flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row',padding:'2%',borderRadius:5,justifyContent:'space-between'}}>
        <AppText fontSize={width*0.035} fontFamily='PoppinsSemiBold'>Gender</AppText>    
            <Ionicons name="ios-chevron-down-sharp" size={width*0.06} color={theme.secondary} />
        </View>
    </View>
    
</View>
);
}

export default MissingPeopleScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center'
}
});