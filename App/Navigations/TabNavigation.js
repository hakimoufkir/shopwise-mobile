import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from '../Screens/Home';
import Fav from '../Screens/Fav';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import ProfileNavigation from './ProfileNavigation';
import PostNavigation from './PostNavigation';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './HomeNavigation';
import {FavIcon, home, user, zoomOutlineSvg} from '../../assets/svgs/svgs';
import {SvgXml} from 'react-native-svg';

// import HomeNavigation from './HomeNavigation';
export default function TabNavigation() {
  const zoomOutlineSvgFCT = () => (
    <SvgXml xml={zoomOutlineSvg} width="20" height="20" />
  );
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeNavigation}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <SvgXml xml={home} width="20" height="20" />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Post"
          component={PostNavigation}
          options={{
            tabBarLabel: 'Post ',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="ab-testing" size={size} color={color} />
            // ),
          }}
        /> */}
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color, size}) => zoomOutlineSvgFCT(),
          }}
        />
        {/* <Tab.Screen
          name="Fav"
          component={Fav}
          options={{
            tabBarLabel: 'Fav',
            tabBarIcon: ({color, size}) => (
              <SvgXml xml={FavIcon} width="20" height="20" />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Profile"
          component={ProfileNavigation}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (

              <SvgXml xml={user} width="20" height="20" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
