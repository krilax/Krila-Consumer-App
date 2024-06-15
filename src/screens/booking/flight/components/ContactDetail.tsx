import {Text, VStack} from 'native-base';
import React from 'react';

interface ContactDetailProps {
  title: string;
  value: string;
}

function ContactDetail({title, value}: ContactDetailProps) {
  return (
    <VStack
      space={{md: '13px', base: '5px'}}
      mb={{base: '23px', md: '0px'}}
      alignItems={'flex-start'}>
      <Text
        color={'primary.1'}
        fontFamily={'Poppins-Regular'}
        fontSize={{md: '10px', base: '10px'}}>
        {title}
      </Text>
      <Text
        color={'primary.1'}
        fontFamily={'Poppins-Medium'}
        fontSize={{md: '12px', base: '10px'}}>
        {value}
      </Text>
    </VStack>
  );
}

export default ContactDetail;
