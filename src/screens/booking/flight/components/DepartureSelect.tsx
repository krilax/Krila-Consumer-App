import {Text, VStack} from 'native-base';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

interface DepartureSelectProps {
  onChangeDeparture: () => void;
}

function DepartureSelect({onChangeDeparture}: DepartureSelectProps) {
  return (
    <TouchableWithoutFeedback onPress={onChangeDeparture}>
      <VStack>
        <Text
          fontSize={{md: '14px', base: '10px'}}
          fontFamily={'Poppins-Regular'}
          mb={{base: '7px'}}
          color={'#7D8093'}>
          From
        </Text>

        <Text
          mb={{base: '2px'}}
          color={'primary.1'}
          fontFamily={'Spartan-Regular'}
          fontSize={{md: '24px', base: '14px'}}>
          Doha Doh
        </Text>
        <Text
          color="#7D8093"
          fontFamily={'Poppins-Regular'}
          fontSize={{md: '12px', base: '10px'}}>
          Hamad International Airport
        </Text>
      </VStack>
    </TouchableWithoutFeedback>
  );
}

export default DepartureSelect;
