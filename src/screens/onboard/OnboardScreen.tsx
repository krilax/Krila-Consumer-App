import React, {Suspense, useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@src/routes';
import {Box, Flex, HStack, Text, View} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  clamp,
  Easing,
  withSpring,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@constants/reusable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoadingScreen} from '@src/components';

const TravelReimaginedScreen = React.lazy(
  () => import('./components/TravelReimaginedScreen'),
);
const FeaturesScreen = React.lazy(() => import('./components/FeaturesScreen'));
const ExploreScreen = React.lazy(() => import('./components/ExploreScreen'));

type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OnboardScreen'
>;

interface OnboardDataInterface {
  metadata: any;
  title: string;
  detail: string;
  color: string;
  Screen: React.FC<any>;
}

const onboardData: OnboardDataInterface[] = [
  {
    metadata: {
      img: '',
    },
    title: 'Travel \nReimagined',
    detail:
      'Krila streamlines your travel planning with \ncutting-edge technology. Secure and \neffortless bookings, powered by Web3.',
    color: 'red',
    Screen: TravelReimaginedScreen,
  },
  {
    metadata: {
      list: [],
    },
    title: 'TURN EVERY TRIP \nINTO A REWARD',
    detail:
      'Earn rewards with every flight, hotel, and activity you \nbook.  Use your rewards for discounts, exclusive experiences, and more!',
    color: 'yellow',
    Screen: FeaturesScreen,
  },
  {
    metadata: {
      list: [''],
    },
    title: 'EXPLORE YOUR  \nWORLD WITH KRILA',
    detail:
      'Explore the world with ease. Search for flights, discover unique hotels, and book unforgettable activities - all within Krila.',
    color: 'blue',
    Screen: ExploreScreen,
  },
];

const AUTO_SWITCH_INTERVAL = 10000;
const OnboardScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const index = useSharedValue(1);
  const isGestureActive = useSharedValue(false);
  const shouldAutoSwitch = useSharedValue(true);
  const translationX = useSharedValue(0);
  const prevTranslationX = useSharedValue(0);
  const screensOpacity = onboardData.map(() =>
    useSharedValue(index.value === 0 ? 1 : 1),
  );
  const screensZIndex = onboardData.map(() => useSharedValue(0));

  const maxTranslateX = WINDOW_WIDTH * (onboardData.length - 1);

  const gesture = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationX.value = translationX.value;
      isGestureActive.value = true;
      isGestureActive.value = true;
      shouldAutoSwitch.value = false;
    })
    .onUpdate(event => {
      const clampedTranslationX = clamp(
        prevTranslationX.value + event.translationX,
        -maxTranslateX - 10,
        0,
      );
      translationX.value = clampedTranslationX;
    })
    .onEnd(() => {
      isGestureActive.value = false;
      shouldAutoSwitch.value = true;

      const newTranslationX =
        Math.round(translationX.value / WINDOW_WIDTH) * WINDOW_WIDTH;
      translationX.value = withTiming(newTranslationX, {
        duration: 200,
        easing: Easing.linear,
      });

      const newIndex = -newTranslationX / WINDOW_WIDTH;
      index.value = clamp(newIndex, 0, onboardData.length - 1);
    })
    .onFinalize(() => {
      isGestureActive.value = false;
    })
    .runOnJS(true);
  const autoSwipe = () => {
    if (!isGestureActive.value && shouldAutoSwitch.value) {
      const nextIndex = (index.value + 1) % onboardData.length;
      navigateToIndex(nextIndex);
    }
  };

  const navigateToIndex = (newIndex: number) => {
    shouldAutoSwitch.value = false;
    index.value = clamp(newIndex, 0, onboardData.length - 1);
    setTimeout(() => {
      shouldAutoSwitch.value = true;
    }, AUTO_SWITCH_INTERVAL);
  };

  const animatedStylesArray = onboardData.map((_, idx) =>
    useAnimatedStyle(() => ({
      opacity: withTiming(idx === index.value ? screensOpacity[idx].value : 0, {
        duration: 200,
        easing: Easing.linear,
      }),
      zIndex: withTiming(screensZIndex[idx].value, {
        duration: 100,
        easing: Easing.linear,
      }),
    })),
  );

  const animatedCircleStylesArray = onboardData.map((_, idx) =>
    useAnimatedStyle(() => ({
      backgroundColor: index.value === idx ? '#03045E' : '#D9D9D9',
      transform: [
        {
          scale: withSpring(index.value === idx ? 1.2 : 1, {
            damping: 10,
            stiffness: 100,
          }),
        },
      ],
    })),
  );

  const onNavigate = (route: keyof RootStackParamList) => {
    navigation.navigate(route);
  };

  const markOnboardingComplete = async () => {
    try {
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      onNavigate('SignupScreen');
    } catch (error) {
      console.error('Error setting onboarding completion status:', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(autoSwipe, AUTO_SWITCH_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <View style={styles.container}>
        <GestureDetector {...{gesture}}>
          <Animated.View style={StyleSheet.absoluteFill}>
            <Animated.View style={[styles.slides]}>
              {onboardData.map(
                ({color, metadata, detail, title, Screen}, idx) => {
                  return (
                    <Animated.View
                      style={[styles.slide, animatedStylesArray[idx]]}
                      key={idx}>
                      <Screen
                        {...{
                          index: idx,
                          color,
                          metadata,
                          detail,
                          title,
                          ...navigation,
                        }}
                      />
                    </Animated.View>
                  );
                },
              )}
            </Animated.View>
          </Animated.View>
        </GestureDetector>

        <Box
          w="full"
          zIndex={1}
          position={'absolute'}
          bottom={10}
          px={{base: '27px', md: '30px'}}>
          <HStack
            w="full"
            justifyContent={'flex-end'}
            position={'relative'}
            alignItems={'center'}>
            <Flex
              flex={1}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'row'}>
              {onboardData.map((_, idx) => {
                return (
                  <TouchableOpacity
                    key={idx}
                    onPress={() => navigateToIndex(idx)}>
                    <Animated.View
                      style={[styles.circle, animatedCircleStylesArray[idx]]}
                    />
                  </TouchableOpacity>
                );
              })}
            </Flex>
            <Flex
              width={WINDOW_WIDTH * 0.2}
              position={'absolute'}
              right={{md: '59px'}}
              bottom={'0'}
              justifyContent={'flex-end'}
              alignItems={'flex-end'}>
              <TouchableOpacity onPress={markOnboardingComplete}>
                <Text
                  color={'black'}
                  fontFamily={'Poppins-SemiBold'}
                  fontSize={{md: '20px', base: '14px'}}>
                  Skip
                </Text>
              </TouchableOpacity>
            </Flex>
          </HStack>
        </Box>
      </View>
    </Suspense>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
  },
  slides: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    flexDirection: 'row',
  },
  slide: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    position: 'absolute',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: WINDOW_WIDTH,
    height: undefined,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});

export default React.memo(OnboardScreen);
