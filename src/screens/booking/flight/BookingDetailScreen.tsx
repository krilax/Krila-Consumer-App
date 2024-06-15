import React, {Suspense, lazy} from 'react';
import {WINDOW_WIDTH} from '@constants/reusable';
import {Avatar, Box, Flex, HStack, Text, VStack, ScrollView} from 'native-base';
import {RootStackParamList} from '@src/routes';
import {StackNavigationProp} from '@react-navigation/stack';

const GradientButton = lazy(() => import('@src/components/GradientButton'));
const TabBar = lazy(() => import('@src/components/TabBar'));
const MiniHeader = lazy(() => import('@src/components/MiniHeader'));
const ContactDetail = lazy(() => import('./components/ContactDetail'));
const MasterCardIcon = lazy(() => import('@assets/images/app/mastercard.svg'));
const VisaIcon = lazy(() => import('@assets/images/app/Visa.svg'));
const BitcoinIcon = lazy(() => import('@assets/images/app/bitcoin.svg'));
const KrilaLogoIcon = lazy(() => import('@assets/images/app/krila.svg'));
const TripIcon = lazy(() => import('@assets/images/app/trip_icon.svg'));
const CuratingLoadingScreen = lazy(
  () => import('@src/components/loadingScreens/CuratingLoadingScreen'),
);

interface BookingDetailsScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

