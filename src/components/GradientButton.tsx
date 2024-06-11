import {Flex, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {TouchableOpacityProps} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useDeviceType} from './hooks';

interface GradientButtonProps extends TouchableOpacityProps {
  title: string;
  colors: string[];
  textColor?: string;
  onPress: () => any;
  style?: ViewStyle;
}

const GradientButton = ({
  onPress,
  title,
  colors,
  textColor,
}: GradientButtonProps) => {
  const deviceType = useDeviceType();

  return (
    <TouchableOpacity onPress={onPress} style={{borderRadius: 10}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={colors}
        style={[
          {
            alignItems: 'center',
            borderRadius: deviceType === 'tablet' ? 10 : 5,
          },
        ]}>
        <Flex
          height={{md: '58px', base: '40px'}}
          alignItems={'center'}
          justifyContent={'center'}>
          <Text
            color={textColor ? textColor : 'white'}
            fontFamily={'Poppins-Medium'}
            fontSize={{md: '14px', base: '10px'}}>
            {title}
          </Text>
        </Flex>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
