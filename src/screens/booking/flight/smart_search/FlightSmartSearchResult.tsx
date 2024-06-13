import {FormTextInput, MiniHeader, TabBar} from '@src/components';
import {
  Box,
  Center,
  CheckIcon,
  Flex,
  HStack,
  ScrollView,
  Select,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import TripIcon from '@assets/images/app/trip_icon.svg';
import FilterIcon from '@assets/images/app/filter_icon.svg';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {Rating} from 'react-native-ratings';

function FlightSmartSearchResultScreen() {
  return (
    <Flex flex={'1'} px={{md: '57px'}} mb={'1px'}>
      <MiniHeader
        title={'Search Flights'}
        description={'Let’s start your trip'}
      />
      <ScrollView
        mb="1px"
        flex={1}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
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
        <Box
          padding={{md: '32px'}}
          bg={'white'}
          mt={{md: '31px'}}
          borderRadius={'8px'}>
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

          <HStack mt={{md: '19px'}} alignItems={'center'} space={'11'}>
            <Select
              width={{md: '152px'}}
              borderColor={'#C4C4C4'}
              height={{md: '58px'}}
              borderWidth={'1px'}
              accessibilityLabel="Lagos"
              placeholder="Lagos"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              minH={'42px'}
              mt={1}>
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
            <HStack alignItems={'center'} flex={'1'} space={'11'}>
              <Flex flex={'1'}>
                <FormTextInput
                  width="100%"
                  placeholder={'Location / Brand / Hotel Name'}
                />
              </Flex>
              <Center>
                <FilterIcon width={'25px'} height={'22px'} />
              </Center>
            </HStack>
          </HStack>
        </Box>

        <VStack w={'full'} mb={'100px'}>
          <HStack
            mt={{md: '36px'}}
            py={{md: '18px'}}
            px={{md: '22px'}}
            space={{md: '20px'}}
            bg={'white'}
            borderRadius={'8px'}>
            <Box
              w={{md: '167px'}}
              h={{md: '213px'}}
              bg="black"
              borderRadius={'5px'}></Box>
            <VStack flex={'1'}>
              <Text
                color={'primary.1'}
                fontFamily={'Spartan-Medium'}
                fontSize={{md: '16px'}}>
                Hampton Hill & Suites, by Hilton
              </Text>
              <HStack
                space={'1'}
                alignItems={'center'}
                mt={{md: '6px'}}
                mb={{md: '10px'}}>
                <Icon size={20} name="location-dot" />
                <Text color={'secondary.1'}>Vancouver Downtown</Text>
              </HStack>
              <Rating
                imageSize={15}
                style={{
                  alignItems: 'flex-start',
                }}
              />
              <HStack justifyContent="space-between" w={'full'}>
                <VStack flex="1">
                  <HStack alignItems="center" mt={{md: '11px'}} space={2}>
                    <Box
                      bg="primary.1"
                      px={{md: 2}}
                      py={{md: 0.5}}
                      borderTopLeftRadius="18px"
                      borderBottomLeftRadius="18px"
                      borderBottomRightRadius="18px">
                      <Text color="white">4.0/5</Text>
                    </Box>
                    <Text color="secondary.1">7 Reviews</Text>
                  </HStack>
                  <Box
                    flex={'1'}
                    mt={{md: '12px'}}
                    borderRadius={{md: '9px'}}
                    bg={'rgba(23, 161, 250, 0.04)'}
                    px={{md: '16px'}}
                    py={{md: '16px'}}>
                    <HStack
                      alignItems={'center'}
                      justifyContent={'space-between'}>
                      <Text color={'primary.1'} fontSize={{md: '12px'}}>
                        Executive Room
                      </Text>
                      <Text fontSize={'8px'} color={'primary.1'}>
                        Change Room
                      </Text>
                    </HStack>
                    <HStack space={'11px'} mt={'4px'}>
                      <Text color={'primary.1'} fontSize={'8px'}>
                        1 King bed{' '}
                      </Text>
                      <Text color={'primary.1'} fontSize={'8px'}>
                        1 Breakfast{' '}
                      </Text>
                    </HStack>
                    <HStack
                      alignItems={'center'}
                      space={'7px'}
                      py={{md: '7px'}}
                      px={{md: '9px'}}
                      mt={{md: '11px'}}
                      bg={'rgba(23, 161, 250, 0.14)'}
                      borderRadius={'5px'}>
                      <Icon name="circle-check" color={'#45C126'} />
                      <Text color={'secondary.1'} fontSize={'8px'}>
                        Free Booking cancellation before May 22.
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
                <VStack flex="1" alignItems={'flex-end'}>
                  <Text color="secondary.1">HT 1,895</Text>
                  <Text
                    color={'primary.1'}
                    fontFamily={'Spartan-SemiBold'}
                    fontSize={{md: '20px'}}>
                    $2,100
                  </Text>
                  <Text color={'#B3B3B3'} fontFamily={'Poppins-Medium'}>
                    Flight + Hotel per person
                  </Text>
                  <Text color={'secondary.1'} fontFamily={'Poppins-Medium'}>
                    Incl. taxes & fees
                  </Text>
                  <HStack
                    mt={{md: '6px'}}
                    minW={{md: '171px'}}
                    bg={'#FFE53C'}
                    py={{md: '15px'}}
                    px={{md: '24px'}}
                    borderRadius={'10px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    space={'8px'}>
                    <Icon name="plane-up" size={20} color={'#03045E'} />
                    <Icon name="plus" size={20} color={'#03045E'} />
                    <Icon name="house" size={20} color={'#03045E'} />
                    <Text
                      color={'primary.1'}
                      fontFamily={'Poppins-Medium'}
                      fontSize={'14px'}>
                      Select
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </ScrollView>

      <TabBar />
    </Flex>
  );
}

export default FlightSmartSearchResultScreen;
