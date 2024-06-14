import {Dimensions, PixelRatio, Platform} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

const isPortrait = height >= width;
const baseWidth = isPortrait ? 360 : 680;
const baseHeight = isPortrait ? 680 : 360;

export const responsiveFontSize = (fontSize: number) => {
  const scale = isPortrait ? height / baseHeight : width / baseWidth;
  const newSize = fontSize * scale;

  if (Platform.OS === 'ios') {
    return Math.round(newSize);
  } else if (Platform.OS === 'android') {
    return Math.round(newSize) - 2;
  }
  return Math.round(newSize);
};

const scale = (size: number) => (width / 375) * size;

export const normalize = (size: number) => {
  const newSize = scale(size);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
