import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import tailwind from 'twrnc';
import Share from '../../Services/Share';

export default function PostDetailItem({postDetail, onDirectionClick}) {
  const postDetailItem = postDetail;
  return (
    <View style={tailwind`mx-5 mb-5`}>
      <Image
        style={{width: '100%', height: 200, marginBottom: 8}}
        source={{uri: postDetailItem.images[0]}}
      />

      <Text style={tailwind`text-xl font-semibold mb-2`}>
        {postDetailItem.title}
      </Text>
      <Text style={tailwind`text-gray-500 mb-2`}>
        {postDetailItem.description}
      </Text>
      <Text style={tailwind`text-blue-500 mb-2`}>{postDetailItem.tag}</Text>
      <Text style={tailwind`text-green-500 mb-2`}>
        {postDetailItem.category}
      </Text>
      <View style={tailwind`mx-5 mb-5`}>
        <Text style={tailwind`text-lg font-semibold`}>Stars: {postDetailItem.stars}</Text>
      </View>

      <View
        style={{marginTop: 10, flexDirection: 'row', display: 'flex', gap: 10}}>
        <TouchableOpacity
          onPress={() => onDirectionClick()}
          style={{
            direction: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            backgroundColor: 'gray',
            width: 110,
            padding: 3,
            borderRadius: 40,
            justifyContent: 'center',
          }}>
          {/* <Ionicons name="navigate-circle-outline" size={24} color="black" /> */}
          <Text style={{fontSize: 16}}>Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Share.SharePlace(postDetailItem)}
          style={{
            direction: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            backgroundColor: 'gray',
            width: 90,
            padding: 3,
            borderRadius: 40,
            justifyContent: 'center',
          }}>
          {/* <Ionicons name="md-share-outline" size={24} color="black" /> */}
          <Text style={{fontSize: 16}}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
