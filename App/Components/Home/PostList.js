import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tailwind from 'twrnc';
import PostItemBig from './PostitemBig';
import PostItem from './PostItem';

export default function PostList({postList}) {
  const navigator = useNavigation();
  const onPostClick = item => {
    navigator.navigate('post-detail', {post: item});
  };
  return (
    <View style={tailwind`mx-5 text-black mt-10`}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          // color: '#1acbaa',
          color: 'black',
        }}>
        Found {postList.length} Posts
      </Text>
      <FlatList
        data={postList}
        renderItem={({item, index}) => (
          <TouchableOpacity key={index} onPress={() => onPostClick(item)}>
            {index % 4 == 0 ? (
              <PostItemBig post={item} />
            ) : (
              <PostItem post={item} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
