import React, {Suspense} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@src/routes';
import {Box, Button, Text, View} from 'native-base';
import {ActivityIndicator, Dimensions, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  clamp,
  ReduceMotion,
  Easing,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@constants/reusable';

const TravelReimaginedScreen = React.lazy(
  () => import('./components/TravelReimaginedScreen'),
);
const FeaturesScreen = React.lazy(() => import('./components/FeaturesScreen'));
const FeatureDetail1 = React.lazy(
  () => import('./components/contentViews/FeatureDetail1'),
);
const FeatureDetail2 = React.lazy(
  () => import('./components/contentViews/FeatureDetail2'),
);
const FeatureDetail3 = React.lazy(
  () => import('./components/contentViews/FeatureDetail3'),
);

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
      list: [<FeatureDetail1 />, <FeatureDetail2 />, <FeatureDetail3 />],
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

const OnboardScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const index = useSharedValue(0);
  const velocityX = useSharedValue(0);
  const translationX = useSharedValue(0);
  const prevTranslationX = useSharedValue(0);
  const isGestureActive = useSharedValue(false);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: translationX.value}],
  }));

  const maxTranslateX = WINDOW_WIDTH * (onboardData.length - 1);

  const gesture = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationX.value = translationX.value;
      isGestureActive.value = true;
    })
    .onUpdate(event => {
      const clampedTranslationX = clamp(
        prevTranslationX.value + event.translationX,
        -maxTranslateX - 10,
        0,
      );
      translationX.value = clampedTranslationX;
      velocityX.value = event.velocityX;
    })
    .onEnd(() => {
      const clampedX = clamp(translationX.value, -maxTranslateX, 0);
      const newIndex = Math.round(-clampedX / WINDOW_WIDTH);
      index.value = clamp(newIndex, 0, onboardData.length - 1);

      translationX.value = withTiming(
        -index.value * WINDOW_WIDTH,
        {
          duration: 200,
          easing: Easing.linear,
          reduceMotion: ReduceMotion.System,
        },
        () => {
          index.value = newIndex;
          prevTranslationX.value = translationX.value;
        },
      );
      isGestureActive.value = false;
    })
    .onFinalize(() => {
      isGestureActive.value = false;
    })
    .runOnJS(true);

  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#" />}>
      <View style={styles.container}>
        <GestureDetector {...{gesture}}>
          <Animated.View style={StyleSheet.absoluteFill}>
            <Animated.View style={[styles.slides, animatedStyles]}>
              {onboardData.map(
                ({color, metadata, detail, title, Screen}, index) => (
                  <Animated.View style={[styles.slide]} key={index}>
                    <Screen
                      {...{
                        index,
                        color,
                        metadata,
                        detail,
                        title,
                        ...navigation,
                      }}
                    />
                  </Animated.View>
                ),
              )}
            </Animated.View>
          </Animated.View>
        </GestureDetector>

        <Box w="full" bg="red.100" zIndex={1} position={'absolute'} bottom={10}>
          <Button>Clicke me</Button>
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
    width: WINDOW_WIDTH * onboardData.length,
    height: WINDOW_HEIGHT,
    flexDirection: 'row',
  },
  slide: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: WINDOW_WIDTH,
    height: undefined,
  },
});

export default React.memo(OnboardScreen);
