import {MiniHeader, TabBar} from '@src/components';
import {Avatar, Box, Flex, HStack, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import TripIcon from '@assets/images/app/trip_icon.svg';

function FlightSmartSearchResultScreen() {
  return (
    <Flex flex={'1'} px={{md: '57px'}} mb={'1px'}>
      <MiniHeader
        title={'Search Flights'}
        description={'Let’s start your trip'}
      />

      <ScrollView mb="1px" flex={1}>
        <VStack
          mt={{md: '45px'}}
          bg="white"
          w="full"
          borderRadius={{md: '10px'}}
          px={{md: '34px'}}
          pt={{md: '24px'}}
          style={{
            shadowColor: 'rgba(0, 0, 0, 0.20)',
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: 1,
            shadowRadius: 46,
            elevation: 5,
          }}>
          <HStack justifyContent="space-between">
            <Text
              color="primary.1"
              fontFamily="Spartan-SemiBold"
              fontSize={{md: '20px'}}>
              Flights
            </Text>
            <Text
              color="primary.1"
              fontFamily="Poppins-Medium"
              fontSize={{md: '14px'}}>
              Change Flight
            </Text>
          </HStack>
          <Box
            backgroundColor="primary.1"
            py={{md: '34px'}}
            mt={{md: '29px'}}
            borderRadius="6px">
            <VStack alignItems="center">
              <Text
                fontFamily={'Poppins-Regular'}
                fontSize={'14px'}
                color={'#d9d9d9'}>
                Depart: Sun, May 21
              </Text>
            </VStack>
            <HStack
              alignItems={'center'}
              justifyContent={'center'}
              space={'12px'}>
              <VStack alignItems="center">
                <Text fontFamily="Poppins-SemiBold" fontSize={{md: '20px'}}>
                  14:10
                </Text>
                <Text fontSize={{md: '14px'}} fontFamily="Poppins-Medium">
                  DOH
                </Text>
              </VStack>
              <Box>
                <TripIcon />
              </Box>
              <VStack alignItems="center">
                <Text fontFamily="Poppins-SemiBold" fontSize={{md: '20px'}}>
                  14:10
                </Text>
                <Text fontSize={{md: '14px'}} fontFamily="Poppins-Medium">
                  LOS
                </Text>
              </VStack>
            </HStack>
            <VStack alignItems="center">
              <Text
                fontFamily={'Poppins-Regular'}
                fontSize={{md: '14px'}}
                color={'#d9d9d9'}>
                Economy
              </Text>
              <Text
                fontFamily={'Poppins-Regular'}
                fontSize={{md: '14px'}}
                color={'#d9d9d9'}>
                LH6578 (Codeshare)
              </Text>
            </VStack>
          </Box>
          <HStack
            alignItems={'center'}
            justifyContent={'center'}
            space={'12px'}>
            <Text
              color="primary.1"
              fontSize={'14px'}
              my={'21px'}
              textAlign={'center'}
              fontFamily={'Poppins-Regular'}>
              Baggage |
            </Text>
            <Text
              color="primary.1"
              fontSize={'14px'}
              my={'21px'}
              textAlign={'center'}
              fontFamily={'Poppins-Regular'}>
              Flight Plans & Cancellation Policies {`>`}
            </Text>
          </HStack>
        </VStack>
        <Box padding={{md: '32px'}} bg={'white'} mt={{md: '31px'}}>
          <Text
            color={'primary.1'}
            fontFamily={'Spartan-SemiBold'}
            fontSize={{md: '20px'}}>
            Stays
          </Text>
          <Text
            color={'primary.1'}
            mt={'12px'}
            fontFamily={'Poppins-Regular'}
            fontSize={{md: '14px'}}>
            Sun, May 19 - Mon, May 20 (1 night) {'>'}
          </Text>
        </Box>
      </ScrollView>

      <TabBar />
    </Flex>
  );
}

export default FlightSmartSearchResultScreen;
