import {WINDOW_HEIGHT} from '@constants/reusable';
import {Box, Flex, Text} from 'native-base';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

interface TicketSelectionProps {
  ticketSelectionState: boolean;
  onChangeTicketSelectState: (state: boolean) => void;
}

const TicketSelection = ({
  ticketSelectionState,
  onChangeTicketSelectState,
}: TicketSelectionProps) => {
  const translateY = useSharedValue(WINDOW_HEIGHT);
  const prevTranslationY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const KEYS_TO_FILTERS = [
    'airportCode.iataCode',
    'country',
    'airportCode.name',
  ];

  const gesture = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationY.value = translateY.value;
    })
    .onUpdate(event => {
      const clampedTranslationY = Math.min(
        Math.max(
          prevTranslationY.value + event.translationY,
          WINDOW_HEIGHT * 0.4,
        ),
        WINDOW_HEIGHT,
      );
      translateY.value = clampedTranslationY;
    })
    .onEnd(() => {
      if (translateY.value > WINDOW_HEIGHT * 0.5) {
        translateY.value = withTiming(
          WINDOW_HEIGHT,
          {
            duration: 200,
            easing: Easing.linear,
          },
          () => {
            runOnJS(onChangeTicketSelectState)(false);
          },
        );
      } else {
        translateY.value = withTiming(WINDOW_HEIGHT * 0.4, {
          duration: 200,
          easing: Easing.linear,
        });
      }
    });

  useEffect(() => {
    if (ticketSelectionState) {
      translateY.value = withTiming(WINDOW_HEIGHT * 0.4, {duration: 300});
    }
  }, [ticketSelectionState]);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Flex flex={1}>
        <GestureDetector {...{gesture}}>
          <Flex
            py="10px"
            w="100%"
            bg="white"
            alignItems="center"
            justifyContent="center">
            <Box h="1" w="20%" bg="secondary.1" borderRadius="10px" />
          </Flex>
        </GestureDetector>
        <Box px="27px" mt="20px">
          <Box pb="20px" borderBottomWidth="1" borderBottomColor="secondary.1">
            <Text
              color="primary.1"
              fontSize={{base: '12px'}}
              fontFamily="Spartan-Regular">
              Select Ticket Class
            </Text>
          </Box>
          <Box mt={{base: '12px'}}></Box>
        </Box>
      </Flex>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    height: WINDOW_HEIGHT * 0.6,
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default TicketSelection;
