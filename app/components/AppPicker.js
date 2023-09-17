import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,FlatList, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';
import AppButton from './AppButton';


function AppPicker({items,placeholder,onSelectedItem,selectedItem,title='title',padding,...otherprop}) {

    const [selectedId, setSelectedId] = useState(null);
    const [modal,setModal]=useState(false);
    const {width} =useAuth()
return (
<View style={{width:'90%',...otherprop}}>
    <AppText fontFamily='PoppinsSemiBold' fontSize={width*0.035}>{title}</AppText>
        <TouchableOpacity style={{flexDirection:'row',borderRadius:10,borderWidth:1,borderColor:colors.secondary,alignItems:'center',paddingLeft:'3%',padding:padding?padding:'2%',backgroundColor:colors.white}}
        onPress={()=>setModal(true)}>
            <AppText flex={1}>{selectedItem ? selectedItem.label : placeholder}</AppText>
            <Ionicons name="chevron-down" size={24} color="black" />
        </TouchableOpacity>


        <Modal visible={modal}>
                <View style={{backgroundColor:colors.white,flex:1}}>
                <View style={{alignItems:'center',marginBottom:'5%'}}>
                <AppButton width={'80%'} text="Close" onPress={()=> setModal(false)}/>

                </View>
                <FlatList
                contentContainerStyle={{alignItems:'center'}}
               
                    data={items}
                    // numColumns={2}
                    keyExtractor={item => item.value}
                    // extraData={selectedId}
                    renderItem={({ item }) => {
                        return (
                          <TouchableOpacity 
                          onPress={()=>{
                              onSelectedItem(item)
                              setModal(false)
                              }}
                          style={{marginVertical:width*0.02,marginHorizontal:width*0.05,alignSelf:'center',justifyContent:'center',flexDirection:'row',width:width*0.8,padding:'3%'}}>
                            {item.icon?item.icon: null}
                               <AppText textAlign="center" fontFamily='PoppinsSemiBold' fontSize={width*0.05} children={item.label}/>
                          </TouchableOpacity>
                           
                        );
                      }}
                />
                </View>
            </Modal>
</View>
);
}

export default AppPicker;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
//  alignItems:'center'
}
});