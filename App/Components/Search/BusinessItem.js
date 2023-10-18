import React from 'react';
import { View, Text, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { stars } from '../../../assets/svgs/svgs';

export default function BusinessItem({ place }) {
  return (
    <View
      style={{
        width: 140,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        elevation: 0.4,
        marginBottom: 60,
      }}>
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
          style={{ width: 120, height: 80, borderRadius: 10 }}
        />
      ) : (
        <Image
          source={require('./../../../assets/adaptive-icon.png')}
          style={{ width: 130, height: 100, borderRadius: 9 }}
        />
      )}
      <Text numberOfLines={2} style={{  fontSize: 16, marginTop: 5 }}>
        {place.name}
      </Text>
      <Text
        numberOfLines={1}
        style={{
          
          fontSize: 13,
          marginTop: 5,
          color: '#A9A9A9',
        }}>
        {place.vicinity ? place.vicinity : place.formatted_address}
      </Text>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          marginTop: 5,
          flexDirection: 'row',
          marginBottom: -5,
        }}>
          <SvgXml xml={stars} width="20" height="20"  />
          <Text style={{color:'black'}}>{place.rating}</Text>
      </View>
    </View>
  );
}
