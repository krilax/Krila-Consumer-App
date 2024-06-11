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
import SignupPinForm from '../authentication/OTPin';
import {RootStackParamList} from '@src/routes';
import {StackNavigationProp} from '@react-navigation/stack';

interface SignupScreenProps {
  message: string;
  user: string;
  authType: 'phone' | 'email';
  navigation: StackNavigationProp<RootStackParamList>;
}

function SignupScreen({navigation}: SignupScreenProps) {
  const onSwitch = useCallback((step: string) => {}, []);

  const index = useSharedValue(0);
  const velocityX = useSharedValue(0);
  const translationX = useSharedValue(-WINDOW_WIDTH);
  // SignupPinForm
  const Screens = [SignupForm, SignupPinForm];

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: translationX.value}],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={StyleSheet.absoluteFill}>
        <Animated.View style={[styles.slides]}>
          {Screens.map((Screen, index) => (
            <Animated.View key={index} style={[styles.slide, animatedStyles]}>
              <Screen
                message={'A 4 digit code was sent to your email address'}
                user={'sam@thelle.io'}
                authType={'phone'}
                navigation={navigation}
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

export default React.memo(SignupScreen);
