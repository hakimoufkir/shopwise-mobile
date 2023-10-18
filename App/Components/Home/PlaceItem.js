import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import HorizontalLine from './HorizontalLine';
import {heartFillsvg, heartSvg, stars} from '../../../assets/svgs/svgs';
import {SvgXml} from 'react-native-svg';

export default function PlaceItem({place}) {
  const [isLiked, setIsLiked] = React.useState(false);

  const heartIconFill = () => (
    <SvgXml xml={heartFillsvg} width="16" height="16" color={'#1acbaa'} />
  );
  const heartIcon = () => (
    <SvgXml xml={heartSvg} width="16" height="16" color={'#1acbaa'} />
  );
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
        position: 'relative',
      }}>
      {place?.photos ? (
        <View>
          <Image
            source={{
              uri:
                'https://maps.googleapis.com/maps/api/place/photo' +
                '?maxwidth=400' +
                '&photo_reference=' +
                place?.photos[0]?.photo_reference +
                '&key=AIzaSyBUZHQ26WxIBMkmQXeAl-P1GO-MJjOhhYk',
            }}
            style={{width: 110, height: 110, borderRadius: 15}}
          />
        </View>
      ) : (
        <Image
          source={require('./../../../assets/notFound.png')}
          style={{width: 110, height: 110, borderRadius: 15}}
        />
      )}
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{position: 'absolute', top: 1, right: 3}}
          onPress={() => setIsLiked(!isLiked)}>
          {!isLiked ? heartIcon() : heartIconFill()}
        </TouchableOpacity>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 18,
            marginBottom: 5,
            color: 'black',
            fontWeight: 'bold',
          }}>
          {place.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 5,
            color: 'black',
            fontWeight: 'normal',
          }}
          numberOfLines={2}>
          {place.vicinity}
        </Text>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            flexDirection: 'row',
          }}>
          <SvgXml xml={stars} width="20" height="20" />
          <Text style={{color: 'black'}}>{place.rating}</Text>
        </View>
      </View>
      <HorizontalLine />
    </View>
  );
}
