import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import Profile from '../Screens/Profile';
import EditProfile from '../Components/Profile/EditProfile';

export default function ProfileNavigation() {
    const isAndroid=true;
    const Stack=createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        gestureEnabled:true,
      
        ...(isAndroid&&TransitionPresets.ModalPresentationIOS)

    }}>
        <Stack.Screen name='profile-screen'
       options={{headerShown:false}}
        component={Profile} />
        <Stack.Screen name="Edit-profile" 
          options={{title:""}}
        component={EditProfile} screenOptions={{
            presentation:'modal',     
        }}/>
    </Stack.Navigator>
  )
}