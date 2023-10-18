import React, {useState, useEffect} from 'react';
import Main from './Main';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Geolocation from '@react-native-community/geolocation';
import {UserLocationContext} from './App/Context/UserLocationContext';
import {
  View,
  Text,
  Dimensions,
  PermissionsAndroid,
  ActivityIndicator,
  ScrollView,
  SectionList,
  LogBox,
} from 'react-native';
import { NativeBaseProvider, extendTheme  } from 'native-base';
export default function App() {
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  const checkLocationPermission = async () => {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (!granted) {
      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (status === 'granted') {
        trackLocation();
      }
    } else {
      trackLocation();
    }
  };

  const trackLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log('Location tracked:', latitude, longitude);
        setLocation({latitude, longitude});
        setIsLoading(false);
      },
      error => {
        console.log('Location tracking error:', error.code, error.message);
      },
    );
  };

  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);
  return (
    <Provider store={store}>
        <NativeBaseProvider theme={theme}>
      <UserLocationContext.Provider value={{location, setLocation}}>
          {isLoading ? <ActivityIndicator size="large" /> : <Main />}
      </UserLocationContext.Provider>
        </NativeBaseProvider>
    </Provider>
  );
}
















const theme = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      200: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      300: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      400: {
        normal: "Roboto-Regular",
        italic: "Roboto-Italic",
      },
      500: {
        normal: "Roboto-Medium",
      },
      600: {
        normal: "Roboto-Medium",
        italic: "Roboto-MediumItalic",
      },
        700: {
          normal: 'Roboto-Bold',
        },
        800: {
          normal: 'Roboto-Bold',
          italic: 'Roboto-BoldItalic',
        },
        900: {
          normal: 'Roboto-Bold',
          italic: 'Roboto-BoldItalic',
        },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
});
