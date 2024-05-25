import {Button, StyledProps, Text} from 'native-base';
import React from 'react';

interface CustomButtonProps {
  text: string;
  style?: StyledProps;
  textStyle?: StyledProps;
}

function CustomButton({text, style, textStyle}: CustomButtonProps) {
  return (
    <Button {...style}>
      <Text {...textStyle}>{text}</Text>
    </Button>
  );
}

export default CustomButton;
