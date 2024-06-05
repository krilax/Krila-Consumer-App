import {
  MobileOSType,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  isMobile,
  isTablet,
} from '@constants/reusable';
import {Box, Flex, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import FeatureContent from './contentViews/FeatureContent';
import Animated from 'react-native-reanimated';
import FeatureContentBackground from './contentViews/FeatureContentBackground';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {GradientText} from './TravelReimaginedScreen';

interface FeaturesScreenProps {
  metadata: any;
  detail: string;
  title: string;
}

function FeaturesScreen({metadata, title, detail}: FeaturesScreenProps) {
  return (
    <Animated.View style={{flex: 1}}>
      <Flex flex={1}>
        <View style={styles.backView}>
          <FeatureContentBackground />
        </View>
        <Flex
          style={[
            styles.overlay,
            {
              height: WINDOW_HEIGHT,
              justifyContent: 'flex-start',
              padding: 65,
            },
          ]}>
          <FeatureContent {...{title, detail, metadata}} />

          <Box w="full" mt={!isMobile ? 42 : 30}>
            <Box>
              <GradientText
                style={{
                  fontFamily: 'Spartan-Regular',
                  fontWeight: 'bold',
                  fontSize:
                    MobileOSType === 'android' && isTablet
                      ? RFPercentage(4.2)
                      : RFPercentage(2),
                  lineHeight: 55,
                  textTransform: 'uppercase',
                }}>
                {title}
              </GradientText>
            </Box>

            <Box width={WINDOW_WIDTH * 0.63} mt={'11px'}>
              <Text
                fontFamily={'Poppins-Regular'}
                fontSize={
                  MobileOSType === 'android' && isTablet
                    ? RFPercentage(1.6)
                    : 10
                }
                lineHeight={isTablet ? '32' : '16'}
                color={'secondary.1'}
                fontWeight={'400'}>
                {detail}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  backView: {
    flex: 1,
    backgroundColor: 'white',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FeaturesScreen;
