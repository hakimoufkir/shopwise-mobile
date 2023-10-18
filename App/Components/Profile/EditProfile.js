import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {leftArrow, peopleOutline} from '../../../assets/svgs/svgs';
import {SvgXml} from 'react-native-svg';

const EditProfile = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 22,
      }}>
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: 0,
          }}></TouchableOpacity>

        <Text style={{...FONTS.h3, color: 'black'}}>Edit Profile</Text>
      </View>

      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 22,
          }}>
          <TouchableOpacity>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={{
                height: 170,
                width: 170,
                borderRadius: 85,
                borderWidth: 2,
                borderColor: COLORS.primary,
              }}
            />

            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 10,
                zIndex: 9999,
              }}>
              <SvgXml xml={peopleOutline} width="24" height="24" />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'column',
              marginBottom: 6,
            }}>
            <Text style={{...FONTS.h4, color: 'black'}}>Name</Text>
            <View
              style={{
                height: 44,
                width: '100%',
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <TextInput editable={true} />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              marginBottom: 6,
            }}>
            <Text style={{...FONTS.h4, color: 'black'}}>Email</Text>
            <View
              style={{
                height: 44,
                width: '100%',
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <TextInput editable={true} />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              marginBottom: 6,
            }}>
            <Text style={{...FONTS.h4, color: 'black'}}>Password</Text>
            <View
              style={{
                height: 44,
                width: '100%',
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <TextInput editable={true} secureTextEntry />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              marginBottom: 6,
            }}>
            <Text style={{...FONTS.h4, color: 'black'}}>Date or Birth</Text>
            <TouchableOpacity
              style={{
                height: 44,
                width: '100%',
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <Text style={{color: 'black'}}>05/04/2000</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'column',
            marginBottom: 6,
          }}>
          <Text style={{...FONTS.h4, color: 'black'}}>Country</Text>
          <View
            style={{
              height: 44,
              width: '100%',
              borderColor: COLORS.secondaryGray,
              borderWidth: 1,
              borderRadius: 4,
              marginVertical: 6,
              justifyContent: 'center',
              paddingLeft: 8,
            }}>
            <TextInput style={{color: 'black'}} editable={true} />
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 44,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              ...FONTS.body3,
              color: COLORS.white,
            }}>
            Save Change
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

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
