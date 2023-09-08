import React from 'react';
import { View, StyleSheet, ScrollView,Image } from 'react-native';
import AppText from './AppText';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';
import EmojiCard from './EmojiCard';

const data=[
    {id:1,image:require('../assets/images/box/material-symbols_auto-stories-sharp.png'),title:'Shared Stories',number:36},
    {id:2,image:require('../assets/images/box/ic_twotone-traffic.png'),title:'Traffic Alert',number:7},
    {id:3,image:require('../assets/images/box/arcticons_scam-shield.png'),title:'Security Alert',number:23},
]

function AppScrowEmojis(props) {
    const {width,height}=useAuth()
return (
<ScrollView horizontal contentContainerStyle={styles.container}>

    {data.map((item)=>(
        <EmojiCard key={item.id} image={item.image} title={item.title} number={item.number}/>
))}
</ScrollView>
);
}

export default AppScrowEmojis;
const styles = StyleSheet.create({
container:{
 alignItems:'center',
 gap:10,
 paddingHorizontal:'2%'
}
});