import {View, Text, Image} from 'react-native';
import React from 'react';
import HorizontalLine from './HorizontalLine';
import { stars } from '../../../assets/svgs/svgs';
import { SvgXml } from 'react-native-svg';

export default function PostItemBig({post}) {
  return (
    <View style={{marginTop: 20}}>
      {post?.images ? (
        <Image
          source={{
            uri:post?.images[0]
          }}
          style={{width: '100%', height: 130, borderRadius: 15}}
        />
      ) : null}
      <Text
        numberOfLines={2}
        style={{fontSize: 18, marginBottom: 2, color: 'black'}}>
        {post.title}
      </Text>
      <Text
        style={{fontSize: 16, marginBottom: 5, color: 'black'}}
        numberOfLines={2}>
        {post.description}
      </Text>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          flexDirection: 'row',
        }}>
        <SvgXml xml={stars} width="20" height="20" />

        <Text style={{color: 'black'}}>{post.stars}</Text>
      </View>
      <HorizontalLine />
    </View>
  );
}
