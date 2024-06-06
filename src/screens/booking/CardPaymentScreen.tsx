import {WINDOW_WIDTH} from '@constants/reusable';
import {FormTextInput, GradientButton} from '@src/components';
import {Avatar, Box, Flex, HStack, ScrollView, Text, VStack} from 'native-base';
import React, {useState} from 'react';
import {Pressable} from 'react-native';

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

          <VStack w={'full'}>
            <FormTextInput
              formTitle="Card Number"
              placeholder={'xxxx xxxx xxxx xxxx'}
              width={'100%'}
            />
          </VStack>
        </Box>

        <Box mt={{md: '36px'}} mb={{md: '51px'}}>
          <GradientButton
            title="Confirm and Pay"
            colors={['#03045E', '#0608C4']}
            onPress={function () {}}
          />
        </Box>
      </ScrollView>
    </Flex>
  );
}

export default CardPaymentScreen;
