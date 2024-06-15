import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {config, nativeBaseTheme} from '@constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GluestackUIProvider} from '@gluestack-ui/themed-native-base';
import Router from '@src/Router';
import {LogBox} from 'react-native';

function App() {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState<
    string | boolean
  >('false');

  if (isOnboardingCompleted === null) {
    return null;
  }

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('onboardingCompleted');
        setIsOnboardingCompleted(value === 'true');
      } catch (error) {
        console.error('Error fetching onboarding completion status:', error);
      }
    };
    checkOnboardingStatus();

    LogBox.ignoreLogs([
      'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
    ]);
  }, []);

  return (
    <GluestackUIProvider config={config}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NativeBaseProvider isSSR={false} theme={nativeBaseTheme}>
          <NavigationContainer>
            <SafeAreaProvider>
              <Router isOnboardingCompleted={isOnboardingCompleted} />
            </SafeAreaProvider>
          </NavigationContainer>
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </GluestackUIProvider>
  );
}

export default App;
