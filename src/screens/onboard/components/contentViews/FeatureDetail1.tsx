import {Box, Flex, HStack, Text} from 'native-base';
import React from 'react';
import {GradientText} from '../TravelReimaginedScreen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {MobileOSType, isTablet} from '@constants/reusable';
import {useDeviceType} from '@src/components/hooks';
import FeatureImageOne from '@assets/images/featuresImages/1.svg';
import {responsiveFontSize} from '@src/helpers/utlils';

function FeatureDetail1() {
  const deviceType = useDeviceType();

  return (
    <Flex direction="column" mb={{md: '30px', base: '60px'}}>
      <HStack
        w="full"
        mt={MobileOSType === 'android' && isTablet ? 43 : 23}
        mb={'30px'}
        flexDirection={'row'}
        alignItems={'center'}
        overflow={'hidden'}>
        <Box
          width={deviceType === 'tablet' ? 267 : 134}
          h={{base: '101px', md: '202px'}}>
          <FeatureImageOne height={'100%'} width={'100%'} />
        </Box>
        <Flex
          flex={1}
          w={'full'}
          ml={MobileOSType === 'android' && isTablet ? 39.9 : 22}
          justifyContent={'flex-start'}
          flexDirection={'column'}>
          <Box>
            <GradientText
              style={{
                fontFamily: 'Spartan-Bold',
                fontSize: deviceType === 'tablet' ? 32 : 14,
                lineHeight: deviceType === 'tablet' ? 55 : 20,
                textTransform: 'uppercase',
              }}>
              Book your trip
            </GradientText>
          </Box>
          <Box>
            <Text
              fontFamily={'Poppins-Regular'}
              fontSize={{md: RFPercentage(1.8), base: responsiveFontSize(11)}}
              lineHeight={deviceType === 'tablet' ? 32 : 16}
              color={'secondary.1'}
              mt={{base: '8px'}}>
              {`Book flights, hotels and \nactivities -all within Krila`}
            </Text>
          </Box>
        </Flex>
      </HStack>
    </Flex>
  );
}

export default FeatureDetail1;
