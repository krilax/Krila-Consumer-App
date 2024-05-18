import React, {useState, useRef} from 'react';
import {TextInput, View, StyleSheet, TextInputProps} from 'react-native';
import {COLORS, FONT} from '../../constants/theme';

interface CustomOTPInputProps {
  numberOfInputs?: number;
  inputProps?: TextInputProps;
}

const CustomOTPInput: React.FC<CustomOTPInputProps> = ({
  numberOfInputs = 4,
  inputProps = {},
}) => {
  const [otpValues, setOTPValues] = useState<string[]>(
    Array(numberOfInputs).fill(''),
  );
  const inputRefs = useRef<TextInput[]>([]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newValues = [...otpValues];
      newValues[index] = value;
      setOTPValues(newValues);

      if (value && index < numberOfInputs - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (index: number) => {
    if (otpValues[index] === '') {
      const newValues = [...otpValues];
      newValues[index] = '';
      setOTPValues(newValues);
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && otpValues[index] === '' && index > 0) {
      const newValues = [...otpValues];
      newValues[index - 1] = '';
      setOTPValues(newValues);
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({length: numberOfInputs}).map((_, index) => (
        <TextInput
          key={index}
          ref={ref => (inputRefs.current[index] = ref as TextInput)}
          style={styles.input}
          value={otpValues[index]}
          onChangeText={value => handleInputChange(index, value)}
          onFocus={() => handleFocus(index)}
          onKeyPress={({nativeEvent: {key}}) => handleKeyPress(index, key)}
          keyboardType="numeric"
          maxLength={1}
          autoComplete="one-time-code"
          {...inputProps}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 10,
  },
  input: {
    borderWidth: 1,
    marginRight: 10,
    borderColor: COLORS.borderColor,
    borderRadius: 10,
    width: 60,
    height: 70,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: FONT.bold,
    fontSize: 20,
    color: COLORS.textColor,
  },
});

export default CustomOTPInput;
