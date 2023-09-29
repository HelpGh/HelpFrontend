import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppStyles from '../config/AppStyles';
import { useTheme } from '../hooks/ThemeContext';
import useAuth from '../auth/useAuth';
function AppText({numberOfLines,ellipsizeMode,children,onPress,disabled=false,...others}) {
    const {theme} =useTheme()
    const {width}=useAuth()
return (
<Text disabled={disabled} onPress={onPress} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode} style={[AppStyles.text,{fontSize:width*0.04,color:theme.textColor,...others}]}>{children}</Text>
);
}

export default AppText;
const styles = StyleSheet.create({
container:{}
});