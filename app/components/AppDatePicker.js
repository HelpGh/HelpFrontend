import React,{useState} from 'react';
import { View, StyleSheet,Pressable,Button,SafeAreaView } from 'react-native';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import AppText from './AppText';
import useDateAndTime from '../hooks/useDateAndTime';
import useAuth from '../auth/useAuth';
import colors from '../config/colors';

      function AppDatePicker({scaleX=1,scaleY=1,scaleT=1,...others}) {
        const {width}= useAuth();
        const {date,getDate,getTime,mode,onChange,show}=useDateAndTime();
      return (
        <View style={{...others}}>
        <Pressable style={{width:width*0.6*scaleX,height:width*0.08*scaleY,gap:10,flexDirection:'row'}}
        onPress={getDate}>
          <View style={styles.box}>
            <View style={styles.minBox}>
            <AppText fontSize={width*0.04*scaleT}>{date.toDateString().substring(4,7)}</AppText>
            </View>
            <Ionicons name="ios-chevron-down-sharp" size={width*0.06} color={colors.secondary} />
            </View>
          <View style={styles.box}>
            <View style={styles.minBox}>
            <AppText fontSize={width*0.04*scaleT}>{date.toDateString().substring(8,10)}</AppText>
            </View>
            <Ionicons name="ios-chevron-down-sharp" size={width*0.06} color={colors.secondary} />
            </View>
          <View style={styles.box}>
            <View style={styles.minBox}>
            <AppText fontSize={width*0.04*scaleT}>{date.toDateString().substring(11,15)}</AppText>
            </View>
            <Ionicons name="ios-chevron-down-sharp" size={width*0.06} color={colors.secondary} />
            </View>
        </Pressable>
        {/* <Button onPress={getTime} title="Show time picker!" /> */}
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
      );
      }
      
      export default AppDatePicker;
      const styles = StyleSheet.create({
      container:{
      flex:1,
      justifyContent:'center',
       alignItems:'center'
      },
      box:{
        backgroundColor:colors.white,
        borderWidth:1,
        borderColor:colors.secondary,
        flex:1,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      },
      minBox:{
        flex:1,justifyContent:'center',alignItems:'center'
      }
      });