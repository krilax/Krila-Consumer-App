import React from 'react';
import {View} from 'native-base';
import {StyleSheet} from 'react-native';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@constants/reusable';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Phone from './components/Phone';
import OTPin from '../authentication/OTPin';

function PhoneLoginScreen() {
  const translationX = useSharedValue(-WINDOW_WIDTH);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: translationX.value}],
  }));

  const Screens = [Phone, OTPin];

  return (
    <View style={styles.container}>
      <Animated.View style={StyleSheet.absoluteFill}>
        <Animated.View style={[styles.slides]}>
          {Screens.map((Screen, index) => (
            <Animated.View key={index} style={[styles.slide, animatedStyles]}>
              <Screen
                message="A 6 digit code was sent to your email address"
                user="+234 ********** 3565"
                authType="phone"
              />
            </Animated.View>
          ))}
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
  },
  slides: {
    width: WINDOW_WIDTH * 2,
    height: WINDOW_HEIGHT,
    flexDirection: 'row',
  },
  slide: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});

export default React.memo(PhoneLoginScreen);
