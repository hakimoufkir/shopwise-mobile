import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import CategoryItem from './CategoryItem';
import tailwind from 'twrnc';
import SortCategories from './sortCategories';

export default function CategoryList({setSelectedCategory}) {
  const categoryList = [
    {
      id: 1,
      name: 'Gas Station',
      value: 'gas_station',
      icon: require('./../../../assets/gas-station.png'),
    },
    {
      id: 2,
      name: 'Restaurants',
      value: 'restaurant',
      icon: require('./../../../assets/restaurant.png'),
    },
    {
      id: 3,
      name: 'Cafe',
      value: 'cafe',
      icon: require('./../../../assets/local-cafe.png'),
    },
    {
      id: 4,
      name: 'bank',
      value: 'bank',
      icon: require('./../../../assets/bank.png'),
    },
  ];
  return (
    <View >
      <View style={tailwind`gap-y-2`}>
        <View
          style={tailwind`mr-4 ml-1 flex-row  justify-between items-center text-black`}>
          <Text
            style={tailwind`font-semibold text-neutral-700 text-black mx-4 my-5`}>
            Categories
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={categoryList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 5}}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => setSelectedCategory(item.value)}>
              <CategoryItem category={item} />
            </TouchableOpacity>
          )}
        />

        <View style={{
          marginHorizontal:12
        }}>
          <SortCategories />
        </View>
      </View>
    </View>
  );
}
