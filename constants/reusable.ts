import { Dimensions, Platform } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { height, width } = Dimensions.get('window')

export const WINDOW_HEIGHT = height
export const WINDOW_WIDTH = width

export const usePlatform = Platform

export const useWp = wp;

export const useHp = hp;