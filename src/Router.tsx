import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from './routes';
import PhoneLoginScreen from '@src/screens/login/PhoneLoginScreen';
import {
  BoardingPassengerScreen,
  CardPaymentScreen,
  FlightSelectSeatScreen,
  SearchInputScreen,
  SearchResultScreen,
} from '@src/screens/booking/flight';
import {
  EmailLoginScreen,
  FlightSmartSearchResultScreen,
  OnboardScreen,
  ResetPasswordScreen,
  SignupScreen,
  SplashScreen,
} from '@src/screens';
import BookingDetailsScreen from '@src/screens/booking/flight/BookingDetailScreen';
import FlightPassengerInfoScreen from '@src/screens/booking/flight/FlightPassengerInfoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

interface RouterProps {
  isOnboardingCompleted: string | boolean;
}

function Router({isOnboardingCompleted}: RouterProps) {
  return (
    <Stack.Navigator
      initialRouteName={
        !isOnboardingCompleted ? 'SplashScreen' : 'FlightSelectSeatScreen'
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
        component={BoardingPassengerScreen}
      />
      {/*   <Stack.Screen
    name="FlightSmartSearchResultScreen"
    component={FlightSmartSearchResultScreen}
  /> */}
    </Stack.Navigator>
  );
}

export default Router;
