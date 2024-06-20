import {WINDOW_HEIGHT} from '@constants/reusable';
import {Box, Flex, Input, ScrollView, Text, View} from 'native-base';
import Animated, {
  Easing,
  clamp,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {createFilter} from 'react-native-search-filter';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {flightDestinations} from '@src/helpers/mocks/flight_destinations';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

interface FlightDestinationSelectionProps {
  destinationSelectionState: boolean;
  setDestinationSelectionState: Dispatch<SetStateAction<boolean>>;
}

const FlightDestinationSelection = ({
  destinationSelectionState,
  setDestinationSelectionState,
}: FlightDestinationSelectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

  const filteredDestinations = useMemo(() => {
    return flightDestinations.filter(createFilter(searchTerm, KEYS_TO_FILTERS));
  }, [flightDestinations, searchTerm]);

  const searchUpdated = useCallback((term: string) => {
    setIsLoading(true);
    setSearchTerm(term);
    setIsLoading(false);
  }, []);

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
            runOnJS(setDestinationSelectionState)(false);
          },
        );
      } else {
        translateY.value = withTiming(WINDOW_HEIGHT * 0.3, {
          duration: 200,
          easing: Easing.linear,
        });
      }
    });

  useEffect(() => {
    if (destinationSelectionState) {
      translateY.value = withTiming(WINDOW_HEIGHT * 0.3, {duration: 300});
    }
  }, [destinationSelectionState]);

  return (
    <GestureDetector {...{gesture}}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Flex
          py={'10px'}
          w={'100%'}
          bg={'white'}
          alignItems={'center'}
          justifyContent={'center'}>
          <Box h={'1'} w={'10%'} bg={'secondary.1'} borderRadius={'10px'} />
        </Flex>

        <Flex flex={'1'}>
          <View style={styles.header}>
            <View style={styles.headerIndicator} />
          </View>
          <Box
            px={'27px'}
            borderBottomWidth={0.5}
            borderBottomColor={'secondary.1'}>
            <Input
              onChangeText={searchUpdated}
              placeholder="Enter your departure city"
              borderWidth={'0'}
              color={'primary.1'}
              py={'16px'}
              _focus={{borderWidth: 0}}
              style={styles.input}
            />
          </Box>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="primary.1" />
            </View>
          ) : (
            <ScrollView style={styles.scrollView}>
              {filteredDestinations.map(destination => (
                <TouchableOpacity key={destination.id} style={styles.item}>
                  <View>
                    <Text style={styles.countryText}>
                      {destination.country}
                    </Text>
                    <View style={styles.detailsContainer}>
                      <Text style={styles.iataCodeText}>
                        {destination.airportCode.iataCode}
                      </Text>
                      <Text style={styles.dotText}>.</Text>
                      <Text style={styles.airportNameText}>
                        {destination.airportCode.name}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </Flex>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    height: WINDOW_HEIGHT * 0.7,
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  header: {
    width: '100%',
    height: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIndicator: {
    height: 2,
    width: '25%',
    backgroundColor: 'secondary.1',
    borderRadius: 10,
  },
  input: {
    borderWidth: 0,
    borderBottomColor: '#c4c4c4',
    fontSize: 15,
    fontFamily: 'Spartan-Regular',
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 32,
    marginTop: 11,
  },
  item: {
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 10,
  },
  countryText: {
    color: 'primary.1',
    fontSize: 12,
    fontFamily: 'Poppins-Light',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  iataCodeText: {
    color: 'primary.1',
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
  },
  dotText: {
    fontSize: 10,
  },
  airportNameText: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: 'primary.1',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FlightDestinationSelection;
