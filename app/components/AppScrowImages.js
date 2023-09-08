import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import ImageCard from './ImageCard';

const data=[
    {id:1,image:require('../assets/images/rec/Rectangle26.png'),title:'House Guard'},
    {id:2,image:require('../assets/images/rec/Rectangle63.png'),title:'Office Guard'},
    {id:3,image:require('../assets/images/rec/Rectangle72.png'),title:'Occasion Guard'},
]

function AppScrowImages({scaleX=1,scaleY=1}) {
    // const {width,height}=useAuth()
return (
<ScrollView horizontal contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>

 {data.map((item)=>(
<ImageCard key={item.id} image={item.image} title={item.title} scaleX={scaleX} scaleY={scaleY}/>

))}

</ScrollView>
);
}

export default AppScrowImages;
const styles = StyleSheet.create({
container:{
 alignItems:'center',
 gap:20,
 paddingHorizontal:'2%'
}
});










{/* <View style={{width:width*0.3,height:height*0.2,alignItems:'center'}}>
<Image style={{width:'100%',height:height*0.17,borderRadius:width*0.05}} source={require('../assets/images/Rectangle26.png')}/>
<AppText fontFamily='PoppinsSemiBold' fontSize={width*0.035}>House Guard</AppText>
</View>
<View style={{width:width*0.3,height:height*0.2,alignItems:'center'}}>
<Image style={{width:'100%',height:height*0.17,borderRadius:width*0.05}} source={require('../assets/images/Rectangle26.png')}/>
<AppText fontFamily='PoppinsSemiBold' fontSize={width*0.035}>House Guard</AppText>
</View>
<View style={{width:width*0.3,height:height*0.2,alignItems:'center'}}>
<Image style={{width:'100%',height:height*0.17,borderRadius:width*0.05}} source={require('../assets/images/Rectangle26.png')}/>
<AppText fontFamily='PoppinsSemiBold' fontSize={width*0.035}>House Guard</AppText>
</View> */}