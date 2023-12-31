import {View, Text} from 'react-native';
import React from 'react';
import {Marker} from 'react-native-maps';

export default function PlaceMarker({item}) {
  // console.log('item ===>');
  // console.log(item);
  return (
    <Marker
      title={item.name}
      coordinate={{
        latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      }}/>
  );
}
