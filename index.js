/**
 * @format
 */
// import {firebase} from '@react-native-firebase/app';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBDzhVNM3f2-N3Er5YH_08Pxx0gmE8acUg',
//   databaseURL: 'https://console.firebase.google.com/u/4/project/shopwise-395215/database/shopwise-395215-default-rtdb/data/~2F',
//   authDomain: 'shopwise-395215.firebaseapp.com',
//   projectId: 'shopwise-395215',
//   storageBucket: 'shopwise-395215.appspot.com',
//   messagingSenderId: '297567209629',
//   appId: '1:297567209629:web:6eb99180572d4321e66c74',
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

AppRegistry.registerComponent(appName, () => App);
