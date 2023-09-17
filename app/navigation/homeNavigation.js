import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import controler from '../controler/controler';
import routes from './routes';

const Stack = createNativeStackNavigator();

const HomeNavigator = () =>(
    <Stack.Navigator>
      <Stack.Screen name={routes.HOME} component={controler.HomeStackScreen} options={{headerShown:false}}/>
      <Stack.Screen name={routes.CHILD_REPORT} component={controler.ChildReportStackScreen} options={{headerShown:false}}/>
      <Stack.Screen name={routes.CHILD_ABUSE} component={controler.ChildAbuseStackScreen} options={{headerShown:false}}/>
      <Stack.Screen name={routes.SECURITY_BOOKINGS} component={controler.SecurityBookingsStackScreen} options={{headerShown:false}}/>
      <Stack.Screen name={routes.SECURITY_BOOKINGS_FORM} component={controler.SecurityBookingsFormStackScreen} options={{headerShown:false}}/>
      <Stack.Screen name={routes.ENVIRONMENTAL_REPORT} component={controler.EnvironmentalReportStackScreen} options={{headerShown:false}}/>
      <Stack.Screen name={routes.CHAT} component={controler.ChatStackScreen} options={{headerShown:false}}/>
      {/* <Stack.Screen name='Shop' component={controler.ShopStackScreen} options={{headerShown:false}}/>
      <Stack.Screen name='book' component={controler.BookScreenScreen} options={{headerShown:false}}/>
      <Stack.Screen name='appoint' component={controler.AppointStackScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Shops' component={controler.ShopsStackScreen} options={{headerShown:true,headerTitle:"Popular Shops"}}/>
      <Stack.Screen name='ShopsCategory' component={controler.ShopsCategoryStackScreen} options={{headerShown:true,headerTitle:"Shops"}}/>
      <Stack.Screen name='receipt' component={controler.ReceiptStackScreen} options={{headerShown:true,headerTitle:"Shops"}}/> */}
    </Stack.Navigator>
  )

 export default HomeNavigator; 