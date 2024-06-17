import {Box, Image} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {WINDOW_HEIGHT, isTablet, useHp} from 'constants/reusable';

function TravelContent() {
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
    <Box
      height={`${useHp(64)}px`}
      w={'100%'}
      borderRadius={isTablet ? '25px' : '15px'}
      overflow={'hidden'}>
      <Box
        flex={1}
        ref={canvasRef}
        overflow={'hidden'}
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
        }}
        justifyContent="center"
        alignItems="center">
        {canvasSize.width > 0 && canvasSize.height > 0 && (
          <Image
            source={require('@assets/images/onboradingImages/travelImages/1.png')}
            alt="Travel Image"
            width="100%"
            height="100%"
            style={{
              objectFit: 'fill',
              aspectRatio:
                canvasSize.width !== 0
                  ? canvasSize.width / canvasSize.height
                  : 1,
            }}
          />
        )}
      </Box>
    </Box>
  );
}

export default TravelContent;
