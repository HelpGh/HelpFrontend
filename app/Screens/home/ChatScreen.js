import React from 'react';
import { View, StyleSheet, ScrollView,TextInput, FlatList } from 'react-native';
import { MaterialCommunityIcons,FontAwesome,FontAwesome5 } from '@expo/vector-icons';


import AppHeader from '../../components/AppHeader';
import Constants from 'expo-constants';
import useAuth from '../../auth/useAuth';
import colors from '../../config/colors';
import AppText from '../../components/AppText';
import AppTextInput from '../../components/AppTextInput';


const data = [
    {id:1,message:`Incident: A child, [Child's Name], has been subjected to severe abuse by [Abuser's Name]. The abuse includes physical, emotional, and psychological harm inflicted upon the child.

    Impact: The child has displayed visible injuries and significant changes in behavior as a result of the abuse, indicating the distressing impact on their well-being.
    
    Witnesses: [If applicable, mention any witnesses to the abuse]
    
    Actions Taken: Immediate action has been taken to ensure the safety of the child. This report is being filed to seek justice and protect the rights of the innocent.
    
    Recommendation: Requesting thorough investigation and appropriate legal action against the abuser to ensure the child's safety and prevent further harm.
    
    Please let me know if there's anything else I can assist you with.`},
    {id:2,message:`Incident: A child, [Child's Name], has been subjected to severe abuse by [Abuser's Name]. The abuse includes physical, emotional, and psychological harm inflicted upon the child.

    Impact: The child has displayed visible injuries and significant changes in behavior as a result of the abuse, indicating the distressing impact on their well-being.
    
    Witnesses: [If applicable, mention any witnesses to the abuse]
    
    Actions Taken: Immediate action has been taken to ensure the safety of the child. This report is being filed to seek justice and protect the rights of the innocent.
    
    Recommendation: Requesting thorough investigation and appropriate legal action against the abuser to ensure the child's safety and prevent further harm.
    
    Please let me know if there's anything else I can assist you with.`},
    {id:3,message:`Incident: A child, [Child's Name], has been subjected to severe abuse by [Abuser's Name]. The abuse includes physical, emotional, and psychological harm inflicted upon the child.

    // Impact: The child has displayed visible injuries and significant changes in behavior as a result of the abuse, indicating the distressing impact on their well-being.
    
    // Witnesses: [If applicable, mention any witnesses to the abuse]
    
    // Actions Taken: Immediate action has been taken to ensure the safety of the child. This report is being filed to seek justice and protect the rights of the innocent.
    
    // Recommendation: Requesting thorough investigation and appropriate legal action against the abuser to ensure the child's safety and prevent further harm.
    
    // Please let me know if there's anything else I can assist you with.`},
    {id:4,message:'Hi'}
]

function ChatScreen(props) {
    const {width,height}=useAuth();
return (
<View style={[styles.container]}>
    <View style={{width:width,alignItems:'center'}}>
    <AppHeader title={'Child Abuse'}/>
    </View>
    <View style={{width:'100%',height:height*0.08,backgroundColor:colors.secondary,justifyContent:'center',alignItems:'center'}}>
    <AppText fontFamily='PoppinsSemiBold' color={colors.white}>Victim One</AppText>
    </View>
   <FlatList
   keyExtractor={(item) => item.id}
   data={data}
   renderItem={({item,index})=>(
    <View style={{backgroundColor:colors.secondary,margin:10,borderRadius:20,borderBottomRightRadius:0,padding:'3%',alignSelf:'flex-end',justifyContent:'center'}}>
        <AppText color={colors.white}>{item.message}</AppText>
    </View>
//     <View style={{padding:10,margin:5,justifyContent:'flex-start',alignItems:'flex-start',}}>
//     <View style={{
//         // bg
//         maxWidth:'90%', paddingHorizontal:15,paddingVertical:5,minHeight:30,
//         backgroundColor:'red',borderRadius:10}}>
//     <View style={{paddingVertical:3,flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap',paddingHorizontal:0,minHeight:10}}>
//     <AppText fontSize={15} color='#000' >{item.message}</AppText>
//     </View>
//      <AppText fontSize={12} paddingRight='5%' alignSelf='flex-end' color='#949599'children={'item.time'}/>
//     </View>
// </View>
   )}
   />




    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <View style={[styles.chat,{width:width*0.82,height:height*0.07,}]}>
        <View style={{}}>
            <MaterialCommunityIcons name="plus" size={width*0.08} color={colors.secondary} />
        </View>
        <TextInput placeholder='Message...' style={{paddingHorizontal:width*0.01,paddingVertical:width*0.01,flex:1,marginHorizontal:5,fontSize:width*0.04}} multiline/>
        <View>
        <FontAwesome name="camera" size={width*0.06} color={colors.secondary} />
        </View>
    </View>
    <View style={[styles.chat,{width:width*0.13,height:width*0.13,justifyContent:'center',backgroundColor:colors.secondary}]}>
    <FontAwesome5 name="microphone" size={width*0.055} color={colors.white} />
    </View>
    </View>
</View>
);
}

export default ChatScreen;
const styles = StyleSheet.create({
container:{
flex:1,
// justifyContent:'center',
//  alignItems:'center',
},
chat:{
    backgroundColor:'#D9D9D9',
    marginBottom:Constants.statusBarHeight/2,
    flexDirection:'row',
    alignItems:'center',
    padding:'3%',
    margin:3,
    borderRadius:50
}
});