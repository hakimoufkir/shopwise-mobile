import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  PermissionsAndroid,
  ActivityIndicator,
  ScrollView,
  SectionList,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import tailwind from 'twrnc';
import Geolocation from '@react-native-community/geolocation';
import CategoryList from './CategoryList';
import PlaceList from './PlaceList'; // Make sure you have this component imported
import GlobalApi from '../../Services/GlobalApi';
import {LogBox} from 'react-native';




export default function GoogleMapView() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({});
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  useEffect(() => {
    if (location.latitude !== undefined && location.longitude !== undefined) {
      GetNearBySearchPlaces('restaurant');
    }
  }, [location]);

  const checkLocationPermission = async () => {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (!granted) {
      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (status === 'granted') {
        setIsLoading(false);
        trackLocation();
      }
    } else {
      setIsLoading(false);
      trackLocation();
    }
  };

  const trackLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
      },
      error => {
        console.log(error.code, error.message);
      },
    );
  };

  const GetNearBySearchPlaces = value => {
    GlobalApi.nearByPlace(location.latitude, location.longitude, value)
      .then(res => {
        // console.log(res.data.results);
        setPlaceList(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ScrollView style={tailwind`mt-3`}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={tailwind`rounded-xl`}>
          
          <Text style={tailwind`font-semibold text-neutral-700 text-black mx-4 my-5`}>
          Top Places Near By
          </Text>
          <View style={tailwind`rounded-xl mx-4 overflow-hidden`}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{
                borderRadius: 20,
                width: Dimensions.get('window').width * 0.88,
                height: Dimensions.get('window').width * 0.45,
              }}
              region={{
                latitude: location.latitude || 37.78825,
                longitude: location.longitude || -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              showsUserLocation={true}>
              <Marker
                coordinate={location}
                title="My Location"
                description="Here I am"
              />
              {placeList.map((place,index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: place.geometry.location.lat,
                    longitude: place.geometry.location.lng,
                  }}
                  title={place.name}
                  description={place.vicinity}
                />
              ))}
            </MapView>
          </View>
       
          <CategoryList
            setSelectedCategory={value => GetNearBySearchPlaces(value)}
          />
          {placeList.length > 0 ? (
            <PlaceList placeList={placeList} />
          ) : (
            <Text>No places available.</Text>
          )}
          
        </View>
      )}
    </ScrollView>
  );
}
