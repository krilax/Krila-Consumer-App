import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import {RootStackParamList} from '@src/routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {nativeBaseTheme} from '@constants/theme';

//components
import {OnboardScreen, SignupScreen, SplashScreen} from '@src/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NativeBaseProvider isSSR={false} theme={nativeBaseTheme}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator
              initialRouteName="SignupScreen"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
              <Stack.Screen name="SignupScreen" component={SignupScreen} />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

export default App;
