import {Box, Flex, Image, Text} from 'native-base';
import React from 'react';

interface MiniHeaderProps {
  title: string;
  description: string;
}

function MiniHeader({title, description}: MiniHeaderProps) {
  return (
    <Box
      h={{md: '166px'}}
      w="full"
      borderRadius="2xl"
      mt={{md: '51px'}}
      overflow="hidden"
      position="relative">
      <Image
        source={require('@assets/images/app/mini_header.png')}
        alt="Mini Header"
        height="100%"
        width="100%"
        borderRadius="2xl"
      />

      <Flex
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p="4">
        <Text
          color="white"
          fontSize={{md: '40'}}
          fontWeight="bold"
          fontFamily={'Spartan-Bold'}>
          {title}
        </Text>
        <Text
          color="white"
          fontSize={{md: '16px'}}
          fontFamily={'Poppins-Regular'}>
          {description}
        </Text>
      </Flex>
    </Box>
  );
}

export default MiniHeader;
