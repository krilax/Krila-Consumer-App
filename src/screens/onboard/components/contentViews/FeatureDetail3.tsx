import {Box, Flex, HStack, Text} from 'native-base';
import React from 'react';
import {GradientText} from '../TravelReimaginedScreen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {MobileOSType, isTablet} from '@constants/reusable';
import {useDeviceType} from '@src/components/hooks';

function FeatureDetail3() {
  const deviceType = useDeviceType();

  return (
    <Flex direction="column">
      <HStack w="full" mb={'100px'} flexDirection={'row'} alignItems={'center'}>
        <Box
          width={deviceType === 'tablet' ? 267 : 134}
          bg={'blue.100'}
          h={{base: '101px', md: '202px'}}></Box>
        <Flex
          ml={MobileOSType === 'android' && isTablet ? 39.9 : 22}
          justifyContent={'flex-start'}
          flexDirection={'column'}>
          <Box>
            <GradientText
              style={{
                fontFamily: 'Spartan-Bold',
                fontWeight: 'bold',

                fontSize: deviceType === 'tablet' ? 32 : 14,
                lineHeight: deviceType === 'tablet' ? 55 : 20,
                textTransform: 'uppercase',
              }}>
              Redeem & Enjoy
            </GradientText>
          </Box>
          <Box>
            <Text
              fontFamily={'Poppins-Regular'}
              fontSize={{md: RFPercentage(1.8), base: '14px'}}
              lineHeight={deviceType === 'tablet' ? 32 : 16}
              mt={{base: '8px'}}
              color={'secondary.1'}
              fontWeight={'400'}>
              {`Use you rewards for exclusize\ndeals, upgrades and more!`}
            </Text>
          </Box>
        </Flex>
      </HStack>
    </Flex>
  );
}

export default FeatureDetail3;
