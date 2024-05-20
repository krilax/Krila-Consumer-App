import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import {RootStackParamList} from '@src/routes';
import {OnboardScreen, SplashScreen} from '@src/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
