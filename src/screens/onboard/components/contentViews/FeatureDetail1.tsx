import {Box, Flex, Text} from 'native-base';
import React from 'react';
import {GradientText} from '../TravelReimaginedScreen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {MobileOSType, isTablet} from '@constants/reusable';
import {Canvas, Fill, ImageSVG, useSVG} from '@shopify/react-native-skia';

function FeatureDetail1() {
  const firstImage = useSVG(require('@assets/images/featuresImages/1.svg'));
  if (!firstImage) {
    return null;
  }

  return (
    <Flex direction="column" mb={'30px'}>
      <Flex w="full" mb={'30px'} flexDirection={'row'}>
        <Box width={267} height={202}>
          <Canvas style={{flex: 1}}>
            <ImageSVG svg={firstImage} x={0} y={0} width={267} height={202} />
          </Canvas>
        </Box>
        <Flex
          ml={MobileOSType === 'android' && isTablet ? 39.9 : 22}
          pt={MobileOSType === 'android' && isTablet ? 43 : 23}
          justifyContent={'flex-start'}
          flexDirection={'column'}>
          <Box>
            <GradientText
              style={{
                fontFamily: 'Spartan-Bold',
                fontWeight: 'bold',
                fontSize:
                  MobileOSType === 'android' && isTablet
                    ? RFPercentage(3.6)
                    : RFPercentage(3),
                lineHeight: 55,
                textTransform: 'uppercase',
              }}>
              Book your trip
            </GradientText>
          </Box>
          <Box>
            <Text
              fontFamily={'Poppins-Regular'}
              fontSize={
                MobileOSType === 'android' && isTablet ? RFPercentage(1.8) : 10
              }
              lineHeight={isTablet ? '32' : '16'}
              color={'secondary.1'}
              fontWeight={'400'}>
              {`Book flights, hotels and \nactivities -all within Krila`}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default FeatureDetail1;
