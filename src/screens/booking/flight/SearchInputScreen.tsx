import {WINDOW_WIDTH} from '@constants/reusable';
import {Tabs, TabsTabList} from '@gluestack-ui/themed';
import {GradientButton, SearchAdSpot, TabBar} from '@src/components';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

function SearchInputScreen() {
  const tabs = [
    {label: 'Round Trip', content: 'round-trip'},
    {label: 'One-way', content: 'one-way'},
    {label: 'Mutil-city', content: 'multi'},
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <VStack w={'full'} flex={1}>
      <Flex flex={1}>
        <SearchAdSpot />
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Flex
            flex={1}
            justifyContent={'flex-start'}
            backgroundColor={'#FBFBFB'}>
            <VStack
              mt={{md: '49px', base: '22px'}}
              px={{md: '39px', base: '27px'}}
              pb={{md: '33px', base: '10px'}}>
              <HStack
                w={'full'}
                space={{md: '69px', base: '37px'}}
                justifyContent="center"
                width={{md: WINDOW_WIDTH * 0.57, base: WINDOW_WIDTH * 0.7}}>
                {tabs.map((tab, index) => (
                  <Pressable
                    key={index}
                    flex={1}
                    onPress={() => setSelectedTab(index)}
                    bgColor={'#FBFBFB'}
                    alignItems="center"
                    justifyContent="center"
                    borderBottomWidth={selectedTab === index ? 2 : 0}
                    borderBottomColor={
                      selectedTab === index ? 'primary.1' : 'gray.300'
                    }
                    bg={selectedTab === index ? 'primary.100' : 'white'}
                    backgroundColor={'white'}
                    py={'7px'}>
                    <Text
                      fontFamily={
                        selectedTab === index ? 'Poppins-Bold' : 'Poppins-Bold'
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
                    borderRadius={'17px'}
                    rounded="lg"
                    shadow="2"
                    style={{
                      shadowColor: '#000',
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
                  <Box
                    mt={{md: '42px', base: '27px'}}
                    bg="white"
                    py={{md: '19px', base: '20px'}}
                    px={{md: '30px', base: '23px'}}
                    borderRadius={'17px'}
                    rounded="lg"
                    shadow="2"
                    style={{
                      shadowColor: '#000',
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
                </>
              ) : (
                <Box
                  mt={{md: '42px', base: '27px'}}
                  bg="white"
                  py={{md: '19px', base: '20px'}}
                  px={{md: '30px', base: '23px'}}
                  borderRadius={'17px'}
                  rounded="lg"
                  shadow="2"
                  style={{
                    shadowColor: '#000',
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
              )}

              <Box mt={{md: '36px', base: '22px'}}>
                <GradientButton
                  title="Search Flights"
                  colors={['#03045E', '#0608C4']}
                  onPress={function () {}}
                />
              </Box>
            </VStack>
            {/* <Box py={{md: '36px', base: '27px'}} backgroundColor={'#F3F3F3'}>
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
            </Box> */}
          </Flex>
        </ScrollView>
      </Flex>
      <TabBar />
    </VStack>
  );
}

export default SearchInputScreen;
