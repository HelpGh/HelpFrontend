import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import AppText from '../components/AppText';
import { Ionicons,MaterialCommunityIcons,Octicons,MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';
import AppHeader from '../components/AppHeader';
import AppButton from '../components/AppButton';
import ListItem from '../components/ListItem';
import routes from '../navigation/routes';

function AccountScreen({navigation}) {
    const {width,height}=useAuth();
return (
<View style={styles.container}>
    <AppHeader title={'Profile'} goBack={false} />

    <Image style={{}} source={require('../assets/images/man3.png')}/>
    <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.06}>John Tick</AppText>
    <AppText fontFamily='PoppinsSemiBold' color={colors.medium}>Tema, Ghana.</AppText>
    <AppButton text={'Edit Profile'} width='40%' Size={width*0.045}
    onPress={()=>{
        navigation.navigate(routes.ACCOUNTTAB,{
            screen:routes.EDIT_PROFILE,
            params:{item:''}})
    }}/>
    
    <ListItem Icon={<Ionicons name="ios-settings" size={width*0.09} color={colors.secondary}/>} title='Settings'/>
    <ListItem Icon={<MaterialCommunityIcons name="cash-multiple" size={width*0.09} color={colors.secondary} />} title='Billing Details'/>
    <ListItem Icon={<MaterialCommunityIcons name="clipboard-list" size={width*0.09} color={colors.secondary} />} title='Order History'/>
    <ListItem Icon={<MaterialCommunityIcons name="police-badge" size={width*0.09} color={colors.secondary} />} title='Report History'/>
    <ListItem Icon={<Octicons name="file-directory" size={width*0.09} color={colors.secondary} />} title='Saved Files'/>
    <ListItem Icon={<MaterialIcons name="support-agent" size={width*0.09} color={colors.secondary} />} title='COntact Support'/>
    <ListItem Icon={<MaterialCommunityIcons name="logout" size={width*0.09} color={colors.secondary} />} title='Log Out'/>
    
    
</View>
);
}

export default AccountScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
 alignItems:'center',
 backgroundColor:colors.primary
}
});