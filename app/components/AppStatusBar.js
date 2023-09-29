import React from 'react';
import { View, StyleSheet,StatusBar,Platform } from 'react-native';
import { useTheme } from '../hooks/ThemeContext';
import useAuth from '../auth/useAuth';
import Constants from 'expo-constants';

function AppStatusBar(props) {
    const {theme}=useTheme();
    const {width,height}=useAuth();

    if(Platform.OS=='ios'){
        return (
        <View style={{backgroundColor:theme.white=='#fff'?theme.secondary:theme.white,height:Constants.statusBarHeight}}>
                <StatusBar
                    backgroundColor={theme.white=='#fff'?theme.secondary:theme.white}
                    barStyle={"light-content"} //"dark-content"
                  />
              </View>
        );
    }else{
        return (
        <StatusBar
        backgroundColor={theme.white=='#fff'?theme.primary:theme.white}// Change to your desired background color
        barStyle={"dark-content"} // Change to "dark-content" for dark text
      />
        )
    }
}

export default AppStatusBar;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center'
}
});