import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import tailwind from 'twrnc';
import {_signInWithGoogle, _signOut} from '../../../config/firebase/GoogleFcts';
import {useDispatch, useSelector} from 'react-redux';
import {setUserRedux} from '../../../redux/slices/user';
import {Button, Modal, Center, FormControl, Input} from 'native-base';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import AppText from '../../Services/AppText';
import {useNavigation} from '@react-navigation/native';
import LogoImg from './../../../assets/shopwise.png';
import {SvgXml} from 'react-native-svg';
import {notificationsNone} from '../../../assets/svgs/svgs';
export default function Header() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {userRedux} = useSelector(state => state.userRedux);

  async function signOutWithGoogle() {
    _signOut();
    dispatch(setUserRedux(null)); // Dispatch action to reset user data
  }
  async function signInWithGoogle() {
    _signInWithGoogle()
      .then(data => {
        if (!data) {
          console.log('ERROR => no Data');
        } else {
          // console.log(data);
          // console.log(data.email, data.name, data.photo);
          signInMongoDB(data.email, data.name, data.photo);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  const signInMongoDB = async (email, username, image) => {
    try {
      const response = await fetch(
        'http://192.168.1.103:3000/api/usersR/user',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            username: username,
            image: image,
          }),
        },
      );

      const data = await response.json();

      if (data.message === 'User created!') {
        console.log('User NEWBIE created successfully To MongoDB');
        useDispatch(setUserRedux(data.user));
      } else if (data.message === 'User already exists!') {
        // console.log(data.user);
        // User already exists, set user data to the state
        dispatch(setUserRedux(data.user));
        Alert.alert('User already exists! Welcome Back  ' + data.user.username);
      } else {
        console.log('Error creating user To MongoDB:', data.error.message);
        Alert.alert('Error', 'Failed to create user To MongoDB');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Failed to create user To MongoDB');
    }
  };

  useEffect(() => {}, [userRedux]);

  return (
    <View
      style={tailwind`flex flex-row text-black  justify-between items-center`}>
        <View style={tailwind`flex-row items-center justify-center`}>
          <Image
            source={require('./../../../assets/shopwise.png')}
            style={{
              width: 120,
              height: 50,
            }}
            resizeMode="center"
          />
        </View>
        <View>
          <SvgXml xml={notificationsNone} width="24" height="24" />
        </View>

      {/* <TouchableOpacity
      // onPress={() => signInWithGoogle()}
      onPress={() => navigation.navigate('Profile')}
      >
        <Image
          source={require('../../../assets/avatar.png')}
          style={tailwind`w-10 h-10 rounded-full`}
        />
      </TouchableOpacity>

      {userRedux !== null && (
        <TouchableOpacity onPress={() => signOutWithGoogle()}>
          <Text style={{color: 'black'}}>SignOut</Text>
        </TouchableOpacity>
      )} */}
    </View>
  );
}

/*
 <Text style={tailwind`text-2xl font-bold text-black ml-2`}>
            ShopWise
          </Text>
           <Text style={{
            fontFamily: 'Montserrat-Bold',
          }}>
            ShopWise
          </Text> 
          <Text
            style={{
              color: '#1acbaa',
              fontSize: 30,
              fontWeight: 'bold',
            }}>
            .
          </Text>
           */
