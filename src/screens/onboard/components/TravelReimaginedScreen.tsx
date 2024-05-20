import {useHp} from 'constants/reusable';
import {Flex, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

function TravelReimaginedScreen({color, metadata, detail, title}: any) {
  return (
    <Flex flex={1} justifyContent={'flex-start'}>
      <View style={styles.redView} padding={30}>
        <Text>This stays at the back</Text>
      </View>
      <View style={[styles.overlay, {height: useHp(65)}]} padding={30}>
        <Text>This stays at the front</Text>
      </View>
    </Flex>
  );
}

const styles = StyleSheet.create({
  redView: {
    flex: 1,
    backgroundColor: 'red',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(TravelReimaginedScreen);
