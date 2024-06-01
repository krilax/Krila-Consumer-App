import {Box, Flex, HStack, Stack, Text, VStack, View} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import AuthLayover from '../signup/components/AuthLayover';
import {
  CustomButton,
  Divider,
  FormTextInput,
  GradientButton,
} from '@src/components';
import SocialLoginButton from '@src/components/Auth/SocialLoginButton';
import {TouchableOpacity} from 'react-native';
import {RootStackParamList} from '@src/routes';
import {StackNavigationProp} from '@react-navigation/stack';

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
    <View flex={'1'} bg={'white'} px={{md: '59px'}}>
      <AuthLayover
        canvasRef={canvasRef}
        setCanvasSize={setCanvasSize}
        title="Log In"
        detail="Log in to start expoloring the world today!"
      />

      <Stack w="full" px={{md: '34px'}} mt={{md: '59px'}}>
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
            fontSize={{md: '15px'}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </Flex>

      <VStack px={{md: '34px'}} space={{md: '31px'}} mt={{md: '167px'}}>
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

      <HStack justifyContent="center" alignItems="center" mt={{md: '28px'}}>
        <Text color="primary.1" fontFamily="Poppins-Regular" fontSize="14px">
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => onNavigate('SignupScreen')}>
          <Text fontFamily="Poppins-SemiBold" color={'primary.1'}>
            Signup
          </Text>
        </TouchableOpacity>
      </HStack>
    </View>
  );
}

export default React.memo(EmailLoginScreen);
