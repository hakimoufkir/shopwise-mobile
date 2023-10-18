import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import PlaceItem from './PlaceItem';
// import PlaceItemBig from './PlaceItemBig'
import {useNavigation} from '@react-navigation/native';
import tailwind from 'twrnc';
import PlaceItemBig from './PlaceItemBig';

export default function PlaceList({placeList}) {
  const navigator = useNavigation();
  const onPlaceClick = item => {
    navigator.navigate('place-detail', {place: item});
  };
  return (
    <View style={tailwind`mx-5 text-black mt-10`}>
      {/* <Text style={tailwind`font-semibold text-neutral-700 text-black`}>
      Found {placeList.length} Places
      </Text> */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          // color: '#1acbaa',
          color: 'black',
        }}>
        Found {placeList.length} Places
      </Text>
      <FlatList
        data={placeList}
        renderItem={({item, index}) => (
          <TouchableOpacity key={index} onPress={() => onPlaceClick(item)}>
            {index % 4 == 0 ? (
              <PlaceItemBig place={item} />
            ) : (
              <PlaceItem place={item} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
