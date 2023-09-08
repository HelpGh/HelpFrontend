import { StyleSheet, Text,Image, View,TouchableOpacity,Modal, ImageBackground,TouchableWithoutFeedback } from 'react-native'
import React,{useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';


export default function AppImagePicker({getImageUrl,clearImage,scaleHeight=1,scaleWidth=1}) {
  const [modalOpen,setModalOpen]= useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const {width} = useAuth();

  let openImagePickerAsync = async () => {
    setModalOpen(false)
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect: [4, 3],
      quality: 1,
    });
    if (pickerResult.canceled === true) {
      return;
    }
    getImageUrl(pickerResult.assets[0].uri);
    setSelectedImage({ localUri: pickerResult.assets[0].uri });
  };

  let openCameraPickerAsync = async () => {
    setModalOpen(false)
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync();  
    if (pickerResult.canceled === true) {
      return;
    }
    getImageUrl(pickerResult.assets[0].uri);
    setSelectedImage({ localUri: pickerResult.assets[0].uri });
  };

  // if(clearImage){
  //   setSelectedImage(null);
  // }

  const deletePhoto= ()=>{
    setSelectedImage(null);
    setModalOpen(false);
    getImageUrl(null);
  }

  
      return (
          <View style={styles.imageContainer}>
            <TouchableOpacity
            style={{backgroundColor:colors.light,height:width*0.3*scaleHeight,width:width*0.3*scaleWidth,borderRadius:10,marginVertical:10,overflow:'hidden',borderWidth:1,borderColor:colors.primary,justifyContent:'center',alignItems:'center'}}
            onPress={()=> setModalOpen(true)}>
              {selectedImage !== null && !clearImage &&
              <Image  style={[styles.imageSelector,{width:width*0.3*scaleWidth,height:width*0.3*scaleHeight,borderRadius:width}]} source={{ uri: selectedImage.localUri }}/>}
              {selectedImage === null && 
              <>
              <View style={{width:width*0.3,height:width*0.3,justifyContent:'center',alignItems:'center'}}>
    <Image style={{}} source={require('../assets/images/man3.png')}/>
    <MaterialCommunityIcons style={{position:'absolute',top:'65%',right:'5%'}} name="camera-plus" size={width*0.08} color="black" />
    </View>
             </>
             }
                </TouchableOpacity>

                <Modal
                animationType={'slide'}
                transparent={true}
                visible={modalOpen}
                >
                  <TouchableWithoutFeedback
                  onPress={()=> setModalOpen(false)}>
                  <View style={styles.modalContainer}>
                    <View style={[styles.modalContent]}>
                    {selectedImage !== null &&
                    <TouchableOpacity onPress={deletePhoto} style={[styles.deletePhoto]}>
                      {/* <AppText children="Delete"/> */}
                      <AppText children={"Delete Photo"} color={colors.secondary} fontSize={25}/>
                          {/* <Text style={[styles.deletePhotoText]}>Delete Photo</Text> */}
                        </TouchableOpacity>
                        }

                        <TouchableOpacity onPress={openCameraPickerAsync} style={styles.takePhoto}>
                          <AppText children={"Take Photo"} fontSize={25}/>
                          {/* <Text style={styles.takePhotoText}></Text> */}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={openImagePickerAsync} style={styles.choosePhoto}>
                        <AppText children={"Choose Photo"} fontSize={25}/>
                          {/* <Text style={styles.choosePhotoText}></Text> */}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> setModalOpen(false)} style={styles.cancel}>
                        <AppText children={"Cancel"} fontSize={25}/>
                          {/* <Text style={styles.cancelPhotoText}></Text> */}
                        </TouchableOpacity>
                    </View>
                  </View>
                  </TouchableWithoutFeedback>
                </Modal>
          </View>
    
      );
    }
const styles = StyleSheet.create({
    modalContainer:{
      flex:1,
      backgroundColor:colors.modalBackground,
      justifyContent:'flex-end'
    },
    modalContent:{
      justifyContent:'center',
      alignItems:'center',
      // height:'30%', 
      width:'90%',
      marginHorizontal:'5%',
      borderTopLeftRadius:15,
      borderTopRightRadius:15, 
      marginBottom:'5%',
     backgroundColor:'red,',
     overflow:'hidden'
    },
    deletePhoto:{
      width:'100%', 
      justifyContent:'center',
      alignItems:'center', 
      borderTopLeftRadius:15,
      borderTopRightRadius:15, 
      backgroundColor:colors.white,
      paddingVertical:'5%',
      borderBottomWidth:0.5,
      borderBottomColor:colors.secondary
    },
    takePhoto:{
      width:'100%', 
      justifyContent:'center',
      alignItems:'center', 
      backgroundColor:colors.white,
      paddingVertical:'5%',
    },
    choosePhoto:{
      width:'100%', 
      justifyContent:'center',
      alignItems:'center',
      borderBottomRightRadius:15,
      borderBottomLeftRadius:15,
      backgroundColor:colors.white,
      paddingVertical:'5%',
    },
    cancel:{
      paddingVertical:'5%',
      width:'100%', 
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
      borderRadius:15,
      backgroundColor:colors.white
    }, 
  imageContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
},
  imageSelectorIcon:{
      // position:'absolute',

      // top:'35%',
      // left:'37%',
      
  },

  imageSelectorText:{
      textAlign:'center',
      alignItems:'center',
      fontSize:18,
      top:'55%',
      color:'#333',
  },
  
  imageSelector:{
      borderWidth:2,
      resizeMode:'contain',
      backgroundColor:colors.light,
      borderRadius:5
  },
})


      

   


  
