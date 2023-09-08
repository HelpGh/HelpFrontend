import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppStyles from '../config/AppStyles';
function AppText({numberOfLines,ellipsizeMode,children,onPress,disabled=false,...others}) {
return (
<Text disabled={disabled} onPress={onPress} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode} style={[AppStyles.text,{...others}]}>{children}</Text>
);
}

export default AppText;
const styles = StyleSheet.create({
container:{}
});