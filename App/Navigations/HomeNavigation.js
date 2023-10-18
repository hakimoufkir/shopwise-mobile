import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import PlaceDetail from '../Components/PlaceDetail/PlaceDetail';
import PostDetail from '../Components/PostDetail/PostDetail';

export default function HomeNavigation() {
    const isAndroid=true;
    const Stack=createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        gestureEnabled:true,
      
        ...(isAndroid&&TransitionPresets.ModalPresentationIOS)

    }}>
        <Stack.Screen name='home-screen'
       options={{headerShown:false}}
        component={Home} />
        <Stack.Screen name="place-detail" 
          options={{title:""}}
        component={PlaceDetail} screenOptions={{
            presentation:'modal',
           
        }}/>
        <Stack.Screen name="post-detail" 
          options={{title:""}}
        component={PostDetail} screenOptions={{
            presentation:'modal',
           
        }}/>
    </Stack.Navigator>
  )
}