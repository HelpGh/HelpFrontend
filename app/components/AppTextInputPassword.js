import React, { useState } from 'react';
import { Dimensions,View, StyleSheet, TextInput,Text, TouchableOpacity } from 'react-native';
import { FontAwesome5,MaterialIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';


function AppTextInputPassword({ onChangeText, value, placeholder, keyboardType, onBlur, touched, errors,...other }) {

  const [viewPassword,setViewPassword]= useState(false);
  const {width}=useAuth()
  // const width = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
return (
  <>
<View style={[styles.scrowCard,{padding:width*0.03,...other}]}>

<MaterialIcons name="lock" size={width*0.06} color="#bbb" />
      <TextInput
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
        touched={touched}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={viewPassword}
        style={{flex:1,fontSize:18,marginLeft:5}}
        spellCheck={false}
      />
      <TouchableOpacity onPress={()=>setViewPassword(!viewPassword)}>
      {viewPassword&&<FontAwesome5 name="eye-slash" size={width*0.055} color="#bbb" />}
      {!viewPassword&&<FontAwesome5 name="eye" size={width*0.055} color="#bbb" />}
      </TouchableOpacity>
      </View>
      <Text style={{color:'red'}}>{touched && errors}</Text>
      </>
);
}

export default AppTextInputPassword;
const styles = StyleSheet.create({
    scrowCard:{
        width:'100%',
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        borderWidth:1,
        borderColor:colors.secondary,
        backgroundColor:colors.white,
        // marginVertical:3,
        // marginRight:10
    }
});