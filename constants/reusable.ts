import {Dimensions, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type OSTypes = 'ios' | 'android';

const {height, width} = Dimensions.get('window');

const TABLET_THRESHOLD = 600;

export const isTablet = width >= TABLET_THRESHOLD || height >= TABLET_THRESHOLD;

export const MobileOSType = (Platform.OS === 'ios' || Platform.OS) as OSTypes;

export const isMobile = !isTablet;

export const WINDOW_HEIGHT = height;
export const WINDOW_WIDTH = width;

export const useWp = wp;
export const useHp = hp;
