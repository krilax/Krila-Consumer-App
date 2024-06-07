import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import {RootStackParamList} from '@src/routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {config, nativeBaseTheme} from '@constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PhoneLoginScreen from '@src/screens/login/PhoneLoginScreen';
import {
  BoardingPassengerScreen,
  CardPaymentScreen,
  SearchInputScreen,
  SearchResultScreen,
  SelectSeatScreen,
} from '@src/screens/booking/flight';
import {
  EmailLoginScreen,
  OnboardScreen,
  ResetPasswordScreen,
  SignupScreen,
  SplashScreen,
} from '@src/screens';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import BookingDetailsScreen from '@src/screens/booking/flight/BookingDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
  }, []);

  return (
    <GluestackUIProvider config={config}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NativeBaseProvider isSSR={false} theme={nativeBaseTheme}>
          <NavigationContainer>
            <SafeAreaProvider>
              <Stack.Navigator
                initialRouteName={
                  !isOnboardingCompleted ? 'SplashScreen' : 'SearchResultScreen'
                }
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
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
                <Stack.Screen
                  name="SearchInputScreen"
                  component={SearchInputScreen}
                />
                <Stack.Screen
                  name="SearchResultScreen"
                  component={SearchResultScreen}
                />
                <Stack.Screen
                  name="BookingDetailsScreen"
                  component={BookingDetailsScreen}
                />
                <Stack.Screen
                  name="CardPaymentScreen"
                  component={CardPaymentScreen}
                />
                <Stack.Screen
                  name="BoardingPassScreen"
                  component={BoardingPassengerScreen}
                />
                <Stack.Screen
                  name="SelectSeatScreen"
                  component={SelectSeatScreen}
                />
              </Stack.Navigator>
            </SafeAreaProvider>
          </NavigationContainer>
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </GluestackUIProvider>
  );
}

export default App;
