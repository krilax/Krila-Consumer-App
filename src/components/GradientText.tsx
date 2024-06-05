import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import {Text} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

function GradientText(props: any) {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={['#050683', '#0709C5']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
}

export default GradientText;
