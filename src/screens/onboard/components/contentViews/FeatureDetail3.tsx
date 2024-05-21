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

function FeatureDetail3() {
  const thirdImage = useSVG(require('@assets/images/featuresImages/3.svg'));
  const image3 = useImage(require('@assets/images/featuresImages/3.png'));

  if (!thirdImage) {
    return null;
  }

  return (
    <Flex direction="column">
      <Flex w="full" mb={'100px'} flexDirection={'row'}>
        <Box width={200} height={216}>
          <Canvas style={{flex: 1}}>
            <Image
              image={image3}
              fit={'contain'}
              x={0}
              y={0}
              width={200}
              height={216}
            />
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
              Redeem & Enjoy
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
              {`Use you rewards for exclusize\ndeals, upgrades and more!`}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default FeatureDetail3;
