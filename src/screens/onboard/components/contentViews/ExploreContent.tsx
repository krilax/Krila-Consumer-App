import {WINDOW_HEIGHT} from '@constants/reusable';
import {Canvas, Group, Image, Skia, useImage} from '@shopify/react-native-skia';
import {useDeviceType} from '@src/components/hooks';
import {Box} from 'native-base';
import React, {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';

function ExploreContent() {
  const canvasRef: any = useRef(null);
  const [canvasSize, setCanvasSize] = useState({width: 0, height: 0});
  const deviceType = useDeviceType();

  //first circle
  const firstCirclePath = Skia.Path.Make();
  const radius = canvasSize.width / (deviceType === 'mobile' ? 2 : 2.5);
  const circleX = canvasSize.width / 2;
  const circleY = canvasSize.height / 2;
  firstCirclePath.addCircle(circleX, circleY, radius);
  const circlePath1 = firstCirclePath.toSVGString();

  //second circle
  const secondCirclePath = Skia.Path.Make();
  const radius2 = canvasSize.width / (deviceType === 'mobile' ? 4 : 4.2);
  const circleX2 = canvasSize.width - radius2;
  const circleY2 = canvasSize.height - canvasSize.height / 4.3;
  secondCirclePath.addCircle(circleX2, circleY2, radius2);
  const circlePath2 = secondCirclePath.toSVGString();

  //third circle
  const thirdCircle = Skia.Path.Make();
  const radius3 = canvasSize.width / (deviceType === 'mobile' ? 5 : 5.4);
  const circleX3 = radius3;
  const circleY3 = canvasSize.height - canvasSize.height / 4;
  thirdCircle.addCircle(circleX3, circleY3, radius3);
  const circlePath3 = thirdCircle.toSVGString();

  //fourth circle
  const fourthCirclePath = Skia.Path.Make();
  const radius4 = canvasSize.width / (deviceType === 'mobile' ? 4 : 4.2);
  const circleX4 = radius4;
  const circleY4 = radius4 + 2;
  fourthCirclePath.addCircle(circleX4, circleY4, radius4);
  const circlePath4 = fourthCirclePath.toSVGString();

  const image1 = useImage(require('@assets/images/exploreImages/1.png'));
  const image2 = useImage(require('@assets/images/exploreImages/2.png'));
  const image3 = useImage(require('@assets/images/exploreImages/3.png'));
  const image4 = useImage(require('@assets/images/exploreImages/1.png'));

  return (
    <Box
      height={{
        md: WINDOW_HEIGHT * 0.81,
        base: WINDOW_HEIGHT * 0.8,
      }}
      padding={{md: '47px', base: '22px'}}>
      <Box
        flex={'1'}
        w="full"
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
        <Canvas style={style.container}>
          <Group>
            <Group clip={circlePath1}>
              <Image
                image={image1}
                x={0}
                y={0}
                width={canvasSize.width}
                height={canvasSize.height}
                fit="fill"></Image>
            </Group>
            <Group clip={circlePath2} color={'red'}>
              <Image
                image={image2}
                x={0}
                y={0}
                width={canvasSize.width}
                height={canvasSize.height}
                fit="cover"></Image>
            </Group>
            <Group clip={circlePath3} color={'red'}>
              <Image
                image={image3}
                x={0}
                y={0}
                width={canvasSize.width}
                height={canvasSize.height}
                fit="fill"></Image>
            </Group>
            <Group clip={circlePath4} color={'red'}>
              <Image
                image={image4}
                x={0}
                y={0}
                width={canvasSize.width}
                height={canvasSize.height}
                fit="none"></Image>
            </Group>
          </Group>
        </Canvas>
      </Box>
    </Box>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ExploreContent;
