import React from 'react';
import { View, StyleSheet } from 'react-native';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';
import AppText from './AppText';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';


function GoBackButton({changeBgColor,goBack,marginLeft}) {
    const {width,height}=useAuth();
    console.log('====================================');
    console.log(goBack);
    console.log('====================================');
return (
<View style={{width:width*0.1,height:width*0.1,backgroundColor:goBack?changeBgColor?colors.primary:colors.secondary:colors.primary,borderRadius:30,justifyContent:'center',alignItems:'center',paddingRight:'1%',alignSelf:'flex-start',marginLeft:marginLeft?marginLeft:'5%'}}>
        <Ionicons name="ios-chevron-back-sharp" size={width*0.08} color={goBack?(changeBgColor?colors.secondary:colors.primary):colors.primary} />
    </View>
);
}

export default GoBackButton;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});