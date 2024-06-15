import {WINDOW_WIDTH} from '@constants/reusable';
import {StackNavigationProp} from '@react-navigation/stack';
import {Switch} from '@src/components';
import NormalLoadingScreen from '@src/components/loadingScreens/NormalLoadingScreen';
import {RootStackParamList} from '@src/routes';
import {
  Box,
  Divider,
  Flex,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {Suspense, lazy, useState} from 'react';

const GradientButton = lazy(() => import('@src/components/GradientButton'));
const SearchAdSpot = lazy(
  () => import('@src/components/advertising/SearchAdSpot'),
);
const TabBar = lazy(() => import('@src/components/TabBar'));

interface SearchInputScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

function SearchInputScreen({navigation}: SearchInputScreenProps) {
  const tabs = [
    {label: 'Round Trip', content: 'round-trip'},
    {label: 'One-way', content: 'one-way'},
  ];
  const [selectedTab, setSelectedTab] = useState(0);

  const onSearchFlight = async () => {
    navigation.navigate('SearchResultScreen');
  };

  return (
    <Suspense fallback={<NormalLoadingScreen />}>
      <VStack w={'full'} flex={1}>
        <Flex flex={1}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <SearchAdSpot />
            <Flex
              flex={1}
              justifyContent={'flex-start'}
              backgroundColor={'#F7F7F7'}>
              <VStack
                mt={{md: '49px', base: '22px'}}
                px={{md: '39px', base: '27px'}}
                pb={{md: '33px', base: '10px'}}>
                <HStack
                  w={'full'}
                  space={{md: '10px', base: '5px'}}
                  justifyContent="flex-start"
                  width={{md: WINDOW_WIDTH * 0.4, base: WINDOW_WIDTH * 0.4}}>
                  {tabs.map((tab, index) => (
                    <Pressable
                      key={index}
                      flex={1}
                      onPress={() => setSelectedTab(index)}
                      alignItems="center"
                      justifyContent="center"
                      borderBottomWidth={selectedTab === index ? 2 : 0}
                      borderBottomColor={
                        selectedTab === index ? 'primary.1' : 'gray.300'
                      }
                      bg={'#f7f7f7'}
                      py={'7px'}>
                      <Text
                        fontFamily={
                          selectedTab === index
                            ? 'Poppins-Bold'
                            : 'Poppins-Bold'
                        }
                        color={'primary.1'}
                        fontSize={{md: '14px', base: '10px'}}>
                        {tab.label}
                      </Text>
                    </Pressable>
                  ))}
                </HStack>
                {tabs[selectedTab].content === 'round-trip' ? (
                  <>
                    <Box
                      mt={{md: '42px', base: '27px'}}
                      bg="white"
                      py={{md: '19px', base: '20px'}}
                      px={{md: '30px', base: '23px'}}
                      borderRadius={{base: '20px', md: '20px'}}
                      style={{
                        shadowColor: 'rgba(0, 0, 0, 0.20)',
                        shadowOffset: {width: 2, height: 4},
                        shadowOpacity: 0.2,
                        shadowRadius: 23,
                        elevation: 4,
                      }}>
                      <Box w="100%">
                        <Text
                          fontSize={{md: '14px', base: '10px'}}
                          fontFamily={'Poppins-Regular'}
                          mb={{base: '7px'}}
                          color={'#7D8093'}>
                          From
                        </Text>
                        <Text
                          mb={{base: '2px'}}
                          color={'primary.1'}
                          fontFamily={'Spartan-Regular'}
                          fontSize={{md: '24px', base: '14px'}}>
                          Doha Doh
                        </Text>
                        <Text
                          color="#7D8093"
                          fontFamily={'Poppins-Regular'}
                          fontSize={{md: '12px', base: '10px'}}>
                          Hamad International Airport
                        </Text>
                        <HStack alignItems={'center'}>
                          <Divider
                            backgroundColor={'rgba(217, 217, 217, 0.75);'}
                            flex={'1'}
                          />
                          <Box
                            width={{base: '30px', md: '50px'}}
                            height={{base: '30px', md: '50px'}}
                            style={{
                              transform: [{scale: 0.7}],
                            }}>
                            <Switch width="100%" height="100%" />
                          </Box>
                        </HStack>
                        <Text
                          fontSize={{md: '14px', base: '10px'}}
                          fontFamily={'Poppins-Regular'}
                          mb={{base: '7px'}}
                          color={'#7D8093'}>
                          To
                        </Text>
                        <Text
                          color={'primary.1'}
                          fontSize={{md: '24px', base: '14px'}}
                          fontFamily={'Spartan-Regular'}
                          mb={{base: '2px'}}>
                          Lagos LOS
                        </Text>
                        <Text
                          color="#7D8093"
                          fontFamily={'Poppins-Regular'}
                          fontSize={{md: '12px', base: '10px'}}>
                          Hamad International Airport
                        </Text>
                      </Box>
                    </Box>
                    <Box
                      mt={{md: '42px', base: '27px'}}
                      bg="white"
                      py={{md: '19px', base: '20px'}}
                      px={{md: '30px', base: '23px'}}
                      borderRadius={{base: '20px', md: '20px'}}
                      style={{
                        shadowColor: 'rgba(0, 0, 0, 0.20)',
                        shadowOffset: {width: 2, height: 4},
                        shadowOpacity: 0.2,
                        shadowRadius: 23,
                        elevation: 4,
                      }}>
                      <Box w="100%">
                        <HStack
                          justifyContent={'space-between'}
                          alignContent={'center'}>
                          <VStack>
                            <Text
                              fontSize={{md: '14px', base: '10px'}}
                              fontFamily={'Poppins-Regular'}
                              mb={{base: '7px'}}
                              color={'#7D8093'}>
                              Departure
                            </Text>
                            <Text
                              mb={{base: '2px'}}
                              color={'primary.1'}
                              fontFamily={'Spartan-Regular'}
                              fontSize={{md: '24px', base: '14px'}}>
                              May 17, 2024
                            </Text>
                            <Text
                              color="#7D8093"
                              fontFamily={'Poppins-Regular'}
                              fontSize={{md: '12px', base: '10px'}}>
                              Friday
                            </Text>
                          </VStack>

                          <VStack alignItems={'flex-end'}>
                            <Text
                              fontSize={{md: '14px', base: '10px'}}
                              fontFamily={'Poppins-Regular'}
                              mb={{base: '7px'}}
                              color={'#7D8093'}>
                              Return
                            </Text>
                            <Text
                              mb={{base: '2px'}}
                              color={'primary.1'}
                              fontFamily={'Spartan-Regular'}
                              fontSize={{md: '24px', base: '14px'}}>
                              May 17, 2024
                            </Text>
                            <Text
                              color="#7D8093"
                              fontFamily={'Poppins-Regular'}
                              fontSize={{md: '12px', base: '10px'}}>
                              Friday
                            </Text>
                          </VStack>
                        </HStack>

                        <Divider
                          my={{md: '13px', base: '21px'}}
                          backgroundColor={'rgba(217, 217, 217, 0.75);'}
                        />

                        <HStack
                          justifyContent={'space-between'}
                          alignItems={'center'}>
                          <VStack>
                            <Text
                              fontSize={{md: '14px', base: '10px'}}
                              fontFamily={'Poppins-Regular'}
                              mb={{base: '7px'}}
                              color={'#7D8093'}>
                              Passengers
                            </Text>
                            <Text
                              color={'primary.1'}
                              fontSize={{md: '24px', base: '14px'}}
                              fontFamily={'Spartan-Regular'}
                              mb={{base: '2px'}}>
                              1 Passenger
                            </Text>
                            <Text
                              color="#7D8093"
                              fontFamily={'Poppins-Regular'}
                              fontSize={{md: '12px', base: '10px'}}>
                              1 Adult
                            </Text>
                          </VStack>

                          <VStack alignItems={'flex-end'}>
                            <Text
                              fontSize={{md: '14px', base: '10px'}}
                              fontFamily={'Poppins-Regular'}
                              mb={{base: '7px'}}
                              color={'#7D8093'}>
                              Ticket Class
                            </Text>
                            <Text
                              color={'primary.1'}
                              fontSize={{md: '24px', base: '14px'}}
                              fontFamily={'Spartan-Regular'}
                              mb={{base: '2px'}}>
                              Economy
                            </Text>
                          </VStack>
                        </HStack>
                      </Box>
                    </Box>
                  </>
                ) : tabs[selectedTab].content === 'one-way' ? (
                  <Box
                    mt={{md: '42px', base: '27px'}}
                    bg="white"
                    py={{md: '19px', base: '20px'}}
                    px={{md: '30px', base: '23px'}}
                    borderRadius={'17px'}
                    style={{
                      shadowColor: 'rgba(0, 0, 0, 0.20)',
                      shadowOffset: {width: 2, height: 4},
                      shadowOpacity: 0.2,
                      shadowRadius: 23,
                      elevation: 4,
                    }}>
                    <Box w="100%">
                      <Text
                        fontSize={{md: '14px', base: '10px'}}
                        fontFamily={'Poppins-Regular'}
                        mb={{base: '7px'}}
                        color={'#7D8093'}>
                        From
                      </Text>
                      <Text
                        mb={{base: '2px'}}
                        color={'primary.1'}
                        fontFamily={'Spartan-Regular'}
                        fontSize={{md: '24px', base: '14px'}}>
                        Doha Doh
                      </Text>
                      <Text
                        color="#7D8093"
                        fontFamily={'Poppins-Regular'}
                        fontSize={{md: '12px', base: '10px'}}>
                        Hamad International Airport
                      </Text>
                      <Divider
                        my={{md: '13px', base: '21px'}}
                        backgroundColor={'rgba(217, 217, 217, 0.75);'}
                      />
                      <Text
                        fontSize={{md: '14px', base: '10px'}}
                        fontFamily={'Poppins-Regular'}
                        mb={{base: '7px'}}
                        color={'#7D8093'}>
                        To
                      </Text>
                      <Text
                        color={'primary.1'}
                        fontSize={{md: '24px', base: '14px'}}
                        fontFamily={'Spartan-Regular'}
                        mb={{base: '2px'}}>
                        Lagos LOS
                      </Text>
                      <Text
                        color="#7D8093"
                        fontFamily={'Poppins-Regular'}
                        fontSize={{md: '12px', base: '10px'}}>
                        Hamad International Airport
                      </Text>
                    </Box>
                  </Box>
                ) : (
                  tabs[selectedTab].content === 'multi' && null
                )}

                <Box
                  mt={{md: '36px', base: '22px'}}
                  mb={{base: '32px', md: '0px'}}>
                  <GradientButton
                    title="Search Flights"
                    colors={['#03045E', '#0608C4']}
                    onPress={() => onSearchFlight()}
                  />
                </Box>
              </VStack>
            </Flex>
          </ScrollView>
        </Flex>
        <TabBar />
      </VStack>
    </Suspense>
  );
}

export default React.memo(SearchInputScreen);

{
  /* <Box py={{md: '36px', base: '27px'}} backgroundColor={'#F3F3F3'}>
              <HStack
                justifyContent={'space-between'}
                px={{md: '91px', base: '27px'}}>
                {[
                  'Cheaper Flights',
                  'Flight Status',
                  'My Bookings',
                  'Price Alerts',
                ].map((_, index) => (
                  <VStack
                    key={index}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Box
                      borderRadius={{md: '7px'}}
                      bg="white"
                      mb={{md: '23px'}}
                      w="86px"
                      padding={{md: '28px'}}>
                      <Text color={'black'}>Icon</Text>
                    </Box>
                    <Text
                      color={'primary.1'}
                      textAlign={'center'}
                      fontSize={{md: '14px', base: '10px'}}
                      fontFamily={'Spartan-Regular'}>
                      {_}
                    </Text>
                  </VStack>
                ))}
              </HStack>
            </Box> */
}
