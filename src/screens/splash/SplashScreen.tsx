import React, {useEffect} from 'react';
import {View} from 'native-base';
import {
  Canvas,
  ImageSVG,
  Group,
  fitbox,
  rect,
} from '@shopify/react-native-skia';
import {Dimensions} from 'react-native';
import splashKrilaSvg from '@assets/svg/splashScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@src/routes';

type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SplashScreen'
>;

const {width, height} = Dimensions.get('window');

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const src = rect(0, 0, splashKrilaSvg.width(), splashKrilaSvg.height());
  const dst = rect(0, 0, width, height);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnboardScreen');
    }, 500);
  }, []);

  return (
    <View flex={1}>
      <Canvas style={{flex: 1}}>
        <Group transform={fitbox('fill', src, dst)}>
          <ImageSVG
            svg={splashKrilaSvg}
            x={0}
            y={0}
            width={834}
            height={1194}
          />
        </Group>
      </Canvas>
    </View>
  );
};

export default React.memo(SplashScreen);
