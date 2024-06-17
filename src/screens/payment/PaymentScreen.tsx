import {nativeBaseTheme} from '@constants/theme';
import {
  Box,
  Checkbox,
  Flex,
  HStack,
  ScrollView,
  Text,
  VStack,
  Button,
  Select,
  CheckIcon,
  Image,
  Pressable,
} from 'native-base';
import React, {Suspense, lazy, useState} from 'react';
import WalletIcon from '@assets/images/app/wallet.svg';
import RewardPoint from '@assets/images/app/reward.svg';
import {Spinner} from '@gluestack-ui/themed-native-base';

const FormTextInput = lazy(() => import('@src/components/FormTextInput'));
const GradientButton = lazy(() => import('@src/components/GradientButton'));
const MiniHeader = lazy(() => import('@src/components/MiniHeader'));

function PaymentScreen() {
  const tabs = [
    {label: 'Card', content: 'round-trip'},
    {label: 'Cryptocurrency', content: 'one-way'},
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Flex flex={'1'}>
      <ScrollView
        mb={'1px'}
        borderWidth={'1px'}
        px={{md: '57px', base: '27px'}}>
        <Suspense fallback={<Spinner />}>
          <MiniHeader title={'Payment'} description={'Let’s start your trip'} />
        </Suspense>

        <Box
          mt={{md: '45px'}}
          pb={{md: '56px', base: '25px'}}
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
          px={{md: '34px', base: '22px'}}
          pt={{md: '24px', base: '22px'}}>
          <Text
            color={'primary.1'}
            fontFamily={'Spartan-Medium'}
            fontSize={{base: '12px', md: '20px'}}>
            Payment Method
          </Text>
          <Text
            color={'#616161'}
            mt={'12px'}
            fontFamily={'Poppins-Regular'}
            fontSize={{base: '10px', md: '16px'}}>
            Select a payment method
          </Text>

          <HStack
            mt={'29px'}
            space={{md: '32px', base: '23px'}}
            justifyContent={{base: 'flex-start', md: 'center'}}
            width={{md: '180px', base: 'full'}}
            mb={{md: '32px', base: '15.77px'}}>
            {tabs.map((tab, index) => (
              <Pressable
                key={index}
                onPress={() => setSelectedTab(index)}
                alignItems="center"
                justifyContent="center"
                borderBottomWidth={selectedTab === index ? 2 : 0}
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
                  fontSize={{base: '14px'}}>
                  {tab.label}
                </Text>
              </Pressable>
            ))}
          </HStack>

          <Suspense fallback={<Spinner size={'sm'} />}>
            {!selectedTab ? (
              <VStack w={'full'} space={{md: '23px', base: '12px'}}>
                <FormTextInput
                  formTitle="Card Number"
                  placeholder={'xxxx xxxx xxxx xxxx'}
                  width={'100%'}
                />

                <FormTextInput
                  formTitle="Card Name"
                  placeholder={'Your fullname'}
                  width={'100%'}
                />

                <FormTextInput
                  formTitle="Expiration Date"
                  placeholder="Placeholder"
                  width="100%"
                />

                <HStack
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  space={{md: '41px', base: '21px'}}>
                  <Box flex={'1'}>
                    <HStack space={'27px'} alignItems={'center'}>
                      <Box flex={'1'}>
                        <FormTextInput
                          formTitle="CVV"
                          placeholder="123"
                          width="100%"
                        />
                      </Box>
                      <Box flex={'1'}>
                        <FormTextInput
                          formTitle="PIN"
                          placeholder="****"
                          width="100%"
                        />
                      </Box>
                    </HStack>
                  </Box>
                </HStack>

                <Checkbox
                  mt={'22px'}
                  value="test"
                  isChecked={false}
                  accessibilityLabel="Check this box">
                  <Text
                    fontSize={{base: '8px', md: '16px'}}
                    ml={2}
                    fontFamily={'Poppins-Regular'}
                    color={'primary.1'}>
                    Add card to account
                  </Text>
                </Checkbox>
              </VStack>
            ) : (
              <VStack w={'full'}>
                <Box>
                  <HStack space={4} mb={{base: '21px', md: '23px'}}>
                    <Button
                      bg="#F3C31B"
                      size={'xs'}
                      _pressed={{bg: '#f3c31b'}}
                      rounded="md"
                      shadow={3}
                      _text={{
                        color: 'black',
                      }}
                      leftIcon={
                        <Image
                          source={require('@assets/images/app/binance.png')}
                          alt="BP"
                          size={4}
                        />
                      }>
                      Binance Pay
                    </Button>

                    <Button
                      bg="#fff"
                      size="xs"
                      rounded="md"
                      shadow={4}
                      _pressed={{
                        bg: 'white',
                      }}
                      _text={{
                        color: 'black',
                      }}
                      leftIcon={
                        <Image
                          source={{
                            uri: 'https://play-lh.googleusercontent.com/8aXTeaP1Sm29QPQ1IWacpgBRMpyCQLlVtA5QQ0DhN30d-R0fCdrCHlbQUZvdg2bJGvQ=s96-rw',
                          }}
                          alt="BP"
                          size={3}
                        />
                      }>
                      Crypto.com
                    </Button>
                  </HStack>

                  <Checkbox
                    mt={{md: '27px', base: '22px'}}
                    size={'sm'}
                    value="test"
                    isChecked={false}
                    accessibilityLabel="Check this box">
                    <Text
                      fontSize={{md: '16px', base: '12px'}}
                      ml={2}
                      fontFamily={'Poppins-Regular'}
                      color={'primary.1'}>
                      External Wallet
                    </Text>
                  </Checkbox>

                  <Button
                    bg="white"
                    mt={{md: '28px', base: '8px'}}
                    py={{md: '23px', base: '15px'}}
                    px={{base: '16px'}}
                    style={{
                      borderRadius: 5,
                      backgroundColor: '#FFF',
                      shadowColor: '#000',
                      shadowOffset: {width: 2, height: 4},
                      shadowOpacity: 0.2,
                      shadowRadius: 46,
                      elevation: 10,
                      flexDirection: 'row',
                    }}
                    alignItems="center"
                    justifyContent="flex-start">
                    <HStack
                      alignItems={'center'}
                      space={{md: '29px', base: '10px'}}>
                      <Box style={{width: 24, height: 24}}>
                        <WalletIcon height={'100%'} width={'100%'} />
                      </Box>
                      <Text
                        color={'primary.1'}
                        fontFamily={'Poppins-Regular'}
                        fontSize={{base: '10px', md: '16px'}}>
                        Select a wallet
                      </Text>
                    </HStack>
                  </Button>

                  <Checkbox
                    mt={{md: '27px', base: '22px'}}
                    mb={{base: '7px'}}
                    value="test"
                    isChecked={false}
                    accessibilityLabel="Check this box">
                    <Text
                      fontSize={{md: '16px', base: '12px'}}
                      ml={2}
                      fontFamily={'Poppins-Regular'}
                      color={'primary.1'}>
                      Cryptocurrency
                    </Text>
                  </Checkbox>

                  <Button
                    bg="white"
                    py={{md: '23px', base: '15px'}}
                    px={{base: '16px'}}
                    style={{
                      borderRadius: 5,
                      backgroundColor: '#FFF',
                      shadowColor: '#000',
                      shadowOffset: {width: 2, height: 4},
                      shadowOpacity: 0.2,
                      shadowRadius: 46,
                      elevation: 10,
                      flexDirection: 'row',
                    }}
                    alignItems="center"
                    justifyContent="flex-start">
                    <HStack
                      alignItems={'center'}
                      space={{md: '29px', base: '10px'}}>
                      <Box style={{width: 24, height: 24}}>
                        <WalletIcon height={'100%'} width={'100%'} />
                      </Box>
                      <Text
                        color={'primary.1'}
                        fontFamily={'Poppins-Regular'}
                        fontSize={{base: '10px', md: '16px'}}>
                        Select Crypto
                      </Text>
                    </HStack>
                  </Button>

                  <Box mt={{md: '17px', base: '14px'}}>
                    <Select
                      accessibilityLabel="Select Network"
                      borderColor={'secondary.1'}
                      borderRadius={'10px'}
                      placeholder="Select Network"
                      px={{base: '16px'}}
                      py={{base: '12px'}}
                      _selectedItem={{
                        bg: 'teal.600',
                        endIcon: <CheckIcon size="3" />,
                      }}
                      mt={1}
                      // onValueChange={itemValue => setService(itemValue)}
                    >
                      <Select.Item label="UX Research" value="ux" />
                      <Select.Item label="Web Development" value="web" />
                      <Select.Item
                        label="Cross Platform Development"
                        value="cross"
                      />
                      <Select.Item label="UI Designing" value="ui" />
                      <Select.Item
                        label="Backend Development"
                        value="backend"
                      />
                    </Select>
                  </Box>

                  <Checkbox
                    mt={{md: '27px', base: '22px'}}
                    value="test"
                    isChecked={false}
                    accessibilityLabel="Check this box">
                    <Text
                      fontSize={{md: '16px', base: '10px'}}
                      ml={2}
                      fontFamily={'Poppins-Regular'}
                      color={'primary.1'}>
                      Reward Points
                    </Text>
                  </Checkbox>

                  <Button
                    bg="white"
                    mt={{md: '28px', base: '8px'}}
                    py={{md: '23px', base: '15px'}}
                    px={{md: '18px', base: '8px'}}
                    style={{
                      borderRadius: 5,
                      backgroundColor: '#FFF',
                      shadowColor: '#000',
                      shadowOffset: {width: 2, height: 4},
                      shadowOpacity: 0.2,
                      shadowRadius: 46,
                      elevation: 10,
                      flexDirection: 'row',
                    }}
                    alignItems="center"
                    justifyContent="flex-start">
                    <HStack
                      alignItems={'center'}
                      space={{md: '29px', base: '10px'}}>
                      <Box style={{width: 24, height: 24}}>
                        <RewardPoint height={'100%'} width={'100%'} />
                      </Box>
                      <Text
                        color={'primary.1'}
                        fontFamily={'Poppins-Regular'}
                        fontSize={{base: '10px', md: '16px'}}>
                        Select a wallet
                      </Text>
                    </HStack>
                  </Button>
                </Box>
              </VStack>
            )}
          </Suspense>

          <HStack
            w={'full'}
            justifyContent={'flex-end'}
            alignItems={'center'}
            mt={{md: '139px', base: '66px'}}
            space={{md: '26px', base: '20px'}}>
            <Text
              color={'primary.1'}
              fontFamily={'Poppins-Bold'}
              fontSize={{md: '18px', base: '10px'}}>
              TOTAL
            </Text>

            <HStack alignItems={'center'} space={'7px'}>
              <Text color={'primary.1'} fontSize={'12px'}>
                KC
              </Text>
              <Text
                color={'primary.1'}
                fontFamily={'Spartan-SemiBold'}
                fontSize={{md: '20px', base: '12px'}}>
                6,680
              </Text>
            </HStack>

            <Text
              color="primary.1"
              fontSize={{base: '16px', md: '20px'}}
              fontFamily={'Poppins-Bold'}>
              $ 1,045.84
            </Text>
          </HStack>
        </Box>

        <Suspense fallback={<Spinner size={'sm'} />}>
          <HStack
            mt={{md: '36px', base: '41px'}}
            mb={{md: '51px', base: '42px'}}
            space={{md: '22px', base: '26px'}}>
            <Flex flex={'1'}>
              <GradientButton
                title="Cancel"
                colors={['#fff', '#fff']}
                onPress={function () {}}
                textColor={nativeBaseTheme.colors.danger}
              />
            </Flex>
            <Flex flex={'1'}>
              <GradientButton
                title="Confirm and Pay"
                colors={['#03045E', '#0608C4']}
                onPress={function () {}}
              />
            </Flex>
          </HStack>
        </Suspense>
      </ScrollView>
    </Flex>
  );
}

export default PaymentScreen;
