import React, {useMemo} from 'react';
import {HStack} from 'native-base';
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import Tab from './Tab';
import Home from '../tabIcons/Home';
import {useDeviceType} from '../hooks';
import Message from '../tabIcons/Message';
import Wallet from '../tabIcons/Wallet';
import Trips from '../tabIcons/Trips';
import User from '../tabIcons/User';

function TabBar() {
  const deviceType = useDeviceType();

  const tabBarRoutes = useMemo(
    () => [
      {name: 'Home', route: '', icon: <Home />},
      {name: 'Messages', route: '', icon: <Message />},
      {name: 'Wallet', route: '', icon: <Wallet />},
      {name: 'My Trips', route: '', icon: <Trips />},
      {name: 'Sign In', route: '', icon: <User />},
    ],
    [],
  );

  return (
    <HStack
      w={'full'}
      shadow={2}
      background={'white'}
      alignItems={'center'}
      justifyContent={'space-between'}
      px={{base: '29px', md: '71px'}}
      pb={{base: '5px', md: '7px'}}
      pt={{base: '12px', md: '14px'}}>
      {tabBarRoutes.map((tab, index) => {
        const {name, route, icon} = tab;
        return (
          <Animated.View
            style={[
              styles.tab,
              {
                width: deviceType === 'tablet' ? 56 : 50,
              },
            ]}
            key={index}>
            <Tab
              index={index}
              iconName={name}
              onPress={() => {}}
              transition={undefined}>
              {icon}
            </Tab>
          </Animated.View>
        );
      })}
    </HStack>
  );
}

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default React.memo(TabBar);
