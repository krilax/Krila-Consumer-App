import {
  MobileOSType,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  isMobile,
  isTablet,
} from '@constants/reusable';
import {Box, Flex, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {GradientText} from './TravelReimaginedScreen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import ExploreContent from './contentViews/ExploreContent';
import {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@src/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';

interface ExploreScreenProps {
  metadata: any;
  title: string;
  detail: string;
}

function ExploreScreen({metadata, title, detail}: ExploreScreenProps) {
  return (
    <Flex>
      <Flex flex={1} justifyContent={'flex-start'}>
        <Flex style={[styles.backView, {justifyContent: 'flex-start'}]}>
          <ExploreContent />
        </Flex>
        <Flex
          style={[
            styles.overlay,
            {
              height: WINDOW_HEIGHT,
              justifyContent: 'flex-start',
              padding: isTablet ? 65 : 30,
            },
          ]}>
          <Box height={WINDOW_HEIGHT * 0.645} w="full"></Box>
          <Box flex={1} mt={!isMobile ? 42 : 30} px={'0'} w={'full'}>
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

export default ExploreScreen;
