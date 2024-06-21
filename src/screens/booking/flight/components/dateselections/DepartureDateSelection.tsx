import React, {useCallback, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Box, Flex, Text} from 'native-base';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {nativeBaseTheme} from '@constants/theme';
import {WINDOW_HEIGHT} from '@constants/reusable';

interface DepartureDateSelectionProps {
  departureDateSelectionState: boolean;
  setDepartureSelectionState: (state: boolean) => void;
}

const DepartureDateSelection = React.memo(
  ({
    departureDateSelectionState,
    setDepartureSelectionState,
  }: DepartureDateSelectionProps) => {
    const translateY = useSharedValue(WINDOW_HEIGHT);
    const prevTranslationY = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{translateY: translateY.value}],
    }));

    const gesture = Gesture.Pan()
      .minDistance(1)
      .onStart(() => {
        prevTranslationY.value = translateY.value;
      })
      .onUpdate(event => {
        const clampedTranslationY = Math.min(
          Math.max(
            prevTranslationY.value + event.translationY,
            WINDOW_HEIGHT * 0.3,
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
              runOnJS(setDepartureSelectionState)(false);
            },
          );
        } else {
          translateY.value = withTiming(WINDOW_HEIGHT * 0.3, {
            duration: 200,
            easing: Easing.linear,
          });
        }
      });

    const getDisabledDatesBeforeToday = useCallback(() => {
      const disabledDates: {[key: string]: {disabled: boolean}} = {};
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();

      for (let m = 1; m < month; m++) {
        const daysInMonth = new Date(year, m, 0).getDate();
        for (let d = 1; d <= daysInMonth; d++) {
          const date = `${year}-${m < 10 ? '0' + m : m}-${
            d < 10 ? '0' + d : d
          }`;
          disabledDates[date] = {disabled: true};
        }
      }

      for (let d = 1; d < day; d++) {
        const date = `${year}-${month < 10 ? '0' + month : month}-${
          d < 10 ? '0' + d : d
        }`;
        disabledDates[date] = {disabled: true};
      }

      return disabledDates;
    }, []);

    useEffect(() => {
      if (departureDateSelectionState) {
        translateY.value = withTiming(WINDOW_HEIGHT * 0.4, {duration: 300});
      }
    }, [departureDateSelectionState]);

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
          <Box px="27px">
            <Text
              color="primary.1"
              textAlign="center"
              mt={{base: '20px'}}
              mb={{base: '13px'}}
              fontFamily="Poppins-Regular"
              fontSize={{base: '16px'}}>
              Travel Dates
            </Text>
            <Box
              pb="20px"
              borderBottomWidth="1"
              borderBottomColor="secondary.1">
              <Text
                color="primary.1"
                fontSize={{base: '12px'}}
                fontFamily="Spartan-Regular">
                Select your travel date
              </Text>
            </Box>
            <Box mt={{base: '12px'}}>
              <Calendar
                markedDates={{
                  ...getDisabledDatesBeforeToday(),
                }}
                theme={{
                  selectedDayTextColor: '#fff',
                  arrowColor: nativeBaseTheme.colors.primary[1],
                  todayBackgroundColor: nativeBaseTheme.colors.primary[1],
                  selectedDayBackgroundColor: nativeBaseTheme.colors.primary[1],
                  todayTextColor: '#fff',
                  textDayFontSize: 11,
                  textMonthFontSize: 11,
                  textDayHeaderFontSize: 11,
                  textDayFontFamily: 'Poppins-Regular',
                  textMonthFontFamily: 'Poppins-Regular',
                  textDayHeaderFontFamily: 'Poppins-Regular',
                  // @ts-ignore
                  'stylesheet.calendar.header': {
                    monthText: {
                      fontFamily: 'Poppins-Regular',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontSize: 16,
                      backgroundColor: nativeBaseTheme.colors.primary[1],
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20,
                      borderRadius: 20,
                      color: '#fff',
                    },
                  },
                  'stylesheet.calendar.main': {
                    dayText: {
                      fontSize: 16,
                      fontFamily: 'Poppins-Regular',
                      color: '#2d4150',
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </Flex>
      </Animated.View>
    );
  },
);

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

export default DepartureDateSelection;
