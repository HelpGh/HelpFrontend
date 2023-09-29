import React,{useEffect} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../../config/colors';
import useAuth from '../../auth/useAuth';
import routes from '../../navigation/routes';

function LoadingScreen({navigation}) {
    const {width} = useAuth();
    useEffect(() => {
        const timer = setTimeout(() => {
          // Navigate to the next screen after 5 seconds
          navigation.navigate(routes.WELCOME)
        }, 5000); // 5000 milliseconds = 5 seconds
    
        return () => clearTimeout(timer);
      }, [navigation]);
return (
<View style={styles.container}>
        <Image source={require('../../assets/images/logo.png')} style={{resizeMode:'contain',width:width*0.3}}/>
        <View style={{width:width*0.3,height:width*0.3,marginTop:'10%',backgroundColor:colors.secondary,borderRadius:width*0.05,justifyContent:'center',alignItems:'center'}}>
            <Entypo name="squared-plus" size={width*0.23} color={colors.white} />
        </View>
</View>
);
}

export default LoadingScreen;
const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
 alignItems:'center',
 backgroundColor:colors.primary
}
});