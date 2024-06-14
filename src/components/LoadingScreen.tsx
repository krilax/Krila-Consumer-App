import {WINDOW_HEIGHT} from '@constants/reusable';
import {Box, Flex, Image, Text, View} from 'native-base';
import React from 'react';

function LoadingScreen() {
  return (
    <View
      flex={'1'}
      bg={'white'}
      px={{base: '27px', md: '29px'}}
      pb={{base: '46px', md: '57px'}}
      pt={{md: '30px', base: '60px'}}>
      <Box
        h={WINDOW_HEIGHT * 0.6}
        w={'full'}
        bg={'red.100'}
        borderRadius={'10px'}>
        <Image
          source={require('@assets/images/app/loadingimg.png')}
          alt="Curating"
          style={{objectFit: 'fill'}}
          width={'100%'}
          height={'100%'}
        />
      </Box>

      <Box w={'full'} mt={{base: '29px'}}>
        <Text
          color={'primary.1'}
          fontFamily={'Poppins-Light'}
          fontSize={{base: '28px', md: '48px'}}>
          Curating your perfect trip, one detail at a time.
        </Text>
        <Text
          color={'secondary.1'}
          mt={{base: '11px', md: '19px'}}
          fontFamily={'Poppins-Regular'}
          fontSize={{base: '20px', md: '20px'}}>
          Loading results...
        </Text>
      </Box>
      <Flex flex={'1'} justifyContent={'flex-end'} alignItems={'flex-end'}>
        <Box width={'79px'} height={'50px'}>
          <Image
            source={require('@assets/images/app/KrilaLogoBlue.png')}
            alt="Krila"
            width={'100%'}
            height={'100%'}
            style={{
              objectFit: 'fill',
            }}
          />
        </Box>
      </Flex>
    </View>
  );
}

export default LoadingScreen;
