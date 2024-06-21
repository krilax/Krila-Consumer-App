import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {Suspense} from 'react';
import {useDeviceType} from '@src/components/hooks';
import {RootStackParamList} from '@src/routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {TouchableWithoutFeedback} from 'react-native';
import {Spinner} from '@gluestack-ui/themed-native-base';
import MiniHeader from '@src/components/MiniHeader';

const TabBar = React.lazy(() => import('@src/components/TabBar/TabBar'));

interface SearchResultScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

function SearchResultScreen({navigation}: SearchResultScreenProps) {
  const deviceType = useDeviceType();

  const onNavigate = (route: keyof RootStackParamList) => {
    navigation.navigate(route);
  };

  const flightSearchResults = [
    {
      routeInfo: {
        departure: {
          airportName: 'Hamad International Airport',
          airportCode: 'DOH',
          departureTime: '08:00 AM',
          departureDate: '2024-05-17',
        },
        destination: {
          airportName: 'Hamad International Airport',
          airportCode: 'DOH',
          arrivalTime: '08:00 AM',
          arrivalDate: '2024-05-17',
        },
        airline: 'Qatar Airways',
        stops: [
          {
            airportName: 'Heathrow Airport',
            airportCode: 'LHR',
            arrivalTime: '02:00 PM',
            departureTime: '04:00 PM',
          },
        ],
        price: {
          amount: 2052.75,
          currency: 'USD',
        },
        krilaTokenAmount: {
          amount: 500000,
          token: 'KC',
        },
      },
    },
  ];

  const duplicatedFlightSearchResults = Array.from({length: 10}, () => ({
    ...flightSearchResults[0],
    routeInfo: {
      ...flightSearchResults[0].routeInfo,
      departure: {...flightSearchResults[0].routeInfo.departure},
      destination: {...flightSearchResults[0].routeInfo.destination},
      stops: flightSearchResults[0].routeInfo.stops.map(stop => ({...stop})),
      price: {...flightSearchResults[0].routeInfo.price},
      krilaTokenAmount: {...flightSearchResults[0].routeInfo.krilaTokenAmount},
    },
  }));

  return (
    <Flex flex={'1'} mb={'1px'} justifyContent={'flex-start'}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        px={{md: '57px', base: '27px'}}>
        <MiniHeader
          title={'Search Flights'}
          description={'Let’s start your trip'}
        />
        <Box>
          <Suspense fallback={<Spinner size={'sm'} />}>
            {duplicatedFlightSearchResults.map(({routeInfo}, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => onNavigate('FlightSelectSeatScreen')}>
                <Box
                  key={index}
                  py={{md: '37px', base: '26px'}}
                  pb={{md: '20px'}}
                  minH={{md: '257px', base: '177px'}}
                  px={{md: '30px', base: '18px'}}
                  background={'white'}
                  mt={{md: '31px'}}
                  borderColor={'#E6E8E9'}
                  borderRadius={{md: '25px', base: '10px'}}
                  mb={{md: '30px', base: '13px'}}>
                  <HStack
                    w={'full'}
                    alignItems={'center'}
                    justifyContent={'space-between'}>
                    <VStack>
                      <Text
                        color={'primary.1'}
                        fontFamily={'Spartan-Medium'}
                        fontSize={{md: '20px', base: '14px'}}>
                        {routeInfo.departure.airportCode}
                      </Text>
                      <Text
                        color={'primary.1'}
                        fontSize={{md: '12px', base: '8px'}}
                        fontFamily={'Poppins-Regular'}>
                        {routeInfo.departure.airportName}
                      </Text>
                    </VStack>
                    <VStack justifyContent={'center'} alignItems={'center'}>
                      <Box
                        style={{
                          transform: deviceType === 'tablet' ? '0.9' : '0.7',
                        }}>
                        {/* <TripIcon /> */}
                      </Box>
                      <Text
                        mt={{md: '6px'}}
                        color={'primary.1'}
                        fontSize={{md: '12px', base: '9px'}}
                        fontFamily={'Poppins-Medium'}>
                        23:00 hours
                      </Text>
                    </VStack>
                    <VStack alignItems={'flex-end'}>
                      <Text
                        color={'primary.1'}
                        fontFamily={'Spartan-Medium'}
                        fontSize={{md: '20px', base: '14px'}}>
                        {routeInfo.departure.airportCode}
                      </Text>
                      <Text
                        color={'primary.1'}
                        fontSize={{md: '12px', base: '7px'}}
                        fontFamily={'Poppins-Regular'}>
                        {routeInfo.departure.airportName}
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack
                    mt={{md: '26px', base: '10px'}}
                    justifyContent={'space-between'}>
                    <VStack>
                      <Text
                        color={'primary.1'}
                        fontFamily={'Poppins-Medium'}
                        fontSize={{md: '16px', base: '12px'}}>
                        8:00AM
                      </Text>
                      <Text
                        color={'primary.1'}
                        fontSize={'12px'}
                        fontFamily={'Poppins-Regular'}>
                        May 17,2024
                      </Text>
                    </VStack>

                    <VStack alignItems={'flex-end'}>
                      <Text
                        color={'primary.1'}
                        fontFamily={'Poppins-Medium'}
                        fontSize={{md: '16px', base: '12px'}}>
                        8:00AM
                      </Text>
                      <Text
                        color={'primary.1'}
                        fontSize={'12px'}
                        fontFamily={'Poppins-Regular'}>
                        May 17,2024
                      </Text>
                    </VStack>
                  </HStack>
                  <Divider
                    mt={{md: '17px', base: '23px'}}
                    background={'#d9d9d9'}
                  />
                  <HStack
                    mt={{md: '26px', base: '10px'}}
                    justifyContent={'space-between'}>
                    <Box>
                      <HStack
                        alignItems={'center'}
                        space={{md: '2', base: '0'}}>
                        <Avatar
                          source={{
                            uri: 'https://dwglogo.com/wp-content/uploads/2016/03/Arabian-oryx_Qatar-Airways.png',
                          }}
                          size={deviceType === 'tablet' ? 'md' : 'sm'}
                          background={'white'}
                        />
                        <VStack>
                          <Box>
                            <Text
                              color={'secondary.2'}
                              fontFamily={'Poppins-Medium'}
                              fontSize={{base: '10px', md: '14px'}}>
                              Qatar Airways
                            </Text>
                            <Text
                              color={'secondary.1'}
                              fontSize={{md: '12px', base: '10px'}}>
                              1 Stop
                            </Text>
                          </Box>
                        </VStack>
                      </HStack>
                    </Box>
                    <HStack space={'6px'} alignItems={'center'}>
                      {/* <HStack alignItems={'center'}>
                  <Avatar
                    size={deviceType === 'tablet' ? 'md' : 'sm'}
                    source={require('@assets/images/app/krila_logo_icon.png')}
                    padding={'0'}
                    background={'white'}
                    borderColor={'white'}
                  />
                  <Text
                    color={'primary.1'}
                    fontSize={{md: '15px', base: '10px'}}
                    fontFamily={'Poppins-Regular'}>
                    500,000
                  </Text>
                </HStack> */}
                      <Text
                        color={'primary.1'}
                        fontSize={{md: '20px', base: '16px'}}
                        fontFamily={'Spartan-SemiBold'}>
                        $2,057.75
                      </Text>
                    </HStack>
                  </HStack>
                </Box>
              </TouchableWithoutFeedback>
            ))}
          </Suspense>
        </Box>
      </ScrollView>
      <TabBar />
    </Flex>
  );
}

export default React.memo(SearchResultScreen);
