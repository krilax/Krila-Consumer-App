import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {config, nativeBaseTheme} from '@constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GluestackUIProvider} from '@gluestack-ui/themed-native-base';
import {LogBox} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '@src/routes';
import {
  EmailLoginScreen,
  FlightBookingDetailsScreen,
  FlightPassengerInfoScreen,
  OnboardScreen,
  ResetPasswordScreen,
  SignupScreen,
  SplashScreen,
} from '@src/screens';
import PhoneLoginScreen from '@src/screens/login/PhoneLoginScreen';
import {
  FlightBoardingPassengerScreen,
  FlightSearchInputScreen,
  FlightSearchResultScreen,
  FlightSelectSeatScreen,
  PaymentScreen,
} from '@src/screens/booking/flight';

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
              <Stack.Navigator
                initialRouteName={
                  !isOnboardingCompleted ? 'SplashScreen' : 'EmailLoginScreen'
                }
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
                <Stack.Screen
                  name="FlightSearchInputScreen"
                  component={FlightSearchInputScreen}
                />
                <Stack.Screen
                  name="FlightSearchResultScreen"
                  component={FlightSearchResultScreen}
                />
                <Stack.Screen
                  name="FlightSelectSeatScreen"
                  component={FlightSelectSeatScreen}
                />
                <Stack.Screen
                  name="BookingDetailsScreen"
                  component={FlightBookingDetailsScreen}
                />
                <Stack.Screen
                  name="FlightPassengerInfoScreen"
                  component={FlightPassengerInfoScreen}
                />
                <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
                <Stack.Screen
                  name="BoardingPassScreen"
                  component={FlightBoardingPassengerScreen}
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
