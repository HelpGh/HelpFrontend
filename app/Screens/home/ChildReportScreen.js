import React from 'react';
import { View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import AppText from '../../components/AppText';
import AppHeader from '../../components/AppHeader';
import Constants from 'expo-constants';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import routes from '../../navigation/routes';
import WhiteCard from '../../components/WhiteCard';

function ChildReportScreen({navigation}) {
    const {width}=useAuth();
return (
<View style={styles.container}>
    <AppHeader title={'Child Reportss'} goBack={false}/>
    <View style={{width:'90%'}}>
    <View style={{flexDirection:'row',alignItems:'center',marginBottom:'5%'}}>
            <Image resizeMode='contain' source={require('../../assets/images/man3.png')} style={{marginRight:'5%',width:width*0.18,height:width*0.18,}}/>
    
            <View>
                <AppText fontFamily='PoppinsSemiBold' >Welcome 🙂</AppText>
                <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.054}>Joe Tick</AppText>
                <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.033} color={colors.medium}>Tema, Ghana</AppText>
            </View>
        </View>

        <AppText marginVertical='5%' alignSelf='center' fontFamily='PoppinsSemiBold' fontSize={width*0.06}>Report and save a life</AppText>

        <View style={{marginVertical:'5%',width:width*0.9,flexDirection:'row',justifyContent:'space-between'}}>
            <WhiteCard ImageUrl={require('../../assets/images/box/Vector4.png')} text='Child Abuse' ScaleX={1.5} ScaleY={1.3} ImageSize={1.5}
            onPress={()=>{
                navigation.navigate(routes.HOMETAB,{
                    screen:routes.CHILD_ABUSE,
                    params:{item:''}})
            }}/>
            <WhiteCard ImageUrl={require('../../assets/images/box/mdi_man-child.png')} text='Child Labour' ScaleX={1.5} ScaleY={1.3} ImageSize={1.5}/>
        </View>
        <View style={{marginVertical:'5%',width:width*0.9,flexDirection:'row',justifyContent:'space-between'}}>
            <WhiteCard ImageUrl={require('../../assets/images/box/Vector5.png')} text='Child Trafficking' ScaleX={1.5} ScaleY={1.3} ImageSize={1.5}/>
            <WhiteCard ImageUrl={require('../../assets/images/box/vaadin_child.png')} text='Missing Child' ScaleX={1.5} ScaleY={1.3} ImageSize={1.5}/>
        </View>

    </View>
</View>
);
}

export default ChildReportScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center',
 marginTop:Constants.statusBarHeight,
 backgroundColor:colors.primary
}
});