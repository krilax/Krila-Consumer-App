import {Box, HStack} from 'native-base';
import React from 'react';
import Animated from 'react-native-reanimated';
import AppleIcon from './AppleIcon';
import FacebookIcon from './FacebookIcon';
import GoogleIcon from './GoogleIcon';
import PhoneIcon from './PhoneIcon';

function SocialLoginButton() {
  const socials = [
    {name: 'apple', Icon: AppleIcon},
    {name: 'facebook', Icon: FacebookIcon},
    {name: 'google', Icon: GoogleIcon},
    {name: 'phone', Icon: PhoneIcon},
  ];

  return (
    <Animated.View>
      <HStack space={'40px'} justifyContent={'center'}>
        {socials.map(({Icon}, index) => (
          <Box key={index} style={{transform: 'scale(0.8)'}}>
            <Icon />
          </Box>
        ))}
      </HStack>
    </Animated.View>
  );
}

export default React.memo(SocialLoginButton);
