import {nativeBaseTheme} from '@constants/theme';
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonText,
  Image,
} from '@gluestack-ui/themed';
import {FormTextInput, GradientButton, TabBar} from '@src/components';
import {
  Box,
  Checkbox,
  Flex,
  HStack,
  ScrollView,
  Text,
  VStack,
  Button as NativeBaseButton,
  Select,
  CheckIcon,
} from 'native-base';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import WalletIcon from '@assets/images/app/wallet.svg';
import RewardPoint from '@assets/images/app/reward.svg';

function CardPaymentScreen() {
  const tabs = [
    {label: 'Card', content: 'round-trip'},
    {label: 'Cryptocurrency', content: 'one-way'},
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Flex flex={'1'}>
      <ScrollView px={{md: '57px'}} mb={'1px'} borderWidth={'1px'}>
        <Box
          h={{md: '166px'}}
          w={'full'}
          bg={'black'}
          borderRadius={'2xl'}
          mt={{md: '51px'}}
        />

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
          <Text color={'primary.1'}>Payment Method</Text>
          <Text color={'#616161'} mt={'12px'}>
            Select a payment method
          </Text>

          <HStack
            mt={'29px'}
            space={{md: '32px'}}
            justifyContent="center"
            width={{md: '180px'}}
            mb={{md: '32px'}}>
            {tabs.map((tab, index) => (
              <Pressable
                key={index}
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

          {!selectedTab ? (
            <VStack w={'full'} space={{md: '23px'}}>
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

              <HStack
                justifyContent={'space-between'}
                alignItems={'center'}
                space={'41px'}>
                <Box flex={'1'}>
                  <FormTextInput
                    formTitle="Expiration Date"
                    placeholder="Placeholder"
                    width="100%"
                  />
                </Box>

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
                value="test"
                isChecked={false}
                accessibilityLabel="Check this box">
                <Text
                  fontSize="lg"
                  ml={2}
                  fontFamily={'Poppins-Regular'}
                  fontStyle={'16px'}
                  color={'primary.1'}>
                  Add card to account
                </Text>
              </Checkbox>
            </VStack>
          ) : (
            <VStack w={'full'}>
              <Box>
                <ButtonGroup>
                  <Button
                    bg="#"
                    gap={'$4'}
                    style={{
                      borderRadius: 5,
                      backgroundColor: '#F3C31B',
                      shadowColor: '#000',
                      shadowOffset: {width: 2, height: 4},
                      shadowOpacity: 0.2,
                      shadowRadius: 46,
                      elevation: 10,
                    }}>
                    <ButtonIcon>
                      <ButtonIcon>
                        <Image
                          source={require('@assets/images/app/binance.png')}
                          style={{width: 24, height: 24}}
                          alt="BP"
                        />
                      </ButtonIcon>
                    </ButtonIcon>
                    <ButtonText>Binance Pay</ButtonText>
                  </Button>

                  <Button
                    bg="white"
                    gap={16}
                    style={{
                      borderRadius: 5,
                      backgroundColor: '#FFF',
                      shadowColor: '#000',
                      shadowOffset: {width: 2, height: 4},
                      shadowOpacity: 0.2,
                      shadowRadius: 46,
                      elevation: 10,
                    }}
                    alignItems="center">
                    <ButtonIcon>
                      <Image
                        source={{
                          uri: 'https://play-lh.googleusercontent.com/8aXTeaP1Sm29QPQ1IWacpgBRMpyCQLlVtA5QQ0DhN30d-R0fCdrCHlbQUZvdg2bJGvQ=s96-rw',
                        }}
                        style={{width: 24, height: 24}}
                        alt="C"
                      />
                    </ButtonIcon>
                    <ButtonText color={nativeBaseTheme.colors.primary[1]}>
                      Crypto.com
                    </ButtonText>
                  </Button>
                </ButtonGroup>

                <Checkbox
                  mt={{md: '27px'}}
                  value="test"
                  isChecked={false}
                  accessibilityLabel="Check this box">
                  <Text
                    fontSize="lg"
                    ml={2}
                    fontFamily={'Poppins-Regular'}
                    fontStyle={'16px'}
                    color={'primary.1'}>
                    External Wallet
                  </Text>
                </Checkbox>

                <NativeBaseButton
                  bg="white"
                  mt={{md: '28px'}}
                  py={{md: '23px'}}
                  px={{md: '18px'}}
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
                  <HStack alignItems={'center'} space={{md: '29px'}}>
                    <Box style={{width: 24, height: 24}}>
                      <WalletIcon height={'100%'} width={'100%'} />
                    </Box>
                    <Text color={'primary.1'} fontFamily={'Poppins-Regular'}>
                      Select a wallet
                    </Text>
                  </HStack>
                </NativeBaseButton>

                <Checkbox
                  my={{md: '28px'}}
                  value="test"
                  isChecked={false}
                  accessibilityLabel="Check this box">
                  <Text
                    fontSize="lg"
                    ml={2}
                    fontFamily={'Poppins-Regular'}
                    fontStyle={'16px'}
                    color={'primary.1'}>
                    Cryptocurrency
                  </Text>
                </Checkbox>

                <NativeBaseButton
                  bg="white"
                  py={{md: '23px'}}
                  px={{md: '18px'}}
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
                  <HStack alignItems={'center'} space={{md: '29px'}}>
                    <Box style={{width: 24, height: 24}}>
                      <WalletIcon height={'100%'} width={'100%'} />
                    </Box>
                    <Text color={'primary.1'} fontFamily={'Poppins-Regular'}>
                      Select a wallet
                    </Text>
                  </HStack>
                </NativeBaseButton>

                <Box mt={{md: '17px'}}>
                  <Select
                    minWidth="200"
                    accessibilityLabel="Select Network"
                    placeholder="Select Network"
                    px={{md: '16px'}}
                    py={{md: '12px'}}
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size="5" />,
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
                    <Select.Item label="Backend Development" value="backend" />
                  </Select>
                </Box>

                <Checkbox
                  my={{md: '28px'}}
                  value="test"
                  isChecked={false}
                  accessibilityLabel="Check this box">
                  <Text
                    fontSize="lg"
                    ml={2}
                    fontFamily={'Poppins-Regular'}
                    fontStyle={'16px'}
                    color={'primary.1'}>
                    Reward Points
                  </Text>
                </Checkbox>

                <NativeBaseButton
                  bg="white"
                  py={{md: '23px'}}
                  px={{md: '18px'}}
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
                  <HStack alignItems={'center'} space={{md: '29px'}}>
                    <Box style={{width: 24, height: 24}}>
                      <RewardPoint height={'100%'} width={'100%'} />
                    </Box>
                    <Text color={'primary.1'} fontFamily={'Poppins-Regular'}>
                      Select a reward points
                    </Text>
                  </HStack>
                </NativeBaseButton>
              </Box>
            </VStack>
          )}

          <HStack
            w={'full'}
            justifyContent={'flex-end'}
            alignItems={'center'}
            mt={{md: '139px'}}
            space={{md: '71px'}}>
            <Text
              color={'primary.1'}
              fontFamily={'Poppins-Medium'}
              fontSize={'18px'}>
              TOTAL
            </Text>
            <Text
              color="primary.1"
              fontSize={'16px'}
              fontFamily={'Poppins-Regular'}>
              $ 1,045.84
            </Text>
            <HStack alignItems={'center'} space={'7px'}>
              <Text color={'primary.1'} fontSize={'12px'}>
                KC
              </Text>
              <Text color={'primary.1'} fontSize={{md: '20px'}}>
                6,680
              </Text>
            </HStack>
          </HStack>
        </Box>

        <Box mt={{md: '36px'}} mb={{md: '51px'}}>
          <GradientButton
            title="Confirm and Pay"
            colors={['#03045E', '#0608C4']}
            onPress={function () {}}
          />
        </Box>
      </ScrollView>
      <TabBar />
    </Flex>
  );
}

export default CardPaymentScreen;
