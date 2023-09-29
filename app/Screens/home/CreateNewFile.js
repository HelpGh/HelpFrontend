import React, { useState } from 'react';
import { View, StyleSheet, ScrollView,Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';


import AppHeader from '../../components/AppHeader';
import Constants from 'expo-constants';
import AppTextInput from '../../components/AppTextInput';
import AppPicker from '../../components/AppPicker';
import pickersData from '../../config/pickersData';
import useAuth from '../../auth/useAuth';
import AppText from '../../components/AppText';
import AppDatePicker from '../../components/AppDatePicker';
import AppButton from '../../components/AppButton';
import colors from '../../config/colors';

function CreateNewFileScreen(props) {
    const {width,height}=useAuth(); 
    const [selectedRegion,setSelectedRegion]=useState(pickersData.Category[0]);
    const [fileName, setFileName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const OnSelectedItem=(item)=>{
        setSelectedRegion(item)
    }



    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: 1,
        });
    console.log('====================================IMG');
    console.log(result.assets[0].mimeType);
    console.log('====================================');
        if (!result.canceled) {
          setSelectedFile(result);
        }
      };
    
      const pickDocument = async () => {
        try {
          const result = await DocumentPicker.getDocumentAsync({
            type: '*/*',
          });
          
          if (!result.canceled) {
              console.log('==============================PDF',result.assets[0].mimeType);
              console.log(result.assets[0].mimeType.startsWith('image'));
              console.log('====================================');
            setSelectedFile(result);
          }
        } catch (err) {
          console.error(err);
        }
      };
     
return (
<ScrollView style={{flex:1}} contentContainerStyle={styles.container}>
    <AppHeader title={'Create New File'}/>

    <View style={{width:width*0.9,marginTop:'5%'}}>
        <AppPicker items={pickersData.Category} onSelectedItem={OnSelectedItem} selectedItem={selectedRegion} title='File location' width='100%'/>

        <AppText marginTop='5%' fontFamily='PoppinsSemiBold'>File Name</AppText>
        <AppTextInput placeholder={'25th Birthday'}/> 

        <AppText fontFamily='PoppinsSemiBold'>Brief Description</AppText>
        <AppTextInput placeholder={'Write brief description'}/> 
    </View>

    <View style={{backgroundColor:'#eee', width:width*0.8,height:height*0.47,borderColor:colors.medium,borderWidth:1,borderStyle:"dashed",justifyContent:'center',alignItems:'center'}}>
    {selectedFile && (
          <View>
            <AppText>{selectedFile.name}</AppText>
            {selectedFile.assets[0].mimeType.startsWith('image') ? (
              <Image source={{ uri: selectedFile.assets[0].uri }} style={{ width: 200, height: 200 }} />
            ) : null}
            <TouchableOpacity style={{position:'absolute',top:'0%',right:'30%'}}
            onPress={()=>setSelectedFile(null)}>
            <AntDesign name="closecircle" size={24} color={'red'} />
            </TouchableOpacity>
          </View>
        )}
    {!selectedFile&&<AntDesign name="clouduploado" size={width*0.4} color={colors.medium} />}
    <AppText color={colors.medium} fontFamily='PoppinsSemiBold'>browse your computer</AppText>
    <AppButton width={width*0.4} Size={width*0.04} backgroundColor={colors.medium} text={"BROWSE FILES"} onPress={pickDocument}/>
    </View>
    
   

    <View style={{height:Constants.statusBarHeight*1.5}}></View>
</ScrollView>
);
}

export default CreateNewFileScreen;
const styles = StyleSheet.create({
container:{
// flex:1,
// justifyContent:'center',
 alignItems:'center',
 backgroundColor:colors.primary
}
});