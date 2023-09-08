import React from 'react';
import { View, StyleSheet,TextInput,Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';

function AppTextInput({placeholder,padding='3%',borderRadius=5,textContentType,onChangeText,onBlur,value,touched,errors,secureTextEntry=false,keyboardType='default',IconGroup,IconName,IconSize='24',multiline=false,maxLength,...others}) {

    const {width} = useAuth()
return (
    <>
        <View style={[styles.container,{padding:padding,borderRadius:borderRadius,...others}]}>
        {/* {IconName && <IconGroup name={IconName} size={IconSize} />} */}
        {IconName && <MaterialCommunityIcons name={IconName} size={24} color={colors.dark} />}
            <TextInput          
                placeholder={placeholder}
                textContentType={textContentType}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                style={[styles.textInputBox,{fontSize:width*0.045}]}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                multiline={multiline}
                maxLength={maxLength}
                />
        </View>
        {/* {touched && errors && <ErrorMessage error={errors}/>} */}
        <Text style={{color:'red',marginHorizontal:'5%'}}>{touched && errors}</Text>
    </>
);
}

export default AppTextInput;
const styles = StyleSheet.create({
container:{
    backgroundColor:colors.white,
    width:'100%', 
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    borderColor:colors.secondary
},
    textInputBox:{
        flex:1,
    marginHorizontal:10
}
});