import {WINDOW_HEIGHT, isTablet} from '@constants/reusable';
import {Canvas, Fill, useSVG} from '@shopify/react-native-skia';
import {
  CustomButton,
  Divider,
  FormTextInput,
  GradientButton,
} from '@src/components';
import SocialLoginButton from '@src/components/Auth/SocialLoginButton';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
  View,
} from 'native-base';
import {background} from 'native-base/lib/typescript/theme/styled-system';
import React, {useEffect, useRef, useState} from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';

interface SignupFormInterface {
  onSwitch: (step: string) => void;
}

function SignupForm({onSwitch}: SignupFormInterface) {
  const svg = useSVG(require('@assets/images/app/TopRectangle.svg'));

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
      <Box
        borderRadius={'25px'}
        overflow={'hidden'}
        h={WINDOW_HEIGHT * 0.2368}
        bg="red.100"
        w="full"
        mt={{
          md: '65',
          base: 10,
        }}
        ref={canvasRef}
        onLayout={() => {
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
        }}>
        <Flex flex={1} justifyContent={'flex-start'}>
          <Flex h={WINDOW_HEIGHT * 0.2368}>
            <Canvas style={{flex: 1}}>
              <Fill color={'#101178'} />
            </Canvas>
          </Flex>
          <Flex
            flex={'1'}
            position={'absolute'}
            top={'0'}
            bottom={'0'}
            left={'0'}
            right={'0'}
            justifyContent={'center'}
            alignItems={'center'}>
            <Text
              fontFamily={'Spartan-Bold'}
              fontSize={{md: RFPercentage(3.3)}}
              mb={29}
              textTransform={'capitalize'}>
              Sign up
            </Text>
            <Text fontSize={{md: RFPercentage(2)}}>
              Sign up to start exploring the world today!
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Flex my={{md: '30px'}} justifyContent={'center'} alignItems={'center'}>
        <Text color={'primary.1'} fontWeight={'extraBlack'}>
          Scrolls
        </Text>
      </Flex>
      <Stack w="full" px={{md: '34px'}}>
        <Box mb="22px">
          <FormTextInput formTitle="Name" placeholder="Your name here" />
        </Box>

        <Box mb="22px">
          <FormTextInput
            formTitle="Email Address"
            placeholder="Your email here"
          />
        </Box>

        <Box>
          <FormTextInput
            formTitle="Password"
            placeholder="Your password here"
          />
        </Box>
      </Stack>

      <HStack alignItems={'center'} px={{md: '34px'}}>
        <Checkbox
          alignItems={'center'}
          value={'dadfasdf'}
          color={'white'}
          colorScheme={'green'}>
          <Text
            fontFamily={'Poppins-Regular'}
            ml={2}
            fontWeight={'600'}
            color={'#7D8093'}
            fontSize={{md: '12px'}}
            my={{md: '36px'}}>
            I certify that I am 18 years of age or older, and I agree to the{' '}
            <Text display={'inline'} color={'primary.1'}>
              User Agreement
            </Text>{' '}
          </Text>
        </Checkbox>
      </HStack>

      <VStack px={{md: '34px'}} space={{md: '31px'}}>
        <GradientButton
          onPress={() => null}
          title="Get Started"
          colors={['#03045E', '#050792', '#0608C4']}
        />
        <CustomButton
          text="Connect a wallet"
          style={{
            background: 'white',
            height: {md: '58px'},
            borderRadius: '10px',
            borderWidth: '1.1px',
            borderColor: 'primary.1',
          }}
          textStyle={{color: 'primary.1', fontSize: {md: '14px'}}}
        />
      </VStack>

      <Box my={'20px'} px={{md: '34px'}}>
        <Divider />
      </Box>

      <SocialLoginButton />

      <Flex justifyContent={'center'} alignItems={'center'} mt={{md: '28px'}}>
        <Text
          color={'primary.1'}
          fontFamily={'Poppins-Regular'}
          fontSize={'14px'}>
          Already have an account?{' '}
          <Text fontFamily={'Poppins-SemiBold'}>Login</Text>{' '}
        </Text>
      </Flex>
    </View>
  );
}

export default SignupForm;
