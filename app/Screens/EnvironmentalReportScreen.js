import React from 'react';
import { View, StyleSheet,Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import AppText from '../components/AppText';
import AppHeader from '../components/AppHeader';
import Constants from 'expo-constants';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';
import WhiteCard from '../components/WhiteCard';

function EnvironmentalReportScreen(props) {
    const {width}=useAuth();
return (
<ScrollView contentContainerStyle={styles.container}>
    <AppHeader title={'Child Report'} goBack={false}/>
    <View style={{width:'90%'}}>
    <View style={{flexDirection:'row',alignItems:'center',marginBottom:'5%'}}>
            <Image resizeMode='contain' source={require('../assets/images/man3.png')} style={{marginRight:'5%',width:width*0.18,height:width*0.18,}}/>
    
            <View>
                <AppText fontFamily='PoppinsSemiBold' >Welcome 🙂</AppText>
                <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.054}>Joe Tick</AppText>
                <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.033} color={colors.medium}>Tema, Ghana</AppText>
            </View>
        </View>

        <AppText marginVertical='5%' alignSelf='center' fontFamily='PoppinsSemiBold' fontSize={width*0.06}>Feel Free and Fill Free</AppText>

        <View style={{marginVertical:'3%',width:width*0.9,flexDirection:'row',justifyContent:'space-between'}}>
            <WhiteCard ImageUrl={require('../assets/images/report/Vector4.png')} text='Spoilt Traffic Light'/>
            <WhiteCard ImageUrl={require('../assets/images/report/Vector5.png')} text='Crime'/>
            <WhiteCard ImageUrl={require('../assets/images/report/map_female.png')} text='Female Abuse'/>
        </View>
        <View style={{marginVertical:'3%',width:width*0.9,flexDirection:'row',justifyContent:'space-between'}}>
        <WhiteCard ImageUrl={require('../assets/images/report/Vector3.png')} text='Missing Car'/>
        <WhiteCard ImageUrl={require('../assets/images/report/Vector1.png')} text='Missing Person'/>
        <WhiteCard ImageUrl={require('../assets/images/report/Group.png')} text='Reckless Driving'/>
        </View>
        <View style={{marginVertical:'3%',width:width*0.9,flexDirection:'row',justifyContent:'space-between'}}>
        <WhiteCard ImageUrl={require('../assets/images/report/Vector2.png')} text='Road Block'/>
        <WhiteCard ImageUrl={require('../assets/images/report/Vector6.png')} text='Wanted Person'/>
        <WhiteCard ImageUrl={require('../assets/images/report/Vector.png')} text='Track Me'/>
        </View>
        
    </View>

    <View style={{height:Constants.statusBarHeight*1.5}}></View>
</ScrollView>
);
}

export default EnvironmentalReportScreen;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
 alignItems:'center',
 marginTop:Constants.statusBarHeight,
 backgroundColor:colors.primary
}
});