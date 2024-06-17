import {Box, Flex, HStack, Text} from 'native-base';
import React from 'react';
import {GradientText} from '../TravelReimaginedScreen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {MobileOSType, isTablet} from '@constants/reusable';
import {useDeviceType} from '@src/components/hooks';
import FeatureImageThree from '@assets/images/featuresImages/3.svg';
import {responsiveFontSize} from '@src/helpers/utlils';

function FeatureDetail3() {
  const deviceType = useDeviceType();

  return (
    <Flex direction="column">
      <HStack w="full" mb={'100px'} flexDirection={'row'} alignItems={'center'}>
        <Box
          width={deviceType === 'tablet' ? 267 : 134}
          h={{base: '101px', md: '202px'}}>
          <FeatureImageThree height={'100%'} width={'100%'} />
        </Box>
        <Flex
          flex={'1'}
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
              Redeem & Enjoy
            </GradientText>
          </Box>
          <Box>
            <Text
              fontFamily={'Poppins-Regular'}
              fontSize={{md: RFPercentage(1.8), base: responsiveFontSize(11)}}
              lineHeight={deviceType === 'tablet' ? 32 : 16}
              mt={{base: '8px'}}
              color={'secondary.1'}>
              {`Use you rewards for exclusize\ndeals, upgrades and more!`}
            </Text>
          </Box>
        </Flex>
      </HStack>
    </Flex>
  );
}

export default FeatureDetail3;
