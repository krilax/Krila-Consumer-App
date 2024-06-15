import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from './routes';
import PhoneLoginScreen from '@src/screens/login/PhoneLoginScreen';
import {
  CardPaymentScreen,
  FlightBoardingPassengerScreen,
  FlightSelectSeatScreen,
  SearchInputScreen,
  SearchResultScreen,
} from '@src/screens/booking/flight';
import {
  BookingDetailsScreen,
  EmailLoginScreen,
  FlightPassengerInfoScreen,
  OnboardScreen,
  ResetPasswordScreen,
  SignupScreen,
  SplashScreen,
} from '@src/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

interface RouterProps {
  isOnboardingCompleted: string | boolean;
}

function Router({isOnboardingCompleted}: RouterProps) {
  return (
    <Stack.Navigator
      initialRouteName={
        !isOnboardingCompleted ? 'SplashScreen' : 'EmailLoginScreen'
      }
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="EmailLoginScreen" component={EmailLoginScreen} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
      <Stack.Screen name="PhoneLoginScreen" component={PhoneLoginScreen} />
      <Stack.Screen name="SearchInputScreen" component={SearchInputScreen} />
      <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} />
      <Stack.Screen
        name="FlightSelectSeatScreen"
        component={FlightSelectSeatScreen}
      />
      <Stack.Screen
        name="BookingDetailsScreen"
        component={BookingDetailsScreen}
      />
      <Stack.Screen
        name="FlightPassengerInfoScreen"
        component={FlightPassengerInfoScreen}
      />
      <Stack.Screen name="CardPaymentScreen" component={CardPaymentScreen} />
      <Stack.Screen
        name="BoardingPassScreen"
        component={FlightBoardingPassengerScreen}
      />
    </Stack.Navigator>
  );
}

export default Router;