function BookingDetailsScreen({navigation}: BookingDetailsScreenProps) {
  const onNavigate = (route: keyof RootStackParamList) => {
    navigation.navigate(route);
  };

  return (
    <Suspense fallback={<CuratingLoadingScreen />}>
      <Flex flex={'1'} background={'#EFEFEF'}>
        <ScrollView
          px={{md: '57px', base: '27px'}}
          mb={'1px'}
          borderWidth={'1px'}>
          <MiniHeader title={'Booking'} description={'Let’s start your trip'} />
          <Box
            mt={{md: '45px'}}
            pb={{md: '56px'}}
            bg={'white'}
            w={'full'}
            borderRadius={{md: '10px'}}
            style={{
              borderRadius: 10,
              backgroundColor: '#f4f4f4',
              shadowColor: 'rgba(0, 0, 0, 0.20)',
              shadowOffset: {width: 2, height: 4},
              shadowOpacity: 1,
              shadowRadius: 46,
              elevation: 5,
            }}
            px={{md: '34px', base: '21px'}}
            pt={{md: '24px', base: '17px'}}>
            <HStack alignItems={'center'} space={'8px'} mb={{base: '13px'}}>
              <Avatar
                source={{
                  uri: 'https://crystalpng.com/wp-content/uploads/2023/09/Qatar-airways-animal-logo.png',
                }}
                height={{md: '36px', base: '20px'}}
                width={{md: '36px', base: '20px'}}
                borderWidth={'0'}
              />
              <Text
                color={'secondary.1'}
                fontFamily={'Poppins-Medium'}
                fontSize={{md: '14px', base: '10px'}}>
                Qatar Airways
              </Text>
            </HStack>
            <Box
              backgroundColor={'primary.1'}
              py={{base: '21px'}}
              px={{base: '19px'}}
              mt={{md: '29px'}}
              mb={{base: '13px'}}
              borderRadius={'6px'}>
              <HStack
                alignItems={'center'}
                w="full"
                justifyContent={'space-between'}>
                <VStack space={{md: '12px', base: '16px'}}>
                  <VStack>
                    <Text
                      fontFamily={'Poppins-SemiBold'}
                      fontSize={{md: '20px', base: '14px'}}>
                      DOH
                    </Text>
                    <Text
                      fontSize={{md: '10px', base: '8px'}}
                      fontFamily={'Poppins-Regular'}>
                      Doha
                    </Text>
                  </VStack>
                  <VStack>
                    <Text
                      fontFamily={'Poppins-Medium'}
                      fontSize={{base: '10px', md: '14px'}}>
                      8:00 AM
                    </Text>
                    <Text
                      fontSize={{base: '8px', md: '10px'}}
                      fontFamily={'Poppins-Regular'}>
                      May 21, 2024
                    </Text>
                  </VStack>
                </VStack>
                <VStack
                  h={'full'}
                  width={{md: '156px'}}
                  alignItems={'center'}
                  justifyContent={'flex-start'}>
                  <TripIcon width={'100%'} height={'18px'} />
                  <Text
                    fontFamily={'Poppins-Medium'}
                    fontSize={{md: '12px', base: '10px'}}
                    mt={'6px'}
                    color={'#B3B3B3'}>
                    23:00 hours
                  </Text>
                </VStack>
                <VStack space={{md: '12px', base: '16px'}}>
                  <VStack alignItems={'flex-end'}>
                    <Text
                      fontFamily={'Poppins-SemiBold'}
                      fontSize={{md: '20px', base: '14px'}}>
                      DOH
                    </Text>
                    <Text
                      fontSize={{md: '10px', base: '8px'}}
                      fontFamily={'Poppins-Regular'}>
                      Doha
                    </Text>
                  </VStack>
                  <VStack alignItems={'flex-end'}>
                    <Text
                      fontFamily={'Poppins-Medium'}
                      fontSize={{base: '10px', md: '14px'}}>
                      8:00 AM
                    </Text>
                    <Text
                      fontSize={{base: '8px', md: '10px'}}
                      fontFamily={'Poppins-Regular'}>
                      May 21, 2024
                    </Text>
                  </VStack>
                </VStack>
              </HStack>
            </Box>
            <Box
              mt={{md: '24px', base: '13px'}}
              pt={{md: '25px', base: '23px'}}
              pb={{md: '35px'}}
              px={{md: '25px', base: '23px'}}
              style={{
                borderRadius: 8,
                backgroundColor: '#FFF',
                shadowColor: 'rgba(0, 0, 0, 0.20)',
                shadowOffset: {width: 2, height: 4},
                shadowOpacity: 1,
                shadowRadius: 46,
                elevation: 5,
              }}>
              <Text
                color={'primary.1'}
                fontFamily={'Spartan-Medium'}
                mb={{md: '19px', base: '21px'}}>
                Passenger Information
              </Text>

              <HStack
                w="full"
                space={{md: '50px', base: '41px'}}
                flexWrap={{base: 'wrap', md: 'unset'}}>
                <ContactDetail title="Full Name" value="Samuel Anthony" />
                <ContactDetail title="Email Address" value="sam@thelle.io" />
                <ContactDetail title="Phone Number" value="+90 1122232123412" />
                <ContactDetail title="Date of Birth" value="30-05-2000" />
              </HStack>
            </Box>

            <Box
              mt={{md: '24px', base: '13px'}}
              pt={{md: '25px', base: '23px'}}
              pb={{md: '35px'}}
              px={{md: '25px', base: '23px'}}
              style={{
                borderRadius: 8,
                backgroundColor: '#FFF',
                shadowColor: 'rgba(0, 0, 0, 0.20)',
                shadowOffset: {width: 2, height: 4},
                shadowOpacity: 1,
                shadowRadius: 46,
                elevation: 5,
              }}>
              <Text
                color={'primary.1'}
                fontFamily={'Spartan-Medium'}
                fontSize={'16px'}
                mb={{md: '19px'}}>
                Flight Information
              </Text>

              <HStack
                w="full"
                space={{md: '50px', base: '20px'}}
                mt={{base: '13px'}}
                flexWrap={{base: 'wrap', md: 'unset'}}>
                <ContactDetail title="Full Number" value="LH6578" />
                <ContactDetail title="Seat" value="J7" />
                <ContactDetail title="Class" value="Economy" />
                <ContactDetail title="Baggage" value="5kg" />
              </HStack>
            </Box>

            <HStack
              w={'full'}
              width={'100%'}
              mt={{md: '48px'}}
              pb={'20px'}
              justifyContent={'space-between'}>
              <VStack
                flex={'1'}
                justifyContent={'center'}
                display={{base: 'none', md: 'flex'}}>
                <Text
                  color={'primary.1'}
                  mb={'16px'}
                  mt={{base: '16px', md: '0px'}}>
                  SECURE PAYMENTS PROVIDED BY
                </Text>
                <HStack space={3} direction="row">
                  <Box w={'56px'} h={'32px'}>
                    <MasterCardIcon width={'100%'} height={'100%'} />
                  </Box>
                  <Box w={'56px'} h={'32px'}>
                    <VisaIcon width={'100%'} height={'100%'} />
                  </Box>
                  <Box w={'56px'} h={'32px'}>
                    <BitcoinIcon width={'100%'} height={'100%'} />
                  </Box>
                  <Box w={'56px'} h={'32px'}>
                    <KrilaLogoIcon height={'100%'} width={'100%'} />
                  </Box>
                </HStack>
              </VStack>
              <VStack
                width={WINDOW_WIDTH * 0.4}
                space={'17px'}
                mt={{base: '28px', md: '0px'}}>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                  <Text
                    color={'primary.1'}
                    fontSize={'14px'}
                    fontFamily={'Poppins-Regular'}>
                    1 Passenger
                  </Text>
                  <Text color={'primary.1'} fontSize={'12px'}>
                    $1,0004.67
                  </Text>
                </HStack>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                  <Text
                    color={'primary.1'}
                    fontSize={'14px'}
                    fontFamily={'Poppins-Regular'}>
                    Tax and Fees
                  </Text>
                  <Text color={'primary.1'} fontSize={'12px'}>
                    $1,0004.67
                  </Text>
                </HStack>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                  <Text
                    color={'primary.1'}
                    fontSize={'14px'}
                    fontFamily={'Poppins-Bold'}>
                    Total
                  </Text>
                  <Text
                    color={'primary.1'}
                    fontSize={'12px'}
                    fontFamily={'Spartan-Bold'}>
                    $1,0004.67
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </Box>
          <Box mt={{md: '36px', base: '28px'}} mb={{base: '51px'}}>
            <GradientButton
              title="Proceed To Payment"
              colors={['#03045E', '#0608C4']}
              onPress={function () {
                onNavigate('CardPaymentScreen');
              }}
            />
          </Box>
        </ScrollView>
        <TabBar />
      </Flex>
    </Suspense>
  );
}

export default BookingDetailsScreen;
