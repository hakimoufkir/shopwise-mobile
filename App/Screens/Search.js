import {View, Text, ActivityIndicator} from 'react-native';
import React, { useEffect, useState, useContext} from 'react';
import GoogleMapViewFull from '../Components/Search/GoogleMapViewFull';
import SearchBar from '../Components/Search/SearchBar';
import GlobalApi from '../Services/GlobalApi';
import { UserLocationContext } from '../Context/UserLocationContext';
import BusinessList from '../Components/Search/BusinessList';
export default function Search() {
  const [placeList,setPlaceList]=useState([]);
  const {location,setLocation}=useContext(UserLocationContext);

  useEffect(()=>{
       GetNearBySearchPlace('pizza'); 
  },[])
  const GetNearBySearchPlace=(value)=>{
    GlobalApi.searchByText(value).then(resp=>{
          
          setPlaceList(resp.data.results);

    })
  } 

  return (
    <View>
      <View style={{position: 'absolute', zIndex: 20}}>
        <SearchBar setSearchText={value => GetNearBySearchPlace(value)} />
      </View>

      <GoogleMapViewFull placeList={placeList} />
      <View style={{position: 'absolute', zIndex: 20, bottom: 0}}>
        <BusinessList placeList={placeList} />
      </View>
    </View>
     );
}
