import {MiniHeader, TabBar} from '@src/components';
import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import TripIcon from '@assets/images/app/trip_icon_w.svg';

function SearchResultScreen() {
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

  const duplicatedFlightSearchResults = Array.from({length: 50}, () => ({
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
    <Flex flex={'1'} px={{md: '57px'}} mb={'1px'}>
      <MiniHeader
        title={'Search Flights'}
        description={'Let’s start your trip'}
      />

      <ScrollView>
        {duplicatedFlightSearchResults.map(({routeInfo}, index) => (
          <Box
            key={index}
            py={{md: '37px'}}
            pb={{md: '20px'}}
            minH={'257px'}
            px={{md: '30px'}}
            background={'white'}
            mt={{md: '31px'}}
            borderColor={'#E6E8E9'}
            borderRadius={{md: '25px'}}
            mb={{md: '30px'}}>
            <HStack
              w={'full'}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <VStack>
                <Text
                  color={'primary.1'}
                  fontFamily={'Spartan-Medium'}
                  fontSize={{md: '20px'}}>
                  {routeInfo.departure.airportCode}
                </Text>
                <Text
                  color={'primary.1'}
                  fontSize={{md: '12px'}}
                  fontFamily={'Poppins-Regular'}>
                  {routeInfo.departure.airportName}
                </Text>
              </VStack>
              <VStack justifyContent={'center'} alignItems={'center'}>
                <TripIcon />
                <Text
                  mt={{md: '6px'}}
                  color={'primary.1'}
                  fontSize={{md: '12px'}}
                  fontFamily={'Poppins-Medium'}>
                  23:00 hours
                </Text>
              </VStack>
              <VStack alignItems={'flex-end'}>
                <Text
                  color={'primary.1'}
                  fontFamily={'Spartan-Medium'}
                  fontSize={{md: '20px'}}>
                  {routeInfo.departure.airportCode}
                </Text>
                <Text
                  color={'primary.1'}
                  fontSize={{md: '12px'}}
                  fontFamily={'Poppins-Regular'}>
                  {routeInfo.departure.airportName}
                </Text>
              </VStack>
            </HStack>
            <HStack mt={{md: '26px'}} justifyContent={'space-between'}>
              <VStack>
                <Text
                  color={'primary.1'}
                  fontFamily={'Poppins-Medium'}
                  fontSize={'16px'}>
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
                  fontSize={'16px'}>
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
            <Divider mt={{md: '17px'}} />
            <HStack mt={{md: '26px'}} justifyContent={'space-between'}>
              <Box>
                <HStack alignItems={'center'} space={'2'}>
                  <Avatar
                    source={{
                      uri: 'https://dwglogo.com/wp-content/uploads/2016/03/Arabian-oryx_Qatar-Airways.png',
                    }}
                    size={'md'}
                    background={'white'}
                  />
                  <VStack>
                    <Box>
                      <Text color={'secondary.2'} fontFamily={'Poppins-Medium'}>
                        Qatar Airways
                      </Text>
                      <Text color={'secondary.1'}>1 Stop</Text>
                    </Box>
                  </VStack>
                </HStack>
              </Box>
              <HStack space={'6px'} alignItems={'center'}>
                <HStack alignItems={'center'} space={'1'}>
                  <Avatar
                    size={'md'}
                    source={require('@assets/images/app/krila_logo_icon.png')}
                    padding={'0'}
                    background={'white'}
                    borderColor={'white'}
                  />
                  <Text
                    color={'primary.1'}
                    fontSize={{md: '15px'}}
                    fontFamily={'Poppins-Regular'}>
                    500,000
                  </Text>
                </HStack>
                <Text
                  color={'primary.1'}
                  fontSize={{md: '20px'}}
                  fontFamily={'Spartan-SemiBold'}>
                  $2,057.75
                </Text>
              </HStack>
            </HStack>
          </Box>
        ))}
      </ScrollView>
      <TabBar />
    </Flex>
  );
}

export default SearchResultScreen;
