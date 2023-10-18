import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {Image} from 'react-native';
import {TextInput} from 'react-native';
import { SvgXml} from 'react-native-svg';
import {zoomOutlineSvg} from '../../../assets/svgs/svgs';
import LinearGradient from 'react-native-linear-gradient';



export default function SearchBar({setSearchText}) {
  const [searchInput, setSearchInput] = useState();
  const zoomOutlineSvgFCT = () => (
    <SvgXml xml={zoomOutlineSvg} width="20" height="20" />
  );
  
  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={['white', "transparent", "transparent", "transparent"]}
        style={{ padding: 20, width: Dimensions.get("screen").width }}
      >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 35}}>Discover</Text>
      </View>
      <View
        style={{
          display: 'flex',
          marginTop: 5,
          flexDirection: 'row',
          padding: 10,
          gap: 5,
          elevation: 0.7,
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 5,
        }}>
        <View>{zoomOutlineSvgFCT()}</View>
        <TextInput
          placeholderTextColor={'gray'}
          placeholder="Search"
          style={{backgroundColor: 'white', width: '80%'}}
          onChangeText={value => setSearchInput(value)}
          onSubmitEditing={() => setSearchText(searchInput)}
        />
      </View>

      </LinearGradient>
      {/* </LinearGradient> */}
    </View>
  );
}
