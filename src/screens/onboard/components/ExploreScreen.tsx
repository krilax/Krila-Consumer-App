import {WINDOW_HEIGHT, WINDOW_WIDTH, isMobile} from '@constants/reusable';
import {Box, Flex, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {GradientText} from './TravelReimaginedScreen';
import ExploreContent from './contentViews/ExploreContent';
import {useDeviceType} from '@src/components/hooks';

interface ExploreScreenProps {
  metadata: any;
  title: string;
  detail: string;
}

function ExploreScreen({metadata, title, detail}: ExploreScreenProps) {
  const deviceType = useDeviceType();

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
            },
          ]}
          padding={deviceType === 'tablet' ? '30px' : '27px'}>
          <Box height={WINDOW_HEIGHT * 0.645} w="full"></Box>
          <Box flex={1} mt={!isMobile ? 42 : 30} px={'0'} w={'full'}>
            <Box>
              <GradientText
                style={{
                  fontFamily: 'Spartan-Regular',
                  fontWeight: 'bold',
                  fontSize: deviceType === 'mobile' ? 28 : 48,
                  lineHeight: deviceType === 'mobile' ? 30 : 55,
                  textTransform: 'uppercase',
                }}>
                {title}
              </GradientText>
            </Box>

            <Box
              width={deviceType === 'tablet' ? WINDOW_WIDTH * 0.63 : '100%'}
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
