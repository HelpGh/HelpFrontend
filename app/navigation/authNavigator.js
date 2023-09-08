import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import controler from '../controler/controler';
import routes from './routes';

const Stack = createNativeStackNavigator();

console.log('====================================');
console.log("Innnn");
console.log('====================================');
const AuthNavigator = () =>(
    <Stack.Navigator>
      {/* <Stack.Screen name={routes.LOADING} component={controler.LoadingStackScreen} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name={routes.WELCOME} component={controler.WelcomeStackScreen} options={{headerShown:false,}}/> */}
      {/* <Stack.Screen name={routes.EMERGENCY} component={controler.EmergencyStackScreen} options={{headerShown:false,animation:'slide_from_right'}}/> */}
      {/* <Stack.Screen name={routes.EMERGENCYCONTACTS} component={controler.EmergencyContactStackScreen} options={{headerShown:false,animation:'slide_from_right'}}/> */}
  
      {/* <Stack.Screen name={routes.SIGNUP} component={controler.SignupStackScreen} options={{headerShown:false,animation:'fade'}}/> */}
      <Stack.Screen name={routes.LOGIN} component={controler.LoginStackScreen} options={{headerShown:false,animation:'fade'}}/>
      {/* <Stack.Screen name={routes.FORGETPASSWORD} component={controler.ForgetPasswordStackScreen} options={{headerShown:false,animation:'fade'}}/> */}
      {/* <Stack.Screen name={routes.NEWPASSWORD} component={controler.NewPasswordStackScreen} options={{headerShown:false,animation:'fade'}}/> */}
      {/* <Stack.Screen name={routes.CHECKMAIL} component={controler.CheckMailStackScreen} options={{headerShown:false,animation:'fade'}}/> */}
  
    </Stack.Navigator>
  )

 export default AuthNavigator; 