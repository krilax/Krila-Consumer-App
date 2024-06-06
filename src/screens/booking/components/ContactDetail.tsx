import {Text, VStack} from 'native-base';
import React from 'react';

interface ContactDetailProps {
  title: string;
  value: string;
}

function ContactDetail({title, value}: ContactDetailProps) {
  return (
    <VStack space={'13px'}>
      <Text
        color={'primary.1'}
        fontFamily={'Poppins-Regular'}
        fontSize={{md: '10px'}}>
        {title}
      </Text>
      <Text
        color={'primary.1'}
        fontFamily={'Poppins-Medium'}
        fontSize={{md: '12px'}}>
        {value}
      </Text>
    </VStack>
  );
}

export default ContactDetail;
