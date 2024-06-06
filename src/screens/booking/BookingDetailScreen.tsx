import {WINDOW_WIDTH} from '@constants/reusable';
import {GradientButton, TabBar} from '@src/components';
import {Avatar, Box, Flex, HStack, Text, VStack, ScrollView} from 'native-base';
import ContactDetail from './components/ContactDetail';
import MasterCardIcon from '@assets/images/app/mastercard.svg';
import VisaIcon from '@assets/images/app/Visa.svg';
import BitcoinIcon from '@assets/images/app/bitcoin.svg';
import KrilaLogoIcon from '@assets/images/app/krila.svg';
import TripIcon from '@assets/images/app/trip_icon.svg';

function BookingDetailsScreen() {
  return (
    <Flex flex={'1'}>
      <ScrollView
        px={{md: '57px'}}
        pt={{md: '51px'}}
        paddingBottom={'91px'}
        borderWidth={'1px'}>
        <Box
          h={{md: '166px'}}
          w={'full'}
          bg={'black'}
          borderRadius={'2xl'}></Box>
        <Box
          mt={{md: '45px'}}
          pb={{md: '56px'}}
          bg={'white'}
          w={'full'}
          borderRadius={{md: '10px'}}
          style={{
            borderRadius: 10,
            backgroundColor: '#FFF',
            shadowColor: 'rgba(0, 0, 0, 0.20)',
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: 1,
            shadowRadius: 46,
            elevation: 5,
          }}
          px={{md: '34px'}}
          pt={{md: '24px'}}>
          <HStack alignItems={'center'} space={'8px'} mb={{}}>
            <Avatar
              source={{
                uri: 'https://crystalpng.com/wp-content/uploads/2023/09/Qatar-airways-animal-logo.png',
              }}
              height={{md: '36px'}}
              width={{md: '36px'}}
            />
            <Text
              color={'secondary.1'}
              fontFamily={'Poppins-Medium'}
              fontSize={{md: '14px'}}>
              Qatar Airways
            </Text>
          </HStack>

          <Box
            backgroundColor={'primary.1'}
            py={{md: '34px'}}
            mt={{md: '29px'}}
            borderRadius={'6px'}>
            <HStack
              alignItems={'center'}
              w="full"
              justifyContent={'center'}
              space={{md: '23px'}}>
              <VStack space={{md: '12px'}}>
                <VStack>
                  <Text fontFamily={'Poppins-SemiBold'} fontSize={{md: '20px'}}>
                    DOH
                  </Text>
                  <Text fontSize={{md: '10px'}} fontFamily={'Poppins-Regular'}>
                    Doha
                  </Text>
                </VStack>
                <VStack>
                  <Text fontFamily={'Poppins-Medium'} fontSize={'14px'}>
                    8:00 AM
                  </Text>
                  <Text fontSize={'10px'} fontFamily={'Poppins-Regular'}>
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
                  fontSize={{md: '12px'}}
                  mt={'6px'}
                  color={'#B3B3B3'}>
                  23:00 hours
                </Text>
              </VStack>
              <VStack space={{md: '12px'}}>
                <VStack alignItems={'flex-end'}>
                  <Text fontFamily={'Poppins-SemiBold'} fontSize={{md: '20px'}}>
                    LOS
                  </Text>
                  <Text fontSize={{md: '10px'}} fontFamily={'Poppins-Regular'}>
                    Lagos
                  </Text>
                </VStack>
                <VStack alignItems={'flex-end'}>
                  <Text fontFamily={'Poppins-Medium'} fontSize={'14px'}>
                    10:00 AM
                  </Text>
                  <Text fontFamily={'Poppins-Regular'} fontSize={'10px'}>
                    May 22, 2024
                  </Text>
                </VStack>
              </VStack>
            </HStack>
          </Box>

          <Box
            mt={{md: '24px'}}
            pt={{md: '25px'}}
            pb={{md: '35px'}}
            px={{md: '25px'}}
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
              Passenger Information
            </Text>

            <HStack w="full" space={'50'}>
              <ContactDetail title="Full Name" value="Samuel Anthony" />
              <ContactDetail title="Email Address" value="sam@thelle.io" />
              <ContactDetail title="Phone Number" value="+90 1122232123412" />
              <ContactDetail title="Date of Birth" value="30-05-2000" />
            </HStack>
          </Box>

          <Box
            mt={{md: '20px'}}
            pt={{md: '25px'}}
            pb={{md: '35px'}}
            px={{md: '25px'}}
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

            <HStack w="full" space={'50'}>
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
            justifyContent={'space-between'}>
            <VStack flex={'1'} justifyContent={'center'}>
              <Text color={'primary.1'} mb={'16px'}>
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
            <VStack width={WINDOW_WIDTH * 0.4} space={'17px'}>
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
                {/* <Text color={'primary.1'} fontSize={'20px'}>
                  KC 6,000
                </Text> */}
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
                {/* <Text color={'primary.1'} fontSize={'20px'}>
                  KC 6,000
                </Text> */}
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
                {/* <Text color={'primary.1'} fontSize={'20px'}>
                  KC 6,000
                </Text> */}
              </HStack>
            </VStack>
          </HStack>
        </Box>
        <Box mt={{md: '36px'}}>
          <GradientButton
            title="Search Flights"
            colors={['#03045E', '#0608C4']}
            onPress={function () {}}
          />
        </Box>
      </ScrollView>
      <TabBar />
    </Flex>
  );
}

export default BookingDetailsScreen;
