import {
  CustomButton,
  Divider,
  FormTextInput,
  GradientButton,
} from '@src/components';
import SocialLoginButton from '@src/components/auth/SocialLoginButton';
import {Box, Checkbox, HStack, Stack, Text, VStack, View} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import AuthLayover from './AuthLayover';
import {RootStackParamList} from '@src/routes';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function SignupForm() {
  const navigation = useNavigation();
  const canvasRef: any = useRef(null);
  const [canvasSize, setCanvasSize] = useState({width: 0, height: 0});

  const onNavigate = (route: keyof RootStackParamList) => {
    // @ts-ignore
    navigation.navigate(route);
  };

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
    <View flex={'1'} bg={'white'} px={{md: '59px', base: '27px'}}>
      <AuthLayover
        canvasRef={canvasRef}
        setCanvasSize={setCanvasSize}
        title="Sign Up"
        detail="Sign up to strt expoloring the world today!"
      />
      {/* <Flex my={{md: '30px'}} justifyContent={'center'} alignItems={'center'}>
      <Text color={'primary.1'} fontWeight={'extraBlack'} display={'none'}>
          Scrolls
        </Text>
      </Flex>  */}
      <Stack w="full" px={{md: '34px'}} mt={{base: '22px', md: '17.5px'}}>
        <Box mb="22px">
          <FormTextInput
            formTitle="Name"
            placeholder="Your name here"
            width="100%"
          />
        </Box>

        <Box mb="22px">
          <FormTextInput
            formTitle="Email Address"
            placeholder="Your email here"
            width="100%"
          />
        </Box>

        <Box>
          <FormTextInput
            formTitle="Password"
            placeholder="Your password here"
            width="100%"
          />
        </Box>
      </Stack>

      <HStack
        alignItems={'center'}
        px={{md: '34px', base: '0px'}}
        mt={{base: '39px', md: '0px'}}>
        <Checkbox
          alignItems={'center'}
          value={'dadfasdf'}
          color={'white'}
          colorScheme={'green'}>
          <Text
            fontFamily={'Poppins-Regular'}
            ml={2}
            color={'#7D8093'}
            fontSize={{md: '12px', base: '8px'}}
            my={{md: '36px', base: '21px'}}>
            I certify that I am 18 years of age or older, and I agree to the{' '}
            <Text color={'primary.1'}>User Agreement</Text>{' '}
          </Text>
        </Checkbox>
      </HStack>

      <VStack px={{md: '34px', base: '0px'}} space={{md: '31px', base: '21px'}}>
        <GradientButton
          onPress={() => null}
          title="Get Started"
          colors={['#03045E', '#050792', '#0608C4']}
        />
        <CustomButton
          text="Connect a wallet"
          style={{
            background: 'white',
            height: {md: '58px', base: '40px'},
            borderRadius: '10px',
            borderWidth: '1.1px',
            borderColor: 'primary.1',
          }}
          textStyle={{color: 'primary.1', fontSize: {md: '14px', base: '10px'}}}
        />
      </VStack>

      <Box my={{md: '20px', base: '15px'}} px={{md: '34px'}}>
        <Divider />
      </Box>

      <SocialLoginButton />

      <HStack
        justifyContent="center"
        alignItems="center"
        mt={{md: '28px', base: '10px'}}>
        <Text
          color="primary.1"
          fontFamily="Poppins-Regular"
          fontSize={{base: '10px', md: '14px'}}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => onNavigate('EmailLoginScreen')}>
          <Text
            fontFamily="Poppins-SemiBold"
            color={'primary.1'}
            fontSize={{base: '10px', md: '14px'}}>
            Login
          </Text>
        </TouchableOpacity>
      </HStack>
    </View>
  );
}

export default SignupForm;
