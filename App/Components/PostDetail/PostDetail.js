import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ActivityIndicator,
  Linking,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import tailwind from 'twrnc';
import {ScrollView} from 'native-base';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import PostDetailItem from './PostDetailItem';
import PostDetailComments from './PostDetailComments';

export default function PostDetail() {
  const param = useRoute().params;
  const postDetail = param.post;

  const onDirectionClick = () => {
    const url = Platform.select({
      ios:
        'maps:' +
        postDetail.lat +
        ',' +
        postDetail.lng +
        '?q=' +
        postDetail.description,
      android:
        'geo:' +
        postDetail.lat +
        ',' +
        postDetail.lng +
        '?q=' +
        postDetail.description,
    });

    Linking.openURL(url);
  };

  if (!postDetail) {
    return <ActivityIndicator />;
  } else {
    return (
      <ScrollView style={{padding: 20, backgroundColor: 'white', flex: 1}}>
        <PostDetailItem
          postDetail={postDetail}
          onDirectionClick={() => onDirectionClick()}
        />
        {postDetail.lat && postDetail.long && (
          <View style={tailwind`rounded-xl py-10 pl-1`}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{
                width: Dimensions.get('window').width * 0.88,
                height: Dimensions.get('window').width * 0.45,
              }}
              region={{
                latitude: postDetail.lat[0],
                longitude: postDetail.long[0],
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              showsUserLocation={true}>
              <Marker
                coordinate={{
                  latitude: postDetail.lat[0],
                  longitude: postDetail.long[0],
                }}
                title={postDetail.title}
                description={postDetail.description}
              />
            </MapView>
          </View>
        )}

        <View style={tailwind`mx-5 mt-5 mb-9`}>
          <Text style={tailwind`text-lg font-semibold`}>Comments:</Text>
          {
            (postDetail.comments.length==0)&&
                <Text style={tailwind`text-lg font-semibold`}>No comments for this Post 🙂</Text>
                
          }
          {postDetail.comments?.map((comment, index) => (
            <PostDetailComments comment={comment} key={index} />
          ))}
        </View>

        <TouchableOpacity
          style={{
            marginBottom: 25,
            backgroundColor: '#2E71DC',
            padding: 15,
            alignItems: 'center',
            margin: 8,
            display: 'flex',
            borderRadius:10,
            paddingBottom: 15,
          }}
          onPress={() => onDirectionClick()}>
          <Text
            style={{
              fontStyle: 'normal',
              fontSize: 16,
              textAlign: 'center',
              color: 'white',
            }}>
            write a comment
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
