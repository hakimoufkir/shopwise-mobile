import {View, ScrollView, Text} from 'react-native';
import React, { useEffect } from 'react';
import Header from '../Components/Home/Header';
import tailwind from 'twrnc';
import GoogleMapView from '../Components/Home/GoogleMapView';
import SearchHome from '../Components/Home/SearchHome';
import {useSelector} from 'react-redux';
import Recommended from '../Components/Home/Recommended';

export default function Home() {
  const sortDataRedux = useSelector(state => state.userRedux.sortData);
  console.log(sortDataRedux);
  useEffect(() => {
  // console.log('sortDataRedux, Home', sortDataRedux);
  }
  , [sortDataRedux]);
  return (
    <ScrollView >
      <View style={tailwind`p-2 bg-white`}>
        <Header />
      </View>

      {/* <SearchHome/> */}
      {
        sortDataRedux &&
        // console.log(sortDataRedux)
      <View style={tailwind`p-2`}>
        {sortDataRedux == 'All' ? <GoogleMapView /> : <Recommended />}
      </View>
      }
    </ScrollView>
  );
}
