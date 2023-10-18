import React, {useContext, useEffect, useState} from 'react';
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
import {UserLocationContext} from '../../Context/UserLocationContext';
import PostList from './PostList';
import SortCategories from './sortCategories';
import {Heading} from 'native-base';
import {Badge} from 'native-base';

export default function Recommended() {
  const {location} = useContext(UserLocationContext);
  //   console.log("location", location);
  const [isLoading, setIsLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        // 'http://192.168.0.116:3000/api/postsR/posts',
        'http://192.168.1.103:3000/api/postsR/posts',
      );
      const data = await response.json();
      setIsLoading(false);
      setPostList(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const infoAboutRecommended = () => {
    return (
      <View>
        <Heading>
        <Badge colorScheme="info">(Info)</Badge>
          Recommended Posts Have the ability to give you{' '}
          <Heading color="emerald.400">Discounts %</Heading>
        </Heading>
        <Text pt="3">
          so be sure to follow the path scan the QR 
         and get FREE discount .
        </Text>
      </View>
    );
  };

  // ----------------------------- Marks dyal places khadamin rir rahom f US --------------------------------

  return (
    <ScrollView style={tailwind`mt-5`}>
      {isLoading || !location ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={tailwind`rounded-xl`}>
          <Text
            style={tailwind`font-semibold text-neutral-700 text-black mx-4 my-5`}>
            Recommended Places Near by
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
                latitude: location?.latitude || 37.78825,
                longitude: location?.longitude || -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              showsUserLocation={true}>
              <Marker
                coordinate={location}
                title="My Location"
                description="Here I am"
              />
              {postList.map((post, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: post.lat[0],
                    longitude: post.long[0],
                  }}
                  title={post.title}
                  description={post.description}
                />
              ))}
            </MapView>
          </View>
          <View style={tailwind`mx-4 mt-10`}>{infoAboutRecommended()}</View>

          <View style={tailwind`mt-15`}>
            <SortCategories />
          </View>

          {postList.length > 0 ? (
            <PostList postList={postList} />
          ) : (
            <Text style={{color: 'black'}}>No places available.</Text>
          )}
        </View>
      )}
    </ScrollView>
  );
}
