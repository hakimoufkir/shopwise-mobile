import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import PlaceDetailItem from './PlaceDetailItem';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {TouchableOpacity} from 'react-native';
import {Platform} from 'react-native';
import {Linking} from 'react-native';
import {ScrollView} from 'react-native';
import {Dimensions} from 'react-native';
import tailwind from 'twrnc';
import {SvgXml} from 'react-native-svg';
import {arrowDirection, scanQR} from '../../../assets/svgs/svgs';
// import {Ionicons} from '@expo/vector-icons';

export default function PlaceDetail() {
  const param = useRoute().params;
  const place = param.place;
  // console.log(param.place);

  const onDirectionClick = () => {
    const url = Platform.select({
      // ios:
      //   'maps:' +
      //   place.geometry.location.lat +
      //   ',' +
      //   place.geometry.location.lng +
      //   '?q=' +
      //   place.vicinity,
      android:
        'geo:' +
        place.geometry.location.lat +
        ',' +
        place.geometry.location.lng +
        '?q=' +
        // place.vicinity,
        place.geometry.location.lat +
        ',' +
        place.geometry.location.lng
    });

    Linking.openURL(url);
  };
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View style={tailwind`mx-5 mb-5`}>
        <PlaceDetailItem
          place={place}
          onDirectionClick={() => onDirectionClick()}
        />
      </View>
      {place &&
        place.geometry.location.lat !== undefined &&
        place.geometry.location.lng !== undefined && (
          <View style={tailwind` py-10 mx-5   pl-1`}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{
                width: Dimensions.get('window').width * 0.88,
                height: Dimensions.get('window').width * 0.45,
              }}
              region={{
                latitude: place.geometry.location.lat,
                longitude: place.geometry.location.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              showsUserLocation={true}>
              <Marker
                coordinate={{
                  latitude: place.geometry.location.lat,
                  longitude: place.geometry.location.lng,
                }}
                title={place.name}
                description={place.vicinity}
              />
            </MapView>
          </View>
        )}

      <TouchableOpacity
        style={{
          backgroundColor: '#1acbaa',
          padding: 15,
          alignContent: 'center',
          alignItem: 'center',
          margin: 8,
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          paddingBottom: 15,
          marginHorizontal: 25,
        }}
        disabled={true}
        onPress={() => onDirectionClick()}>
        <SvgXml xml={scanQR} width="28" height="28" color={'white'} />
        <Text style={tailwind`text-xl text-white font-bold`}>
          Scan The QR Code
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
