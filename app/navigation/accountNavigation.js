import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import controler from '../controler/controler';
import routes from './routes';

const Stack = createNativeStackNavigator();

const AccountNavigator = () =>(
    <Stack.Navigator>
      <Stack.Screen name={routes.ACCOUNT} component={controler.AccountStackScreen} options={{headerShown:false}}/>
      <Stack.Screen name={routes.EDIT_PROFILE} component={controler.EditProfileStackScreen} options={{headerShown:false}}/>
      {/* <Stack.Screen name={routes.ENVIRONMENTAL_REPORT} component={controler.EnvironmentalReportStackScreen} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name={routes.SECURITY_BOOKINGS_FORM} component={controler.SecurityBookingsFormStackScreen} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name={routes.CART} component={controler.CartStackScreen} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name={routes.CHAT} component={controler.ChatStackScreen} options={{headerShown:false}}/> */}
    </Stack.Navigator>
  )

 export default AccountNavigator; 