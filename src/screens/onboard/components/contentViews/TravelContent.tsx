import {Box} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {WINDOW_HEIGHT, isTablet, useHp} from 'constants/reusable';
import {Canvas, Image as SkiaImage, useImage} from '@shopify/react-native-skia';

function TravelContent() {
  const image = useImage(
    require('@assets/images/onboradingImages/travelImages/1.png'),
  );

  const canvasRef: any = useRef(null);
  const [canvasSize, setCanvasSize] = useState({width: 0, height: 0});
  const boxHeight = (WINDOW_HEIGHT * 64) / 100;

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
      bg={'black'}
      w={'100%'}
      borderRadius={isTablet ? '25px' : '15px'}
      overflow={'hidden'}>
      <Box
        flex={1}
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
        <Canvas style={{flex: 1}}>
          {image && (
            <SkiaImage
              image={image}
              fit="cover"
              x={0}
              y={0}
              width={canvasSize.width}
              height={canvasSize.height}
            />
          )}
        </Canvas>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  redView: {
    flex: 1,
    backgroundColor: 'red',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TravelContent;
