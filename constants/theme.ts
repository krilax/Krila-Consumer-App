import {createConfig} from '@gluestack-style/react';
import {extendTheme} from 'native-base';
import {config as defaultConfig} from '@gluestack-ui/config';

const COLORS = {
  primary: '#03045E',
  secondary: '#425166',

  btnPrimary: '#FFE53C',
  white: '#ffff',

  whiteGray: '#F3F2F7',
  textColor: '#425166',

  borderColor: '#D8DDE2',
  tertiary: '#D9D9D9',
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

export {COLORS, SIZES};

export const nativeBaseTheme = extendTheme({
  breakpoints: {
    base: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
  },
  colors: {
    primary: {
      1: '#03045E',
      2: '#FFE53C',
    },
    secondary: {
      1: '#7D8093',
      2: '#425166',
    },
    customGreen: '#00FF00',
    danger: '#FF4000',
  },
  config: {
    initialColorMode: 'dark',
  },
});

export const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    fontSizes: {
      ...defaultConfig.tokens.fontSizes,
      newFontSize: 90,
    },
  },
});
