import {Box, Flex, HStack, Text} from 'native-base';
import React from 'react';
import {GradientText} from '../TravelReimaginedScreen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {MobileOSType, isTablet} from '@constants/reusable';
import {useDeviceType} from '@src/components/hooks';

function FeatureDetail2() {
  const deviceType = useDeviceType();

  return (
    <Flex direction="column" mb={{md: '30px', base: '60px'}}>
      <HStack w="full" flexDirection={'row-reverse'}>
        <Box
          width={deviceType === 'tablet' ? 267 : 134}
          bg={'blue.100'}
          h={{base: '101px', md: '202px'}}></Box>
        <Flex
          flex={1}
          mr={MobileOSType === 'android' && isTablet ? 39.9 : 22}
          pt={MobileOSType === 'android' && isTablet ? 43 : 23}
          justifyContent={'flex-start'}
          flexDirection={'column'}>
          <Flex justifyContent={'flex-end'} alignItems={'flex-end'}>
            <GradientText
              style={{
                fontFamily: 'Spartan-Bold',
                fontWeight: 'bold',
                fontSize: deviceType === 'tablet' ? 32 : 14,
                lineHeight: deviceType === 'tablet' ? 55 : 20,
                textTransform: 'uppercase',
              }}>
              Earn Rewards
            </GradientText>
          </Flex>
          <Flex
            justifyContent={'flex-end'}
            alignItems={'flex-end'}
            mt={{base: '8px'}}>
            <Text
              fontFamily={'Poppins-Regular'}
              fontSize={{md: RFPercentage(1.8), base: '14px'}}
              lineHeight={deviceType === 'tablet' ? 32 : 16}
              color={'secondary.1'}
              fontWeight={'400'}>
              {`Automatically earn rewards\nwith every booking`}
            </Text>
          </Flex>
        </Flex>
      </HStack>
    </Flex>
  );
}

export default FeatureDetail2;
