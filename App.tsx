import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routes} from './src/routes';
import {NativeBaseProvider, Text, View} from 'native-base';

const Stack = createNativeStackNavigator<Routes>();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <View>
            <Text>Hello world</Text>
          </View>
        </SafeAreaProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
