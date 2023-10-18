import {View, Text} from 'react-native';
import React,{useState} from 'react';
import tailwind from 'twrnc';
import {TextInput} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {zoomOutlineSvg} from '../../../assets/svgs/svgs';

export default function SearchHome() {

  const [searchValue, SetSearchValue] =  useState('');
  const zoomOutlineSvgFCT = () => (
    <SvgXml xml={zoomOutlineSvg} width="20" height="20" />
  );
  return (
    <View style={tailwind`mx-4  mt-4`}>
      <View
        style={tailwind`flex-row items-center justify-center bg-white gap-x-3 pl-6`}>
        <View>{zoomOutlineSvgFCT()}</View>

        <TextInput
          placeholder="Search destination"
          placeholderTextColor={'gray'}
          style={tailwind`flex-1 text-base mb-1 pl-1 tracking-wider`}
        />
      </View>
    </View>
  );
}
