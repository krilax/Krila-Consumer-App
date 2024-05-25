import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@constants/reusable';
import {View} from 'native-base';
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import SignupForm from './components/SignupForm';
import SignupPinForm from './components/SignupPinForm';

function SignupScreen() {
  const onSwitch = useCallback((step: string) => {}, []);

  const index = useSharedValue(0);
  const velocityX = useSharedValue(0);
  const translationX = useSharedValue(0);
  const prevTranslationX = useSharedValue(0);
  const isGestureActive = useSharedValue(false);

  const Screens = [SignupForm, SignupPinForm];

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: WINDOW_WIDTH * -1}],
  }));

  const gesture = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationX.value = translationX.value;
      isGestureActive.value = true;
    })
    .onUpdate(event => {
      // translationX.value += event.translationX;
      // const clampedTranslationX = clamp(
      //   prevTranslationX.value + event.translationX,
      //   -maxTranslateX - 10,
      //   0,
      // );
      // translationX.value = clampedTranslationX;
      // velocityX.value = event.velocityX;
    })
    .onEnd(() => {
      // const clampedX = clamp(translationX.value, -maxTranslateX, 0);
      // const newIndex = Math.round(-clampedX / width);
      // index.value = clamp(newIndex, 0, onboardData.length - 1);
      // translationX.value = withTiming(
      //   -index.value * width,
      //   {
      //     duration: 200,
      //     easing: Easing.linear,
      //     reduceMotion: ReduceMotion.System,
      //   },
      //   () => {
      //     index.value = newIndex;
      //     prevTranslationX.value = translationX.value;
      //   },
      // );
      // isGestureActive.value = false;
    })
    .onFinalize(() => {
      // isGestureActive.value = false;
    })
    .runOnJS(true);

  return (
    <View style={styles.container}>
      <GestureDetector {...{gesture}}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <Animated.View style={[styles.slides]}>
            {Screens.map((Screen, index) => (
              <Animated.View key={index} style={[styles.slide, animatedStyles]}>
                <Screen />
              </Animated.View>
            ))}
          </Animated.View>
        </Animated.View>
      </GestureDetector>
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

export default React.memo(SignupScreen);
