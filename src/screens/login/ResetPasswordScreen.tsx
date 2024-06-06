import {Box, Flex, Stack, Text, VStack, View} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import AuthLayover from '../signup/components/AuthLayover';
import {
  CustomButton,
  Divider,
  FormTextInput,
  GradientButton,
} from '@src/components';
import SocialLoginButton from '@src/components/auth/SocialLoginButton';

function ResetPasswordScreen() {
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
        title="Reset Password"
        detail="Enter New Password"
      />

      <Stack w="full" px={{md: '34px'}} mt={{md: '59px'}}>
        <Box mb="22px">
          <FormTextInput
            width="100%"
            formTitle="New password"
            placeholder="Placeholder"
          />
        </Box>

        <Box mb="22px">
          <FormTextInput
            width="100%"
            formTitle="Password"
            placeholder="Placeholder"
          />
        </Box>
      </Stack>

      <Flex
        w={'full'}
        justifyContent={'flex-end'}
        alignItems={'flex-end'}
        px={{md: '34px'}}>
        <Text
          color={'primary.1'}
          fontFamily={'Poppins-Medium'}
          fontSize={{md: '15px'}}>
          Forgot password?
        </Text>
      </Flex>

      <VStack px={{md: '34px'}} space={{md: '31px'}} mt={{md: '167px'}}>
        <GradientButton
          onPress={() => null}
          title="Reset"
          colors={['#03045E', '#050792', '#0608C4']}
        />
      </VStack>
    </View>
  );
}

export default React.memo(ResetPasswordScreen);
