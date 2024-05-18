
import { Platform } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from "react-native";
import { COLORS } from "./theme";


export const usePlatform = Platform

export const useWp = wp;

export const useHp = hp;

export const styles = StyleSheet.create({
  container: {
    height: useHp(100),
    // flex: 1,
    // gap: 5,
  },

  header: {
    height: useHp(20),
    // flex: 1,
    backgroundColor: 'white',
  },

  main: {
    height: useHp(70),
    // flex: 4,
    // gap: 5,
    display: 'flex',
    flexDirection: 'column',
  },

  section1: {
    width: useWp(100),
    // height: useHp(100),
    // flex: 3,
    backgroundColor: COLORS.white,
  },

  section2: {
    width: useWp(100),
    height: useHp(100),
    // flex: 1,
    backgroundColor: COLORS.white,
  },

  footer: {
    height: useHp(20),
    // flex: 1,
    backgroundColor: COLORS.white,
  },
});
