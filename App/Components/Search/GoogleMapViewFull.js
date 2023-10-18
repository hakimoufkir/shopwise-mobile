import {View, Text, ActivityIndicator} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {UserLocationContext} from '../../Context/UserLocationContext';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Dimensions} from 'react-native';
import PlaceMarker from '../Home/PlaceMarker';

export default function GoogleMapViewFull(placeList) {
  const {location, setLocation} = useContext(UserLocationContext);
  const placeListArray = placeList.placeList;
useEffect(() => {
  // console.log('GoogleMapViewFull placeListArray:', placeListArray);
}
, [placeListArray]);
  return (
    <View>
      {placeListArray.length > 0 ? (
        <MapView
          style={{
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height * 0.89,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            title="You"
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
          {
          placeListArray?.map((item, index) => {
            // console.log('GoogleMapViewFull item:', item);
            return (
              <Marker
                  key={index}
                  coordinate={{
                    latitude: item.geometry.location.lat,
                    longitude: item.geometry.location.lng,
                  }}
                  title={item.name}
                  description={item.vicinity}
                />
            );
          })}
        </MapView>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
}
