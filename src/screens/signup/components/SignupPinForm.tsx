import {Flex, Stack, Text, View} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import AuthLayover from './AuthLayover';

function SignupPinForm() {
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
    <View flex={1} background={'black'}>
      <View flex={'1'} bg={'white'} px={{md: '59px'}}>
        <AuthLayover
          canvasRef={canvasRef}
          setCanvasSize={setCanvasSize}
          title="Authentication"
        />
        <Flex my={{md: '30px'}} justifyContent={'center'} alignItems={'center'}>
          <Text color={'primary.1'} fontWeight={'extraBlack'}>
            Scrolls
          </Text>
        </Flex>
        <Stack w="full" px={{md: '34px'}}></Stack>
      </View>
    </View>
  );
}

export default SignupPinForm;
