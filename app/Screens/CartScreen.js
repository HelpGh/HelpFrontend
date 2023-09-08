import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import Constants from 'expo-constants';
import AppText from '../components/AppText';
import ImageCard from '../components/ImageCard';
import useAuth from '../auth/useAuth';
import Cart from '../components/Cart';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

function CartScreen(props) {
    const {width,height}= useAuth();
return (
<ScrollView contentContainerStyle={styles.container}>
    <AppHeader title={'Cart'}/>

    <View style={{width:'95%',marginTop:'5%'}}>
        <AppText fontFamily='PoppinsSemiBold'>Your Cart: <AppText  color={colors.medium} fontFamily='PoppinsSemiBold'>3 items</AppText></AppText>
        <Cart title='House Guard' amount='₵20.00' image={require('../assets/images/rec/Rectangle63.png')} marginTop='5%'/>
        <Cart title='Cloud Security' amount='₵20.00' image={require('../assets/images/rec/Rectangle74.png')} marginTop='5%'/>
        <Cart title='Car Tracking' amount='₵20.00' image={require('../assets/images/rec/Rectangle77.png')} marginTop='5%'/>
    </View>
    <View style={{width:width,backgroundColor:colors.medium,height:1,marginVertical:'5%'}}></View>

    <View style={{width:'90%'}}>
        <View style={styles.total}>
            <AppText>Subtotal {'(5 items)'}</AppText>
            <AppText fontFamily='PoppinsSemiBold'>₵2,400.00</AppText>
        </View>
        <View style={[styles.total,{marginTop:'3%'}]}>
            <AppText>Est. Taxes</AppText>
            <AppText fontFamily='PoppinsSemiBold'>₵24.00</AppText>
        </View>
        <View style={styles.total}>
            <AppText>Est. Total</AppText>
            <AppText fontFamily='PoppinsSemiBold'>₵2,424.00</AppText>
        </View>

        <AppButton text={'Checkout'} width='50%' alignSelf='center' Size={width*0.04}/>
    </View>
</ScrollView>
);
}

export default CartScreen;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
 alignItems:'center',
 height:'100%',
 marginTop:Constants.statusBarHeight,
 backgroundColor:colors.primary
},
total:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}
});