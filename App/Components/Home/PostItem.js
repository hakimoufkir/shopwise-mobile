import {View, Text, Image} from 'react-native';
import React from 'react';
import HorizontalLine from './HorizontalLine';
import {stars} from '../../../assets/svgs/svgs';
import { SvgXml } from 'react-native-svg';
export default function PostItem({post}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginTop: 20,
        padding: 2,
        rounded: 15,
      }}>
      {post?.images ? (
        <Image
          source={{
            uri: post?.images[0]
          }}
          style={{width: 110, height: 110, borderRadius: 15}}
        />
      ) : (
        <Image
          source={require('./../../../assets/notFound.png')}
          style={{width: 110, height: 110, borderRadius: 15}}
        />
      )}
      <View style={{flex: 1}}>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 18,
            marginBottom: 5,
            color: 'black',
            fontWeight: 'bold',
          }}>
          {post.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 5,
            color: 'black',
            fontWeight: 'normal',
          }}
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
          <SvgXml xml={stars} width="20" height="20"  />
          <Text style={{color: 'black'}}>{post.stars}</Text>
        </View>
      </View>
      <HorizontalLine />
    </View>
  );
}
