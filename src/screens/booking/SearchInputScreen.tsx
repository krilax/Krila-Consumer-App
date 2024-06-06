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

function SearchInputScreen() {
  const tabs = [
    {label: 'Round Trip', content: 'round-trip'},
    {label: 'One-way', content: 'one-way'},
    {label: 'Mutil-city', content: 'multi'},
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Flex flex={'1'}>
      <Box flex={1}>
        <SearchAdSpot />
        <Flex
          flex={1}
          justifyContent={'flex-start'}
          backgroundColor={'#FBFBFB'}>
          <VStack mt={{md: '49px'}} px={{md: '39px'}} pb={{md: '33px'}}>
            <HStack
              space={{md: '69px'}}
              justifyContent="center"
              width={WINDOW_WIDTH * 0.5}>
              {tabs.map((tab, index) => (
                <Pressable
                  key={index}
                  flex={1}
                  onPress={() => setSelectedTab(index)}
                  alignItems="center"
                  justifyContent="center"
                  borderBottomWidth={selectedTab === index ? 2 : 1}
                  borderBottomColor={
                    selectedTab === index ? 'primary.1' : 'gray.300'
                  }
                  bg={selectedTab === index ? 'primary.100' : 'white'}
                  backgroundColor={'white'}>
                  <Text
                    fontFamily={
                      selectedTab === index ? 'Poppins-Bold' : 'Poppins-Regular'
                    }
                    color={'primary.1'}
                    fontSize={{md: '14px'}}>
                    {tab.label}
                  </Text>
                </Pressable>
              ))}
            </HStack>
            {tabs[selectedTab].content === 'round-trip' ? (
              <>
                <Box
                  p={4}
                  mt={{md: '42px'}}
                  bg="white"
                  py={{md: '19px'}}
                  px={{md: '30px'}}
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
                      fontSize={{md: '14px'}}
                      fontFamily={'Poppins-Regular'}
                      color={'#7D8093'}>
                      From
                    </Text>
                    <Text
                      color={'primary.1'}
                      fontFamily={'Spartan-Regular'}
                      fontSize={{md: '24px'}}>
                      Doha Doh
                    </Text>
                    <Text
                      color="#7D8093"
                      fontFamily={'Poppins-Regular'}
                      fontSize={{md: '12px'}}>
                      Hamad International Airport
                    </Text>
                    <Divider
                      my={{md: '13px'}}
                      backgroundColor={'rgba(217, 217, 217, 0.75);'}
                    />
                    <Text
                      fontSize={{md: '14px'}}
                      fontFamily={'Poppins-Regular'}
                      color={'#7D8093'}>
                      To
                    </Text>
                    <Text
                      color={'primary.1'}
                      fontSize={{md: '24px'}}
                      fontFamily={'Spartan-Regular'}>
                      Lagos LOS
                    </Text>
                    <Text
                      color="#7D8093"
                      fontFamily={'Poppins-Regular'}
                      fontSize={{md: '12px'}}>
                      Hamad International Airport
                    </Text>
                  </Box>
                </Box>
                <Box
                  p={4}
                  mt={{md: '36px'}}
                  bg="white"
                  py={{md: '19px'}}
                  px={{md: '30px'}}
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
                      fontSize={{md: '14px'}}
                      fontFamily={'Poppins-Regular'}
                      color={'#7D8093'}>
                      From
                    </Text>
                    <Text
                      color={'primary.1'}
                      fontFamily={'Spartan-Regular'}
                      fontSize={{md: '24px'}}>
                      Doha Doh
                    </Text>
                    <Text
                      color="#7D8093"
                      fontFamily={'Poppins-Regular'}
                      fontSize={{md: '12px'}}>
                      Hamad International Airport
                    </Text>
                    <Divider
                      my={{md: '13px'}}
                      backgroundColor={'rgba(217, 217, 217, 0.75);'}
                    />
                    <Text
                      fontSize={{md: '14px'}}
                      fontFamily={'Poppins-Regular'}
                      color={'#7D8093'}>
                      To
                    </Text>
                    <Text color={'primary.1'} fontSize={{md: '24px'}}>
                      Lagos LOS
                    </Text>
                    <Text
                      color="#7D8093"
                      fontFamily={'Poppins-Regular'}
                      fontSize={{md: '12px'}}>
                      Hamad International Airport
                    </Text>
                  </Box>
                </Box>
              </>
            ) : (
              <Box
                p={4}
                mt={{md: '42px'}}
                bg="white"
                py={{md: '19px'}}
                px={{md: '30px'}}
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
                {/* <Text color={'black'}>{tabs[selectedTab].content}</Text> */}
                <Box w="100%">
                  <Text
                    fontSize={{md: '14px'}}
                    fontFamily={'Poppins-Regular'}
                    color={'#7D8093'}>
                    From
                  </Text>
                  <Text
                    color={'primary.1'}
                    fontFamily={'Spartan-Regular'}
                    fontSize={{md: '24px'}}>
                    Doha Doh
                  </Text>
                  <Text
                    color="#7D8093"
                    fontFamily={'Poppins-Regular'}
                    fontSize={{md: '12px'}}>
                    Hamad International Airport
                  </Text>
                  <Divider
                    my={{md: '13px'}}
                    backgroundColor={'rgba(217, 217, 217, 0.75);'}
                  />
                  <Text
                    fontSize={{md: '14px'}}
                    fontFamily={'Poppins-Regular'}
                    color={'#7D8093'}>
                    To
                  </Text>
                  <Text
                    color={'primary.1'}
                    fontSize={{md: '24px'}}
                    fontFamily={'Spartan-Regular'}>
                    Lagos LOS
                  </Text>
                  <Text
                    color="#7D8093"
                    fontFamily={'Poppins-Regular'}
                    fontSize={{md: '12px'}}>
                    Hamad International Airport
                  </Text>
                </Box>
              </Box>
            )}

            <Box mt={{md: '36px'}}>
              <GradientButton
                title="Search Flights"
                colors={['#03045E', '#0608C4']}
                onPress={function () {}}
              />
            </Box>
          </VStack>
          <Box py={{md: '36px'}} backgroundColor={'#F3F3F3'}>
            <HStack justifyContent={'space-between'} px={{md: '91px'}}>
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
                    fontSize={{md: '14px'}}
                    fontFamily={'Spartan-Regular'}>
                    {_}
                  </Text>
                </VStack>
              ))}
            </HStack>
          </Box>
        </Flex>
      </Box>
      <TabBar />
    </Flex>
  );
}

export default SearchInputScreen;
