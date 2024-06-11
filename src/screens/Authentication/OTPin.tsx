import {Flex, Stack, Text, VStack, View} from 'native-base';
import React, {useRef, useState} from 'react';
import AuthLayover from '../signup/components/AuthLayover';
import {GradientButton} from '@src/components';
import OTPTextInput from 'react-native-otp-textinput';
import {WINDOW_WIDTH} from '@constants/reusable';
import {COLORS} from '@constants/theme';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@src/routes';
import {useDeviceType} from '@src/components/hooks';

interface OTPinInterface {
  message: string;
  user: string;
  authType?: 'phone' | 'email';
  navigation: StackNavigationProp<RootStackParamList>;
}

function OTPin({message, user, authType, navigation}: OTPinInterface) {
  const deviceType = useDeviceType();
  const canvasRef: any = useRef(null);
  const flexRef = useRef<any>(null);
  const [inputWidth, setInputWidth] = useState(0);

  const handleLayout = (event: any) => {
    const {width} = event.nativeEvent.layout;
    const numberOfFields = 6;
    const calculatedWidth = width / numberOfFields - 10;
    setInputWidth(calculatedWidth);
  };

  return (
    <View flex={1} background={'black'}>
      <View flex={'1'} bg={'white'} px={{md: '59px', base: '27px'}}>
        <AuthLayover
          canvasRef={canvasRef}
          title="Authentication"
          detail="Enter Authentication Code"
        />
        <Flex
          my={{md: '30px'}}
          justifyContent={'center'}
          alignItems={'center'}
          display={'none'}>
          <Text color={'primary.1'} fontWeight={'extraBlack'}>
            Scrolls
          </Text>
        </Flex>
        <Stack w="full" px={{md: '34px'}} mt={{base: '40px'}}>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            w="full"
            width={{base: '70%'}}
            mx={'auto'}>
            <Text
              color={'secondary.1'}
              textAlign={'center'}
              fontFamily={'Poppins-Medium'}
              fontSize={{base: '10px', md: '15px'}}>
              {message} <Text fontWeight={'bold'}>({user})</Text> . Enter in the
              field below to verify your email address.
            </Text>
          </Flex>
          <Flex
            mt={{md: '45px', base: '40px'}}
            mb={{md: '39px', base: '55px'}}
            justifyContent={'center'}
            alignItems={'center'}
            onLayout={handleLayout}>
            <OTPTextInput
              inputCount={4}
              ref={flexRef}
              autoFocus={false}
              containerStyle={{
                width:
                  deviceType === 'tablet'
                    ? WINDOW_WIDTH * 0.62
                    : WINDOW_WIDTH * 0.8,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              textInputStyle={{
                borderWidth: 1,
                height: deviceType === 'tablet' ? 110 : 60,
                width: inputWidth,
                borderRadius: 8,
              }}
              tintColor={COLORS.primary}
              offTintColor={'#D8DDE2'}
              inputCellLength={1}
            />
          </Flex>

          <Flex flexDirection={'column'} w={'full'}>
            <Text
              fontFamily={'Poppins-Regular'}
              color="secondary.1"
              textAlign={'center'}>
              Didn't receive the code?{' '}
              <Text fontFamily={'Poppins-SemiBold'} color={'primary.1'}>
                Resend
              </Text>
            </Text>
            <Text
              fontFamily={'Poppins-Regular'}
              color="secondary.1"
              textAlign={'center'}>
              Expires in{' '}
              <Text fontFamily={'Poppins-SemiBold'} color={'primary.1'}>
                1:00
              </Text>
            </Text>
          </Flex>

          <VStack
            px={{md: '34px'}}
            space={{md: '31px'}}
            mt={{md: '97px', base: '30px'}}>
            <GradientButton
              onPress={() => null}
              title={authType === 'email' ? 'Continue' : 'Verify'}
              colors={['#03045E', '#050792', '#0608C4']}
            />
          </VStack>
        </Stack>
      </View>
    </View>
  );
}

export default OTPin;
