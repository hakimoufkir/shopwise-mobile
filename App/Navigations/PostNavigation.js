import { View, Text } from 'react-native'
import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import Post from '../Screens/Post';
import PostDetail from '../Components/PostDetail/PostDetail';

export default function HomeNavigation() {
    const isAndroid=true;
    const Stack=createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        gestureEnabled:true,
      
        ...(isAndroid&&TransitionPresets.ModalPresentationIOS)

    }}>
        <Stack.Screen name='Post-screen'
       options={{headerShown:false}}
        component={Post} />
        <Stack.Screen name="Post-detail" 
          options={{title:""}}
        component={PostDetail} screenOptions={{
            presentation:'modal',
           
        }}/>
    </Stack.Navigator>
  )
}