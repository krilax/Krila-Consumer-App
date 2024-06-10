import React, {useEffect, useRef, useState} from 'react';
import {
  Canvas,
  Fill,
  Group,
  Image,
  ImageSVG,
  Path,
  useImage,
  useSVG,
} from '@shopify/react-native-skia';
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
  useAnimatedProps,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {WINDOW_HEIGHT, WINDOW_WIDTH, useHp} from '@constants/reusable';
import Svg, {Path as SvgPath} from 'react-native-svg';
import {Text} from 'native-base';

const AnimatedPath = Animated.createAnimatedComponent(SvgPath);

function FeatureContentBackground() {
  const pathString =
    'M310.358 23.3496C409.669 24.2377 518.302 -19.8729 592.642 46.049C677.996 121.737 726.492 250.338 687.144 357.469C650.499 457.238 520.291 462.829 423.5 506.56C332.084 547.862 241.937 644.904 152.794 598.893C64.1356 553.132 95.7933 422.821 72.9525 325.625C49.746 226.873 -40.9599 120.695 21.677 40.943C84.3634 -38.8722 208.935 22.4426 310.358 23.3496Z';

  const useLoop = ({duration}: {duration: number}) => {
    const progress = useSharedValue(0);

    useEffect(() => {
      progress.value = withRepeat(withTiming(1, {duration}), -1, true);
      return () => {
        cancelAnimation(progress);
      };
    }, [duration, progress]);

    return progress;
  };

  const beatEasing = (x: number): number => {
    'worklet';
    const c4 = (2 * Math.PI) / 3;
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
  };

  const size = 256;
  const progress = useLoop({duration: 6000});

  const animatedProps: any = useAnimatedProps(() => {
    const r = progress.value * size * 0.33;
    const c = size - r;
    return {
      r,
      c,
    };
  });

  const animatedStyle = useAnimatedStyle(() => {
    const r = progress.value * size * 0.33;
    const c = size - r;
    return {
      transform: [{translateX: r}],
    };
  });

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.box]}>
        {/* <Canvas style={{flex: 1, transform: [{scale: 1}]}}>
          <Path path={pathString} color="rgba(242, 242, 242, 0.46)" />
        </Canvas> */}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    height: WINDOW_HEIGHT * 0.6,
    width: WINDOW_WIDTH * 0.9,
    justifyContent: 'center',
    marginTop: useHp(12),
  },
});

export default FeatureContentBackground;
