import {Text, View} from 'native-base';
import React from 'react';

function Divider() {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={{flex: 1, height: 1, backgroundColor: 'rgba(3, 4, 94, 0.23)'}}
      />
      <Text
        mx={'5px'}
        color={'#425166'}
        fontFamily={'Poppins-Regular'}
        fontSize={'18px'}>
        {' '}
        Or
      </Text>
      <View
        style={{flex: 1, height: 1, backgroundColor: 'rgba(3, 4, 94, 0.23)'}}
      />
    </View>
  );
}

export default Divider;
