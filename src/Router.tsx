import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from './routes';
import PhoneLoginScreen from '@src/screens/login/PhoneLoginScreen';
import {
  FlightBoardingPassengerScreen,
  FlightSearchInputScreen,
  FlightSearchResultScreen,
  FlightSelectSeatScreen,
  PaymentScreen,
} from '@src/screens/booking/flight';
import {
  EmailLoginScreen,
  FlightBookingDetailsScreen,
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
        !isOnboardingCompleted ? 'SplashScreen' : 'OnboardScreen'
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
  );
}

export default Router;
