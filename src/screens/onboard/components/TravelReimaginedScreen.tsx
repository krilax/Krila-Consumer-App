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
  return (
    <Flex flex={1} justifyContent={'flex-start'}>
      <View style={styles.backView} padding={30}>
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
                fontFamily: 'Spartan-Regular',
                fontWeight: 'bold',
                fontSize:
                  MobileOSType === 'android' && isTablet
                    ? RFPercentage(4.6)
                    : RFPercentage(3),
                lineHeight: 55,
                textTransform: 'uppercase',
              }}>
              {title}
            </GradientText>
            {/* <TextGradient
              style={{
                fontFamily: 'Spartan-Regular',
                fontWeight: 'bold',
                fontSize:
                  MobileOSType === 'android' && isTablet
                    ? RFPercentage(4)
                    : RFPercentage(3),
                lineHeight: 50,
                textTransform: 'uppercase',
              }}
              // locations={[0, 1]}
              colors={['#050683', '#0709C5']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              text="Travel"
            /> */}
          </Box>

          <Box width={WINDOW_WIDTH * 0.63} mt={'11px'}>
            <Text
              fontFamily={'Poppins-Regular'}
              fontSize={
                MobileOSType === 'android' && isTablet ? RFPercentage(1.6) : 10
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
