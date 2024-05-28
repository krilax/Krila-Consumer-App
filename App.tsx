import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import {RootStackParamList} from '@src/routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {nativeBaseTheme} from '@constants/theme';

import {
  EmailLoginScreen,
  OnboardScreen,
  ResetPasswordScreen,
  SignupScreen,
  SplashScreen,
} from '@src/screens';
import PhoneLoginScreen from '@src/screens/login/PhoneLoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NativeBaseProvider isSSR={false} theme={nativeBaseTheme}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator
              initialRouteName="SplashScreen"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
              <Stack.Screen name="SignupScreen" component={SignupScreen} />
              <Stack.Screen
                name="EmailLoginScreen"
                component={EmailLoginScreen}
              />
              <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
              />
              <Stack.Screen
                name="PhoneLoginScreen"
                component={PhoneLoginScreen}
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

export default App;
