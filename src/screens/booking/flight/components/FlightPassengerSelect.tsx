import {WINDOW_HEIGHT} from '@constants/reusable';
import {Text, VStack} from 'native-base';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

interface FlightPassengerSelectProps {
  onChangePassengerSelectState: (state: boolean) => void;
}

function FlightPassengerSelect({
  onChangePassengerSelectState,
}: FlightPassengerSelectProps) {
  return (
    <TouchableWithoutFeedback
      onPress={() => onChangePassengerSelectState(true)}>
      <VStack>
        <Text
          fontSize={{md: '14px', base: '10px'}}
          fontFamily={'Poppins-Regular'}
          mb={{base: '7px'}}
          color={'#7D8093'}>
          Passengers
        </Text>
        <Text
          color={'primary.1'}
          fontSize={{md: '24px', base: '14px'}}
          fontFamily={'Spartan-Regular'}
          mb={{base: '2px'}}>
          1 Passenger
        </Text>
        <Text
          color="#7D8093"
          fontFamily={'Poppins-Regular'}
          fontSize={{md: '12px', base: '10px'}}>
          1 Adult
        </Text>
      </VStack>
    </TouchableWithoutFeedback>
  );
}

export default FlightPassengerSelect;
