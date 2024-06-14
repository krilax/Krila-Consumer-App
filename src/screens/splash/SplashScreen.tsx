import React, {useEffect} from 'react';
import {Flex, Text} from 'native-base';

import {Dimensions} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@src/routes';
import {useDeviceType} from '@src/components/hooks';
import KrilaLogo from '@assets/images/app/Krila_Logo.svg';

type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SplashScreen'
>;

const {width, height} = Dimensions.get('window');

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const deviceType = useDeviceType();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnboardScreen');
    }, 500);
  }, []);

  console.log(deviceType);

  return (
    <Flex
      flex={1}
      bg={'primary.1'}
      justifyContent={'center'}
      alignItems={'center'}>
      {/* <KrilaLogo /> */}
      <Text color={'white'} fontSize={'7xl'}>
        Krila
      </Text>
    </Flex>
  );
};

export default React.memo(SplashScreen);
