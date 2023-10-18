import {View, Text, Image} from 'react-native';
import React from 'react';
// import Colors from "../../Shared/Colors";
// import { AntDesign } from "@expo/vector-icons";
import HorizontalLine from './HorizontalLine';
import { stars } from '../../../assets/svgs/svgs';
import { SvgXml } from 'react-native-svg';

export default function PlaceItemBig({place}) {
  return (
    <View style={{marginTop: 20}}>
      {place?.photos ? (
        <Image
          source={{
            uri:
              'https://maps.googleapis.com/maps/api/place/photo' +
              '?maxwidth=400' +
              '&photo_reference=' +
              place?.photos[0]?.photo_reference +
              '&key=AIzaSyBUZHQ26WxIBMkmQXeAl-P1GO-MJjOhhYk',
          }}
          style={{width: '100%', height: 130, borderRadius: 15}}
        />
      ) : null}
      <Text
        numberOfLines={2}
        style={{fontSize: 18, marginBottom: 2, color: 'black'}}>
        {place.name}
      </Text>
      <Text
        style={{fontSize: 16, marginBottom: 5, color: 'black'}}
        numberOfLines={2}>
        {place.vicinity}
      </Text>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          flexDirection: 'row',
        }}>
        <SvgXml xml={stars} width="20" height="20" />

        <Text style={{color: 'black'}}>{place.rating}</Text>
      </View>
      <HorizontalLine />
    </View>
  );
}
