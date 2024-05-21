import {Box, Flex, Text} from 'native-base';
import React from 'react';
import {GradientText} from '../TravelReimaginedScreen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {MobileOSType, isTablet} from '@constants/reusable';
import {
  Canvas,
  Fill,
  Image,
  ImageSVG,
  useImage,
  useSVG,
} from '@shopify/react-native-skia';

function FeatureDetail2() {
  const secondImage = useSVG(require('@assets/images/featuresImages/1.svg'));

  const image2 = useImage(require('@assets/images/featuresImages/2.png'));

  if (!secondImage) {
    return null;
  }

  return (
    <Flex direction="column" mb="30px">
      <Flex w="full" flexDirection={'row-reverse'}>
        <Box width={267} height={227}>
          <Canvas style={{flex: 1}}>
            <Image image={image2} x={0} y={0} width={267} height={227} />
          </Canvas>
        </Box>
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
                fontSize:
                  MobileOSType === 'android' && isTablet
                    ? RFPercentage(3.6)
                    : RFPercentage(3),
                lineHeight: 55,
                textTransform: 'uppercase',
              }}>
              Earn Rewards
            </GradientText>
          </Flex>
          <Flex justifyContent={'flex-end'} alignItems={'flex-end'}>
            <Text
              fontFamily={'Poppins-Regular'}
              fontSize={
                MobileOSType === 'android' && isTablet ? RFPercentage(1.8) : 10
              }
              lineHeight={isTablet ? '32' : '16'}
              color={'secondary.1'}
              fontWeight={'400'}>
              {`Automatically earn rewards\nwith every booking`}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default FeatureDetail2;
