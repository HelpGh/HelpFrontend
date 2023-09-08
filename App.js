import { useEffect, useState,useCallback } from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import {NavigationContainer} from '@react-navigation/native';

import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import AuthNavigator from './app/navigation/authNavigator';
import AppNavigator from './app/navigation/appNavigation';
import jwtDecode from 'jwt-decode';
import * as SplashScreen from 'expo-splash-screen';
import NetInfo,{useNetInfo} from '@react-native-community/netinfo';
import OfflineNotice from './app/components/OfflineNotice';
import { useFonts } from 'expo-font';


export default function App() {
  const window = Dimensions.get('window');
  const [width,setWidth] = useState(window.width);
  const [height,setHeight] = useState(window.height);
  const [user,setUser]=useState();
  const [isReady,setIsReady]= useState(false);

  const NetInfo = useNetInfo();
  let [fontsLoaded] = useFonts({
    "PoppinsRegular":require('./app/assets/fonts/Poppins-Regular.ttf'),
    "PoppinsSemiBold":require('./app/assets/fonts/Poppins-SemiBold.ttf'),
    "PoppinsExtraBold":require('./app/assets/fonts/Poppins-ExtraBold.ttf'),
  });

  



  const restoreToken = async ()=>{
   const token = await authStorage.getToken();
    if(!token) return;
    setUser(jwtDecode(token));
  }
  useEffect(() => {
    async function prepare() {
        try {
            await SplashScreen.preventAutoHideAsync();
            await restoreToken();
        } catch (error) {
            console.log("Error loading app", error);
        } finally {
            setIsReady(true);
        }
    }
    prepare();
}, [fontsLoaded]);

const onNavigationContainerReady = useCallback(async () => {
  console.log(isReady && fontsLoaded);
    if (isReady && fontsLoaded) await SplashScreen.hideAsync();
}, [isReady]);

if (!isReady) return null;
if (!fontsLoaded) return null;

console.log('====================================');
console.log("Goo");
console.log('====================================');
  return (
    <AuthContext.Provider value={{user,setUser,width,height }}>
     <NavigationContainer onReady={onNavigationContainerReady}>
      {user ?<AuthNavigator/> : <AppNavigator width={width}/>}
     </NavigationContainer>
     <OfflineNotice/>
    </AuthContext.Provider>
  )
}

const styles = StyleSheet.create({
  
});
