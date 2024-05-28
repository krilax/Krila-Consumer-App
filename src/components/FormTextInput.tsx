import {Box, Icon, Input, InputGroup, Text} from 'native-base';
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import MaterialIcons from '@react-native-vector-icons/material-icons';

interface FormTextInputProps {
  formTitle?: string;
  placeholder: string;
  width: string;
}

function FormTextInput({formTitle, placeholder, width}: FormTextInputProps) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [isNameInputFocused, setIsNameInputFocused] = useState(false);
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);

  return (
    <Box w="full">
      {formTitle && (
        <Text
          color={'secondary.1'}
          fontSize={'15px'}
          fontWeight={'normal'}
          fontFamily={'Spartan-Regular'}
          mb={'2'}>
          {formTitle}
        </Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <InputGroup>
            <Input
              w={width ? width : '0%'}
              onFocus={() => setIsEmailInputFocused(true)}
              onBlur={e => {
                onBlur();
                setIsEmailInputFocused(false);
              }}
              style={[
                styles.input,
                {backgroundColor: isNameInputFocused ? 'white' : 'white'},
              ]}
              _focus={{
                borderColor: '#C4C4C4',
                borderWidth: 1,
              }}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              borderRadius={'8'}
              color="primary.1"
              fontSize={'15px'}
              fontFamily={'Spartan-Regular'}
              padding={'1rem'}
              borderWidth={'0.5'}
              borderColor={'#C4C4C4'}
              backgroundColor={'white'}
            />
          </InputGroup>
        )}
        name="name"
        defaultValue=""
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: '100%',
    minHeight: 58,
    fontSize: 15,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default FormTextInput;
