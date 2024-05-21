module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@src': './src',
          '@assets': './assets',
          '@constants': './constants',
          '@screens': './src/screens',
        },
        root: ['.'],
      },
    ],
    'jest-hoist',
    'react-native-reanimated/plugin',
  ],
};
