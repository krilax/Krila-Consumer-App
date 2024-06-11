import {Box, Flex, HStack, Stack, Text, VStack, View} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {
  CustomButton,
  Divider,
  FormTextInput,
  GradientButton,
} from '@src/components';
import {TouchableOpacity} from 'react-native';
import {RootStackParamList} from '@src/routes';
import AuthLayover from '../signup/components/AuthLayover';
import {StackNavigationProp} from '@react-navigation/stack';
import SocialLoginButton from '@src/components/auth/SocialLoginButton';
import {responsiveMargin} from '@src/helpers/responsiveUtils';

interface EmailLoginScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

function EmailLoginScreen({navigation}: EmailLoginScreenProps) {
  const canvasRef: any = useRef(null);
  const [canvasSize, setCanvasSize] = useState({width: 0, height: 0});

  const onNavigate = (route: keyof RootStackParamList) => {
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
        title="Log In"
        detail="Log in to start expoloring the world today!"
      />

      <Stack w="full" px={{md: '34px'}} mt={{md: '59px', base: '49px'}}>
        <Box mb="22px">
          <FormTextInput
            formTitle="Email"
            placeholder="Your email here"
            width="100%"
          />
        </Box>

        <Box mb="22px">
          <FormTextInput
            formTitle="Password"
            placeholder="Your password here"
            width="100%"
          />
        </Box>
      </Stack>

      <Flex
        w={'full'}
        justifyContent={'flex-end'}
        alignItems={'flex-end'}
        px={{md: '34px'}}>
        <TouchableOpacity onPress={() => onNavigate('ResetPasswordScreen')}>
          <Text
            color={'primary.1'}
            fontFamily={'Poppins-Medium'}
            fontSize={{md: '15px', base: '12px'}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </Flex>

      <VStack
        px={{md: '34px'}}
        space={{md: '31px', base: '21px'}}
        mt={{md: '167px', base: responsiveMargin(50)}}>
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

      <Box
        my={{md: '20px', base: responsiveMargin(20)}}
        px={{md: '34px', base: '0px'}}>
        <Divider />
      </Box>

      <SocialLoginButton />

      <HStack
        justifyContent="center"
        alignItems="center"
        mt={{md: '28px', base: responsiveMargin(17)}}>
        <Text
          color="primary.1"
          fontFamily="Poppins-Regular"
          fontSize={{base: '10px', md: '14px'}}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => onNavigate('SignupScreen')}>
          <Text
            fontFamily="Poppins-SemiBold"
            color={'primary.1'}
            fontSize={{base: '10px', md: '14px'}}>
            Signup
          </Text>
        </TouchableOpacity>
      </HStack>
    </View>
  );
}

export default React.memo(EmailLoginScreen);
