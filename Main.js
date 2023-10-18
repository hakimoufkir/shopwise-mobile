import React, {useState, useEffect} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Text, Image, StyleSheet, StatusBar, Alert} from 'react-native';
import TabNavigation from './App/Navigations/TabNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Main() {
  const [showRealApp, setShowRealApp] = useState(false);

  useEffect(() => {
    // Check if the user has seen the introductory slider before
    AsyncStorage.getItem('introShown')
      .then(value => {
        if (value === 'true') {
          // User has seen the slider before
          setShowRealApp(true);
        }
      })
      .catch(error => {
        console.error('Error reading async storage:', error);
      });
  }, []);
  _renderItem = ({item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = item => item.title;

  _onDone = () => {
    // Save in AsyncStorage that the user has seen the slider
    AsyncStorage.setItem('introShown', 'true')
      .then(() => {
        setShowRealApp(true);
      })
      .catch(error => {
        console.error('Error setting async storage:', error);
      });
  };

  return (
    <View style={{flex: 1}}>
      {showRealApp ? (
        <TabNavigation />
      ) : (
        <View style={{flex: 1}}>
          <StatusBar translucent backgroundColor="transparent" />
          <AppIntroSlider
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            data={data}
            onDone={this._onDone}
          />
        </View>
      )}
    </View>
  );
}

const data = [
  {
    title: 'Step 1',
    text: 'Search.\nGet your Favorite store!',
    image: require('./assets/app.png'),
    bg: '#1acbaa',
  },
  {
    title: 'Step 2',
    text: 'The path.\nFollow The Path that gives You The App!',
    image: require('./assets/search.png'),
    bg: '#1acbaa',
  },
  {
    title: 'Step 3',
    text: "Once You're There\n\nScan The QR Code And Get Your Discount!",
    image: require('./assets/discount.png'),
    bg: '#1acbaa',
  },
];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    fontSize: 30,
  },
  title: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
});
