import {Text, VStack} from 'native-base';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

interface DateReturnSelectProps {
  onChangeReturnDate: (state: boolean) => void;
}

function DateReturnSelect({onChangeReturnDate}: DateReturnSelectProps) {
  return (
    <TouchableWithoutFeedback onPress={() => onChangeReturnDate(true)}>
      <VStack alignItems={'flex-end'}>
        <Text
          fontSize={{md: '14px', base: '10px'}}
          fontFamily={'Poppins-Regular'}
          mb={{base: '7px'}}
          color={'#7D8093'}>
          Return
        </Text>
        <Text
          mb={{base: '2px'}}
          color={'primary.1'}
          fontFamily={'Spartan-Regular'}
          fontSize={{md: '24px', base: '14px'}}>
          May 17, 2024
        </Text>
        <Text
          color="#7D8093"
          fontFamily={'Poppins-Regular'}
          fontSize={{md: '12px', base: '10px'}}>
          Friday
        </Text>
      </VStack>
    </TouchableWithoutFeedback>
  );
}

export default DateReturnSelect;
