import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';

function ViewAll({title='title',...other}) {
    const {width}=useAuth();
return (
<View style={[styles.container,{...other}]}>
        <AppText fontSize={width*0.045} fontFamily='PoppinsSemiBold'>{title}</AppText>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

        <AppText fontSize={width*0.04} fontFamily='PoppinsSemiBold' color={colors.secondary}>View all</AppText>
        <Ionicons name="ios-chevron-forward-sharp" size={width*0.06} color={colors.secondary} />
        </View>
    </View>
);
}

export default ViewAll;
const styles = StyleSheet.create({
container:{
    width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:'10%',marginBottom:'3%'
}
});