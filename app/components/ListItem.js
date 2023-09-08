import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import useAuth from '../auth/useAuth';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function ListItem({Icon,title='title'}) {
    const {width,height}= useAuth();
return (
<TouchableOpacity style={{width:'90%',flexDirection:'row',alignItems:'center',marginVertical:'2%'}}>
    {Icon}
        <AppText marginLeft={'5%'} flex={1} fontFamily='PoppinsSemiBold'>{title}</AppText>
        <View style={{width:width*0.1,height:width*0.1,backgroundColor:colors.secondary,borderRadius:30,justifyContent:'center',alignItems:'center',paddingRight:'1%',marginLeft:'5%'}}>
        <Ionicons name="ios-chevron-forward-sharp" style={{marginLeft:'10%'}} size={width*0.08} color={colors.primary} />
    </View>
    </TouchableOpacity>
);
}

export default ListItem;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});