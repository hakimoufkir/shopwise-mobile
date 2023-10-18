import {Share} from 'react-native';

const SharePlace = async (place) => {
  try {
    const result = await Share.share({
      title: 'App link',
      message:
        'Get Connected with Me :https://www.linkedin.com/in/oufkir-abdel-hakim/',
      url: 'https://www.linkedin.com/in/oufkir-abdel-hakim/',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

export default {
  SharePlace,
};
