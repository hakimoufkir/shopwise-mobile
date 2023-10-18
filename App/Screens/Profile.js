import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  leftArrow,
  personOutline,
  security,
  notificationsNone,
  lockOutline,
  creditCard,
  helpOutline,
  infoOutline,
  deleteOutline,
  saveAlt,
  outlinedFlag,
  peopleOutline,
  logout,
} from '../../assets/svgs/svgs';
import {SvgXml} from 'react-native-svg';
import { Box, Slider } from 'native-base';

const Profile = ({navigation}) => {
  const Example = () => {
    return (
      <Box alignItems="center" w="100%">
        <Slider
          w="1/2"
          maxW="300"
          defaultValue={0}
          minValue={0}
          maxValue={100}
          accessibilityLabel="hello world"
          step={100}>
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
    );
  };
  const renderSettingsItem = ({icon, text}) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORS.gray,
      }}>
      {icon === 'personOutline' && (
        <TouchableOpacity onPress={() => navigation.navigate('Edit-profile')}>
          <SvgXml xml={personOutline} width="24" height="24" />
        </TouchableOpacity>
      )}
      {icon === 'security' && <SvgXml xml={security} width="24" height="24" />}
      {icon === 'notificationsNone' && (
        <SvgXml xml={notificationsNone} width="24" height="24" />
      )}
      {icon === 'lockOutline' && (
        <SvgXml xml={lockOutline} width="24" height="24" />
      )}
      {icon === 'creditCard' && (
        <SvgXml xml={creditCard} width="24" height="24" />
      )}
      {icon === 'helpOutline' && (
        <SvgXml xml={helpOutline} width="24" height="24" />
      )}
      {icon === 'infoOutline' && (
        <SvgXml xml={infoOutline} width="24" height="24" />
      )}
      {icon === 'deleteOutline' && (
        <SvgXml xml={deleteOutline} width="24" height="24" />
      )}
      {icon === 'saveAlt' && <SvgXml xml={saveAlt} width="24" height="24" />}
      {icon === 'outlinedFlag' && (
        <SvgXml xml={outlinedFlag} width="24" height="24" />
      )}
      {icon === 'peopleOutline' && (
        <SvgXml xml={peopleOutline} width="24" height="24" />
      )}
      {icon === 'logout' && <SvgXml xml={logout} width="24" height="24" />}

      <Text
        style={{
          color: 'black',
          marginLeft: 36,
          ...FONTS.semiBold,
          fontWeight: 600,
          fontSize: 16,
        }}>
        {text}{' '}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 39,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: 0,
          }}>
          <SvgXml xml={leftArrow} width="24" height="24" />
        </TouchableOpacity>

        <Text style={{...FONTS.h2, color: 'black'}}>Profile</Text>
      </View>

      <ScrollView style={{marginHorizontal: 12}}>
        {/* Account Profile */}
        <View style={{marginBottom: 12}}>
          <Text style={{...FONTS.h4, marginVertical: 10}}>Account</Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}>
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Support and About Profile */}

        {/* <View style={{marginBottom: 12}}>
          <Text style={{...FONTS.h4, marginVertical: 10}}>
            Support & About{' '}
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}>
            {supportItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View> */}

        {/* Cache & Cellular */}
        {/* <View style={{marginBottom: 12}}>
          <Text style={{...FONTS.h4, marginVertical: 10}}>
            Cache & Cellular{' '}
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}>
            {cacheAndCellularItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View> */}

        {/* Actions Profile */}
        {/* <Example/> */}

        <View style={{marginBottom: 12}}>
          <Text style={{...FONTS.h4, marginVertical: 10}}>Actions</Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}>
            {actionsItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const COLORS = {
  primary: '#242760',
  secondary: '#544C4C',
  white: '#FFFFFF',
  black: '#000000',
  gray: 'rgba(36, 39, 96, 0.05)',
  secondaryGray: 'rgba(84, 76, 76, 0.14)',
};

const SIZES = {
  // global SIZES
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,
  padding3: 16,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 20,
  h3: 18,
  h4: 16,
  body1: 30,
  body2: 20,
  body3: 18,
  body4: 14,
  body5: 12,
};

const FONTS = {
  largeTitle: {
    fontFamily: 'black',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'bold', fontSize: SIZES.h4, lineHeight: 20},
  body1: {fontFamily: 'regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'regular', fontSize: SIZES.body4, lineHeight: 20},
};

const accountItems = [
  {
    icon: 'personOutline',
    text: 'Edit Profile',
  },
  {icon: 'security', text: 'Security'},
  {
    icon: 'notificationsNone',
    text: 'Notifications',
  },
  {icon: 'lockOutline', text: 'Privacy'},
];

const supportItems = [
  {
    icon: 'creditCard',
    text: 'My Subscription',
  },
  {icon: 'helpOutline', text: 'Help & Support'},
  {
    icon: 'infoOutline',
    text: 'Terms and Policies',
  },
];

const cacheAndCellularItems = [
  {
    icon: 'deleteOutline',
    text: 'Free up space',
  },
  {icon: 'saveAlt', text: 'Date Saver'},
];

const actionsItems = [
  {
    icon: 'outlinedFlag',
    text: 'Report a problem',
  },
  {icon: 'peopleOutline', text: 'Add Account'},
  {icon: 'logout', text: 'Log out'},
];
