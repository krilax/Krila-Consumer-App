import {WINDOW_HEIGHT} from '@constants/reusable';
import {Canvas, Fill} from '@shopify/react-native-skia';
import {Box, Flex, Text} from 'native-base';
import React from 'react';

interface AuthLayoverProps {
  canvasRef: any;
  setCanvasSize?: ({width, height}: {width: number; height: number}) => void;
  title: string;
  detail: string;
}

function AuthLayover({
  canvasRef,
  setCanvasSize,
  title,
  detail,
}: AuthLayoverProps) {
  return (
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
              if (setCanvasSize) setCanvasSize({width, height});
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
            fontSize={{md: '40px'}}
            mb={29}
            textTransform={'capitalize'}>
            {title}
          </Text>
          <Text
            fontFamily={'Poppins-Regular'}
            fontSize={{md: '16px'}}
            color={'white'}>
            {detail}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default AuthLayover;
