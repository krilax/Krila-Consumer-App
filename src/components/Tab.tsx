import {Box} from 'native-base';
import React, {ReactElement, cloneElement} from 'react';
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {useDeviceType} from './hooks';
import {nativeBaseTheme} from '@constants/theme';
const {View} = Animated;

interface TabProps {
  iconName: string;
  children: ReactElement;
  onPress: () => void;
  transition: any;
  index: number;
}

function Tab({iconName, index, children}: TabProps) {
  const deviceType = useDeviceType();
  const active = index === 0;

  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <View
        style={[
          StyleSheet.absoluteFill,
          {...styles.icon, flexDirection: 'column'},
        ]}>
        <View
          style={{transform: [{scale: deviceType === 'mobile' ? 0.55 : 1}]}}>
          {children}
        </View>
        <Animated.Text
          style={{
            fontSize: deviceType === 'mobile' ? 9 : 10,
            color: 'white',
            fontFamily: 'Poppins-Regular',
            marginTop: deviceType === 'mobile' ? 0 : 7,
          }}>
          {iconName}
        </Animated.Text>
      </View>
      <Animated.View
        style={{
          ...styles.icon,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Animated.View
          style={{transform: [{scale: deviceType === 'mobile' ? 0.55 : 1}]}}>
          {cloneElement(children, {active})}
        </Animated.View>
        <Animated.Text
          style={{
            color: active
              ? nativeBaseTheme.colors.primary[1]
              : nativeBaseTheme?.colors.secondary[1],
            textAlign: 'center',
            fontFamily: 'Poppins-Regular',
            fontSize: deviceType === 'mobile' ? 9 : 10,
            marginTop: deviceType === 'mobile' ? 0 : 7,
          }}>
          {iconName}
        </Animated.Text>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flex: 1,
  },
});

export default Tab;
