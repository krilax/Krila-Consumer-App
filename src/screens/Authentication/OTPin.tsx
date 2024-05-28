import {Box, Flex, Stack, Text, VStack, View} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import AuthLayover from '../signup/components/AuthLayover';
import {GradientButton} from '@src/components';
import OTPTextInput from 'react-native-otp-textinput';
import {WINDOW_WIDTH} from '@constants/reusable';
import {COLORS} from '@constants/theme';

interface OTPinInterface {
  message: string;
  user: string;
  authType: 'phone' | 'email';
}

function OTPin({message, user, authType}: OTPinInterface) {
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
      <View flex={'1'} bg={'white'} px={{md: '59px'}}>
        <AuthLayover
          canvasRef={canvasRef}
          title="Authentication"
          detail="Enter Authentication Code"
        />
        <Flex my={{md: '30px'}} justifyContent={'center'} alignItems={'center'}>
          <Text color={'primary.1'} fontWeight={'extraBlack'}>
            Scrolls
          </Text>
        </Flex>
        <Stack w="full" px={{md: '34px'}}>
          <Flex justifyContent={'center'} alignItems={'center'} w="full">
            <Text
              color={'secondary.1'}
              textAlign={'center'}
              fontFamily={'Poppins-Medium'}>
              {message} <Text fontWeight={'bold'}>({user})</Text> . Enter in the
              field below to verify your email address.
            </Text>
          </Flex>
          <Flex
            mt={{md: '45px'}}
            mb={{md: '39px'}}
            justifyContent={'center'}
            alignItems={'center'}
            onLayout={handleLayout}>
            <OTPTextInput
              inputCount={4}
              ref={flexRef}
              autoFocus={false}
              containerStyle={{
                width: WINDOW_WIDTH * 0.62,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              textInputStyle={{
                borderWidth: 1,
                height: 110,
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

          <VStack px={{md: '34px'}} space={{md: '31px'}} mt={{md: '97px'}}>
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
