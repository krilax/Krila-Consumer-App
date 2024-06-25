import {WINDOW_WIDTH} from '@constants/reusable';
import {StackNavigationProp} from '@react-navigation/stack';
import {Switch} from '@src/components';
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
import React, {Fragment, Suspense, lazy, useCallback, useState} from 'react';
import SearchAdSpot from '@src/components/advertising/SearchAdSpot';
import DepartureSelect from './components/DepartureSelect';
import DateDepartureSelect from './components/DateDepartureSelect';
import DateReturnSelect from './components/DateReturnSelect';
import DepartureDateSelection from './components/dateselections/DepartureDateSelection';
import ReturnDateSelection from './components/dateselections/ReturnDateSelection';
import FlightDestinationSelection from './components/FlightDestinationSelection';
import ReturnSelect from './components/ReturnSelect';
import GradientButton from '@src/components/GradientButton';
import FlightPassengerSelect from './components/FlightPassengerSelect';
import FlightTicketSelect from './components/FlightTicketSelect';
import PassengerSelection from './components/infoselections/PassengerSelection';
import TicketSelection from './components/infoselections/TicketSelection';
import NormalLoadingScreen from '@src/components/loadingScreens/NormalLoadingScreen';

const TabBar = lazy(() => import('@src/components/TabBar/TabBar'));

interface SearchInputScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const tabs = [
  {label: 'Round Trip', content: 'round-trip'},
  {label: 'One-way', content: 'one-way'},
];

function SearchInputScreen({navigation}: SearchInputScreenProps) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [destinationSelectionState, setDestinationSelectionState] =
    useState<boolean>(false);
  const [departureDateSelectionState, setDepartureDateSelectionState] =
    useState<boolean>(false);
  const [returnDateSelectionState, setReturnDateSelectionState] =
    useState<boolean>(false);
  const [passengerSelectionState, setPassengerSelectionState] =
    useState<boolean>(false);
  const [ticketSelectionState, setTicketSelectState] = useState<boolean>(false);

  const onSearchFlight = useCallback(() => {
    navigation.navigate('FlightSearchResultScreen');
  }, []);

  const onChangeDeparture = useCallback(() => {
    setDestinationSelectionState(true);
  }, []);

  const onChangeReturn = useCallback(() => {
    setDestinationSelectionState(true);
  }, []);

  const onChangeDepartureDate = useCallback((state: boolean) => {
    setDepartureDateSelectionState(state);
  }, []);

  const onChangeReturnDate = useCallback((state: boolean) => {
    setReturnDateSelectionState(state);
  }, []);

  const onChangePassengerSelectState = useCallback((state: boolean) => {
    setPassengerSelectionState(state);
  }, []);

  const onOpenTicketSelect = useCallback((state: boolean) => {
    setTicketSelectState(state);
  }, []);

  const onChangeTicketSelectState = useCallback((state: boolean) => {
    setTicketSelectState(state);
  }, []);

  return (
    <Suspense fallback={<NormalLoadingScreen />}>
      <VStack
        w={'full'}
        flex={1}
        position={'relative'}
        justifyContent={'flex-end'}>
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
                  <Fragment>
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
                        <DepartureSelect
                          onChangeDeparture={onChangeDeparture}
                        />
                        <HStack alignItems={'center'}>
                          <Divider
                            backgroundColor={'rgba(217, 217, 217, 0.75)'}
                            flex={'1'}
                          />
                          <Box
                            width={{base: '25px', md: '50px'}}
                            height={{base: '25px', md: '50px'}}
                            style={{
                              transform: [{scale: 0.7}],
                            }}>
                            <Switch width="100%" height="100%" />
                          </Box>
                        </HStack>

                        <ReturnSelect onChangeReturn={onChangeReturn} />
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
                          <DateDepartureSelect
                            onChangeDepartureDate={onChangeDepartureDate}
                          />
                          <DateReturnSelect
                            onChangeReturnDate={onChangeReturnDate}
                          />
                        </HStack>

                        <Divider
                          my={{md: '13px', base: '21px'}}
                          backgroundColor={'rgba(217, 217, 217, 0.75);'}
                        />

                        <HStack
                          justifyContent={'space-between'}
                          alignItems={'center'}>
                          <FlightPassengerSelect
                            {...{onChangePassengerSelectState}}
                          />
                          <FlightTicketSelect {...{onOpenTicketSelect}} />
                        </HStack>
                      </Box>
                    </Box>
                  </Fragment>
                ) : (
                  <Fragment>
                    {tabs[selectedTab].content === 'one-way' ? (
                      <Fragment>
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
                            <DepartureSelect
                              onChangeDeparture={onChangeDeparture}
                            />
                            <Divider
                              my={{md: '13px', base: '21px'}}
                              backgroundColor={'rgba(217, 217, 217, 0.75);'}
                            />
                            <DepartureSelect
                              onChangeDeparture={onChangeDeparture}
                            />
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
                              <DateDepartureSelect
                                onChangeDepartureDate={onChangeDepartureDate}
                              />
                              <DateReturnSelect
                                onChangeReturnDate={onChangeReturnDate}
                              />
                            </HStack>

                            <Divider
                              my={{md: '13px', base: '21px'}}
                              backgroundColor={'rgba(217, 217, 217, 0.75);'}
                            />

                            <HStack
                              justifyContent={'space-between'}
                              alignItems={'center'}>
                              <FlightPassengerSelect
                                {...{onChangePassengerSelectState}}
                              />
                              <FlightTicketSelect {...{onOpenTicketSelect}} />
                            </HStack>
                          </Box>
                        </Box>
                      </Fragment>
                    ) : (
                      tabs[selectedTab].content === 'multi' && null
                    )}
                  </Fragment>
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

        {/* Selections */}
        <FlightDestinationSelection
          {...{destinationSelectionState, setDestinationSelectionState}}
        />
        <DepartureDateSelection
          {...{departureDateSelectionState, onChangeDepartureDate}}
        />
        <ReturnDateSelection
          {...{returnDateSelectionState, onChangeReturnDate}}
        />
        <PassengerSelection
          {...{onChangePassengerSelectState, passengerSelectionState}}
        />
        <TicketSelection
          {...{ticketSelectionState, onChangeTicketSelectState}}
        />
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
