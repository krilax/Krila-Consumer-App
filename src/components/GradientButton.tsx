import {isTablet} from '@constants/reusable';
import {Text} from 'native-base';
import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {TouchableOpacityProps} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

interface GradientButtonProps extends TouchableOpacityProps {
  title: string;
  colors: string[];
  onPress: () => any;
  style?: ViewStyle;
}

const GradientButton = ({onPress, title, colors}: GradientButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={{borderRadius: 10}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={colors}
        style={[
          {
            paddingVertical: isTablet ? 18.5 : 10.5,
            alignItems: 'center',
            borderRadius: 10,
          },
        ]}>
        <Text
          style={{color: 'white', fontWeight: 'bold'}}
          fontFamily={'Poppins-Regular'}
          fontSize={{md: '14px'}}
          fontWeight={'bold'}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
