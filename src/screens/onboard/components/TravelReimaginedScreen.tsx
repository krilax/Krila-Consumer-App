import {
  MobileOSType,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  isMobile,
  isTablet,
} from 'constants/reusable';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Flex, Text, View} from 'native-base';
import TravelContent from './contentViews/TravelContent';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useDeviceType} from '@src/components/hooks';

interface TravelReimaginedScreenProps {
  metadata: any;
  detail: string;
  title: string;
}

export function GradientText(props: any) {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={['#050683', '#0709C5']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
}

function TravelReimaginedScreen({detail, title}: TravelReimaginedScreenProps) {
  const deviceType = useDeviceType();

  return (
    <Flex flex={1} justifyContent={'flex-start'}>
      <View
        style={styles.backView}
        padding={deviceType === 'tablet' ? '30px' : '27px'}>
        <Text>This stays at the back</Text>
      </View>
      <Flex
        style={[
          styles.overlay,
          {height: WINDOW_HEIGHT, justifyContent: 'flex-start', padding: 30},
        ]}>
        <TravelContent />

        <Box w="full" mt={!isMobile ? 70 : 30}>
          <Box>
            <GradientText
              style={{
                fontSize: deviceType === 'mobile' ? 28 : 48,
                lineHeight: deviceType === 'mobile' ? 30 : 55,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontFamily: 'Spartan-Regular',
              }}>
              {title}
            </GradientText>
          </Box>

          <Box
            width={
              deviceType === 'tablet' ? WINDOW_WIDTH * 0.63 : WINDOW_WIDTH * 0.9
            }
            mt={'11px'}>
            <Text
              fontFamily={'Poppins-Regular'}
              fontSize={{base: '14px', md: '16px'}}
              lineHeight={{md: '32px', base: '24px'}}
              color={'secondary.1'}
              fontWeight={'400'}>
              {detail}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
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

export default React.memo(TravelReimaginedScreen);
