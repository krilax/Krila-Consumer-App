import {Box, Flex, Stack, Text, VStack, View} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import AuthLayover from '../signup/components/AuthLayover';
import {
  CustomButton,
  Divider,
  FormTextInput,
  GradientButton,
} from '@src/components';

function PhoneLoginScreen() {
  const canvasRef: any = useRef(null);
  const [canvasSize, setCanvasSize] = useState({width: 0, height: 0});

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.measure(
        (
          x: number,
          y: number,
          width: number,
          height: number,
          pageX: number,
          pageY: number,
        ) => {
          setCanvasSize({width, height});
        },
      );
    }
  }, [canvasRef.current]);

  return (
    <View flex={'1'} bg={'white'} px={{md: '59px'}}>
      <AuthLayover
        canvasRef={canvasRef}
        setCanvasSize={setCanvasSize}
        title="Login"
        detail="Enter Phone Number"
      />

      <Box w="full" mt={{md: '62px'}} w={{md: '346px'}} mx={{md: 'auto'}}>
        <Text
          color={'secondary.1'}
          fontFamily={'Poppins-Medium'}
          textAlign={'center'}>
          An OTP will be sent to your mobile number Provide your mobile number
          below.
        </Text>
      </Box>

      <Stack w="full" px={{md: '34px'}} mt={{md: '33px'}}>
        <Box mb="22px">
          <FormTextInput formTitle="New password" placeholder="Placeholder" />
        </Box>
      </Stack>

      <VStack px={{md: '34px'}} space={{md: '31px'}} mt={{md: '223px'}}>
        <GradientButton
          onPress={() => null}
          title="Verify"
          colors={['#03045E', '#050792', '#0608C4']}
        />
      </VStack>
    </View>
  );
}

export default React.memo(PhoneLoginScreen);
