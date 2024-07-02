import {Text, VStack} from 'native-base';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

interface ReturnSelectProps {
  onChangeReturn: () => void;
}

function ReturnSelect({onChangeReturn}: ReturnSelectProps) {
  return (
    <TouchableWithoutFeedback onPress={onChangeReturn}>
      <VStack>
        <Text
          fontSize={{md: '14px', base: '10px'}}
          fontFamily={'Poppins-Regular'}
          mb={{base: '7px'}}
          color={'#7D8093'}>
          To
        </Text>
        <Text
          color={'primary.1'}
          fontSize={{md: '24px', base: '14px'}}
          fontFamily={'Spartan-Regular'}
          mb={{base: '2px'}}>
          Lagos LOS
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

export default ReturnSelect;
