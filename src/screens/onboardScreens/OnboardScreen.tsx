import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@src/routes';
import {View} from 'native-base';

type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OnboardScreen'
>;

interface OnboardDataInterface {
  metadata: any;
  title: string;
  detail: string;
}

const OnboardScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const onboardData: OnboardDataInterface[] = [
    {
      metadata: {
        img: '',
      },
      title: 'Travel \n Reimagined',
      detail:
        'Krila streamlines your travel planning with cutting-edge technology. Secure and effortless bookings, powered by Web3.',
    },
  ];

  return <View flex={1} bg={'red.100'}></View>;
};

export default React.memo(OnboardScreen);
