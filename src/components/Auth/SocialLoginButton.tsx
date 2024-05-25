import {HStack} from 'native-base';
import React from 'react';
import Animated from 'react-native-reanimated';

function SocialLoginButton() {
  const socials = [
    {name: 'ios'},
    {name: 'meta'},
    {name: 'google'},
    {name: 'phone'},
  ];

  return (
    <Animated.View>
      <HStack space={'40px'} justifyContent={'center'}>
        {socials.map((socialAction, index) => (
          <Animated.View
            key={index}
            style={{
              width: 52,
              height: 52,
              backgroundColor: 'red',
            }}></Animated.View>
        ))}
      </HStack>
    </Animated.View>
  );
}

export default React.memo(SocialLoginButton);
