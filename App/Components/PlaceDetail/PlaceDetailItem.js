import {View, Text} from 'react-native';
import React from 'react';
// import { AntDesign } from "@expo/vector-icons";
// import Colors from '../../Shared/Colors';
import {Image} from 'react-native';
// import {Ionicons} from '@expo/vector-icons';
import GoogleMapView from '../Home/GoogleMapView';
import {TouchableOpacity} from 'react-native';
import Share from '../../Services/Share';
import {SvgXml} from 'react-native-svg';
import {arrowDirection, share, stars} from '../../../assets/svgs/svgs';
import {Badge} from 'native-base';
import tailwind from 'twrnc';
export default function PlaceDetailItem({place, onDirectionClick}) {
  return (
    <View>
      <Text style={{fontSize: 26}}>{place.name}</Text>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          marginTop: 5,
          flexDirection: 'row',
        }}></View>
      {place?.photos ? (
        <Image
          source={{
            uri:
              'https://maps.googleapis.com/maps/api/place/photo' +
              '?maxwidth=400' +
              '&photo_reference=' +
              place?.photos[0]?.photo_reference +
              '&key=AIzaSyBUZHQ26WxIBMkmQXeAl-P1GO-MJjOhhYk',
          }}
          style={{
            width: '100%',
            height: 160,
            borderRadius: 15,
            marginTop: 10,
          }}
        />
      ) : null}

      <Text
        style={{fontSize: 16, marginTop: 10, color: 'black'}}
        numberOfLines={2}>
        {place.vicinity ? place.vicinity : place.formatted_address}
      </Text>
      {place?.opening_hours ? (
        <Text style={tailwind`text-left flex flex-row items-center mt-4`}>
          {place?.opening_hours?.open_now == true ? (
            <Badge colorScheme="success">(Open)</Badge>
          ) : (
            <Badge colorScheme="info">(Closed)</Badge>
          )}
          <SvgXml xml={stars} width="20" height="20" />
          <Text style={tailwind`text-black text-center`}>{place.rating}</Text>
        </Text>
      ) : null}

      <View
        style={{marginTop: 10, flexDirection: 'row', display: 'flex', gap: 10}}>
        <TouchableOpacity
          onPress={() => onDirectionClick()}
          style={{
            direction: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            backgroundColor: '#1acbaa',
            width: 110,
            padding: 3,
            borderRadius: 15,
            justifyContent: 'center',
          }}>
          <SvgXml xml={arrowDirection} width="24" height="24" />

          <Text style={{fontSize: 16}}>Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Share.SharePlace(place)}
          style={{
            direction: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            backgroundColor: '#1acbaa',
            width: 90,
            padding: 3,
            borderRadius: 15,
            justifyContent: 'center',
          }}>
          <SvgXml xml={share} width="24" height="24" />
          <Text style={{fontSize: 16}}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
