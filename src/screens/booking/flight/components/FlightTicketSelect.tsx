import {Text, VStack} from 'native-base';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

interface FlightTicketSelectProps {
  onOpenTicketSelect: (state: boolean) => void;
}

function FlightTicketSelect({onOpenTicketSelect}: FlightTicketSelectProps) {
  return (
    <TouchableWithoutFeedback onPress={() => onOpenTicketSelect(true)}>
      <VStack alignItems={'flex-end'}>
        <Text
          fontSize={{md: '14px', base: '10px'}}
          fontFamily={'Poppins-Regular'}
          mb={{base: '7px'}}
          color={'#7D8093'}>
          Ticket Class
        </Text>
        <Text
          color={'primary.1'}
          fontSize={{md: '24px', base: '14px'}}
          fontFamily={'Spartan-Regular'}
          mb={{base: '2px'}}>
          Economy
        </Text>
      </VStack>
    </TouchableWithoutFeedback>
  );
}

export default FlightTicketSelect;
