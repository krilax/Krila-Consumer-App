import {Dimensions, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

const baseWidth = 360;
const baseHeight = 680;

export const responsiveFontSize = (fontSize: number) => {
  const heightRatio = height / baseHeight;
  const newSize = fontSize * heightRatio;

  if (Platform.OS === 'ios') {
    return Math.round(newSize);
  } else if (Platform.OS === 'android') {
    return Math.round(newSize) - 2;
  }
  return Math.round(newSize);
};

export const responsiveWidth = (size: number) => {
  return wp((size / baseWidth) * 100 + '%');
};

export const responsiveHeight = (size: number) => {
  return hp((size / baseHeight) * 100 + '%');
};

export const responsiveMargin = (margin: number) => {
  return responsiveWidth(margin);
};

export const responsivePadding = (padding: number) => {
  return responsiveWidth(padding);
};
