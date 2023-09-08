import React, { useState } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import controler from '../controler/controler';
import HomeNavigator from './homeNavigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewListingButton from './NewListingButton';
import colors from '../config/colors';
import routes from './routes';
import AccountNavigator from './accountNavigation';
// import NearByNavigator from './nearByNavigation';
// import AccountNavigator from './accountNavigation';
const Tab = createBottomTabNavigator();
const AppNavigator = ({width})=>{
return (
  <>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      // tabBarIcon: ({ focused, color, size }) => {
      //   let iconName;
      //   let img=0;
      //   if (route.name === routes.HOME) {
      //     iconName = focused ? 'home-circle' : 'home-circle-outline';
      //     size = focused ? 30: 24;
      //   }
      //   else if (route.name === 'AppNearBy') {
      //     iconName = focused ? 'spa' : 'spa-outline';
      //     size = focused ? 30: 24;
      //   }
      //   // else if (route.name === 'Appointment') {
      //   //   iconName = focused ? 'book-open-page-variant' : 'book-open-page-variant';
      //   //   size = focused ? 30: 24;
      //   // }
      // else if (route.name === 'googlemap') {
      //   iconName = focused ? 'map-marker-radius' : 'map-marker-radius-outline';
          
      //     size = focused ? 30: 24;
      //   }
      // else if (route.name === 'Account') {
      //     iconName = focused ? 'account-circle' : 'account-circle-outline';
      //     size = focused ? 30: 24;
      //   }
  
  
      //   // You can return any component that you like here!
      //   return (
      //   <MaterialCommunityIcons name={iconName} size={25} color={color} />
      //   );
      // },
      tabBarShowLabel:false,
      tabBarActiveTintColor: colors.active,
      tabBarInactiveTintColor: colors.primary,
      })}>
      <Tab.Screen
        name={routes.HOMETAB}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
         headerShown:false,
         tabBarStyle:{backgroundColor:colors.secondary,borderTopLeftRadius:10,borderTopRightRadius:10}
        }}
      />
      <Tab.Screen
        name="ListingEdit"

        component={HomeNavigator}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              // onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          title:"Upload Coffin",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNTTAB}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown:false,
          tabBarStyle:{backgroundColor:colors.secondary,borderTopLeftRadius:10,borderTopRightRadius:10}
        }}
      />
    </Tab.Navigator>
    </>
  )
}


export default AppNavigator;