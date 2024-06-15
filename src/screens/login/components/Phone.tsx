import {FormTextInput, GradientButton} from '@src/components';
import AuthLayover from '@src/screens/signup/components/AuthLayover';
import {Box, Flex, HStack, Input, Stack, Text, VStack, View} from 'native-base';
import React, {useRef, useState} from 'react';

function Phone() {
  const canvasRef: any = useRef(null);
  const [canvasSize, setCanvasSize] = useState({width: 0, height: 0});

  return (
    <View flex={'1'} bg={'white'} px={{md: '59px', base: '27px'}}>
      <AuthLayover
        canvasRef={canvasRef}
        setCanvasSize={setCanvasSize}
        title="Login"
        detail="Enter Phone Number"
      />

      <Box
        mt={{md: '62px', base: '33px'}}
        w={{md: '346px', base: '60%'}}
        mx={'auto'}>
        <Text
          color={'secondary.1'}
          fontFamily={'Poppins-Medium'}
          textAlign={'center'}
          fontSize={{base: '10px', md: '16px'}}>
          An OTP will be sent to your mobile number Provide your mobile number
          below.
        </Text>
      </Box>

      <Stack w="full" px={{md: '34px'}} mt={{md: '33px', base: '24px'}}>
        <HStack mb="22px" alignItems="center" space={'1'}>
          <Box w={{md: '152px', base: '102px'}} bg="red.100">
            <Text color="black">Select</Text>
          </Box>
          <Input
            flex={1}
            ml={2}
            minH={{md: '58px', base: '41px'}}
            bg={'white'}
            borderColor={'#D9D9D9'}
            borderRadius={'8px'}
          />
        </HStack>
      </Stack>

      <VStack
        px={{md: '34px'}}
        space={{md: '31px'}}
        mt={{md: '223px', base: '187px'}}>
        <GradientButton
          onPress={() => null}
          title="Verify"
          colors={['#03045E', '#050792', '#0608C4']}
        />
      </VStack>
    </View>
  );
}

export default Phone;
