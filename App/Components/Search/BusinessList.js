import React from 'react';
import { View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import BusinessItem from './BusinessItem';
import { useNavigation } from '@react-navigation/native';

export default function BusinessList({ placeList }) {
  const navigation = useNavigation();

  return (
    <View>
      {/* Use LinearGradient from react-native-svg */}
      <View
        colors={['transparent', 'white']}
        style={{ padding: 20, width: Dimensions.get('window').width }}>
        <FlatList
          data={placeList}
          horizontal={true}
          renderItem={({ item, index }) =>
            index <= 6 && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('place-detail', {
                    place: item,
                  })
                }>
                <BusinessItem place={item} />
              </TouchableOpacity>
            )
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}
