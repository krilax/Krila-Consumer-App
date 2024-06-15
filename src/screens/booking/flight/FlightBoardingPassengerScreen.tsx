import {StackNavigationProp} from '@react-navigation/stack';
import {GradientButton, MiniHeader, TabBar} from '@src/components';
import {RootStackParamList} from '@src/routes';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  ScrollView,
  Stack,
  Text,
  VStack,
} from 'native-base';
import {lazy} from 'react';
const TripIcon = lazy(() => import('@assets/images/app/trip_icon.svg'));

interface BoardingPassengerScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

function BoardingPassengerScreen({navigation}: BoardingPassengerScreenProps) {
  return (
    <Flex flex={'1'} background={'#EFEFEF'}>
      <ScrollView
        px={{md: '57px', base: '27px'}}
        mb={'1px'}
        borderWidth={'1px'}>
        <MiniHeader
          title={'Boarding Pass'}
          description={'Let’s start your trip'}
        />

        <Box>
          <Stack
            pt={{base: '68px'}}
            alignItems="center"
            px={{base: '25px', md: '50px'}}
            borderRadius={'24px'}
            width={{md: '542px'}}
            mx={{md: 'auto'}}
            bg={'white'}>
            <Text
              color={'primary.1'}
              fontSize={{base: '12ppx', md: '20px'}}
              fontFamily={'Spartan-Bold'}
              mb={'26px'}>
              Boarding Pass
            </Text>

            <VStack alignItems={'center'}>
              <Avatar size={'lg'} mb={{base: '15px'}} />
              <Text
                color={'primary.1'}
                fontSize={{base: '16px', md: '30px'}}
                fontFamily={'Poppins-Medium'}>
                Qatar Airways
              </Text>
            </VStack>

            <Box
              py={{base: '21px'}}
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
                      color={'primary.1'}
                      fontFamily={'Poppins-SemiBold'}
                      fontSize={{md: '20px', base: '14px'}}>
                      DOH
                    </Text>
                    <Text
                      color={'primary.1'}
                      fontSize={{md: '10px', base: '8px'}}
                      fontFamily={'Poppins-Regular'}>
                      Doha
                    </Text>
                  </VStack>
                  <VStack>
                    <Text
                      color={'primary.1'}
                      fontFamily={'Poppins-Medium'}
                      fontSize={{base: '10px', md: '14px'}}>
                      8:00 AM
                    </Text>
                    <Text
                      color={'primary.1'}
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
                      color={'primary.1'}
                      fontFamily={'Poppins-SemiBold'}
                      fontSize={{md: '20px', base: '14px'}}>
                      DOH
                    </Text>
                    <Text
                      color={'primary.1'}
                      fontSize={{md: '10px', base: '8px'}}
                      fontFamily={'Poppins-Regular'}>
                      Doha
                    </Text>
                  </VStack>
                  <VStack alignItems={'flex-end'}>
                    <Text
                      color={'primary.1'}
                      fontFamily={'Poppins-Medium'}
                      fontSize={{base: '10px', md: '14px'}}>
                      8:00 AM
                    </Text>
                    <Text
                      color={'primary.1'}
                      fontSize={{base: '8px', md: '10px'}}
                      fontFamily={'Poppins-Regular'}>
                      May 21, 2024
                    </Text>
                  </VStack>
                </VStack>
              </HStack>
            </Box>

            <Box
              py={{base: '21px'}}
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
                      color={'primary.1'}
                      fontFamily={'Poppins-Light'}
                      fontSize={{md: '20px', base: '10px'}}>
                      Full Name
                    </Text>
                    <Text
                      color={'primary.1'}
                      fontSize={{md: '10px', base: '10px'}}
                      fontFamily={'Spartan-SemiBold'}>
                      Samuel Anthony
                    </Text>
                  </VStack>
                </VStack>

                <VStack space={{md: '12px', base: '16px'}}>
                  <VStack alignItems={'flex-end'}>
                    <Text
                      color={'primary.1'}
                      fontFamily={'Poppins-Light'}
                      fontSize={{md: '20px', base: '10px'}}>
                      Class
                    </Text>
                    <Text
                      color={'primary.1'}
                      fontSize={{md: '10px', base: '10px'}}
                      fontFamily={'Spartan-SemiBold'}>
                      Doha
                    </Text>
                  </VStack>
                </VStack>
              </HStack>
            </Box>

            <Box
              py={{base: '21px'}}
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
                      color={'primary.1'}
                      fontFamily={'Poppins-Light'}
                      fontSize={{md: '20px', base: '10px'}}>
                      Flight Number
                    </Text>
                    <Text
                      color={'primary.1'}
                      fontSize={{md: '10px', base: '12px'}}
                      fontFamily={'Spartan-SemiBold'}>
                      Doha
                    </Text>
                  </VStack>
                </VStack>
                <VStack
                  h={'full'}
                  width={{md: '156px'}}
                  alignItems={'center'}
                  justifyContent={'flex-start'}>
                  <Text
                    fontFamily={'Poppins-Light'}
                    fontSize={{md: '12px', base: '10px'}}
                    mt={'6px'}
                    color={'primary.1'}>
                    Seat
                  </Text>
                  <Text
                    fontFamily={'Spartan-SemiBold'}
                    fontSize={{md: '12px', base: '12px'}}
                    mt={'6px'}
                    color={'primary.1'}>
                    J7
                  </Text>
                </VStack>
                <VStack space={{md: '12px', base: '16px'}}>
                  <VStack alignItems={'flex-end'}>
                    <Text
                      color={'primary.1'}
                      fontFamily={'Poppins-Light'}
                      fontSize={{md: '20px', base: '10px'}}>
                      Baggage
                    </Text>
                    <Text
                      color={'primary.1'}
                      fontSize={{md: '10px', base: '12px'}}
                      fontFamily={'Spartan-SemiBold'}>
                      Doha
                    </Text>
                  </VStack>
                </VStack>
              </HStack>
            </Box>
          </Stack>
          <Box mt={{md: '36px', base: '28px'}} mb={{base: '51px'}} w={'full'}>
            <GradientButton
              title="Download"
              colors={['#03045E', '#0608C4']}
              onPress={function () {}}
            />
          </Box>
        </Box>
      </ScrollView>
      <TabBar />
    </Flex>
  );
}

export default BoardingPassengerScreen;
