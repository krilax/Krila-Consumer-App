import {nativeBaseTheme} from '@constants/theme';
import {
  FormTextInput,
  GradientButton,
  MiniHeader,
  TabBar,
} from '@src/components';
import {Box, Flex, HStack, ScrollView, Text} from 'native-base';
import React from 'react';

function FlightPassengerInfoScreen() {
  return (
    <Flex flex={'1'} px={{md: '57px'}} mb={'1px'}>
      <MiniHeader
        title={'Passenger Info'}
        description={'Let’s start your trip'}
      />

      <ScrollView
        flex={'1'}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Box w={'full'}>
          <Text
            mt={{md: '48px'}}
            fontFamily={'Spartan-Medium'}
            color={'primary.1'}
            fontSize={{md: '16px'}}>
            1 Adult Passenger
          </Text>

          <HStack mt={{md: '23px'}} space={{md: '37px'}}>
            <Box w={{md: '107px'}}>
              <FormTextInput width="100%" placeholder="" formTitle="Suffix" />
            </Box>
            <HStack flex={'1'} space={{md: '37px'}}>
              <Box flex={'1'}>
                <FormTextInput
                  width="100%"
                  placeholder=""
                  formTitle="First Name"
                />
              </Box>
              <Box flex={'1'}>
                <FormTextInput
                  width="100%"
                  placeholder=""
                  formTitle="Last Name"
                />
              </Box>
            </HStack>
          </HStack>

          <HStack mt={{md: '23px'}} space={{md: '37px'}}>
            <Box flex={'1'}>
              <FormTextInput
                width="100%"
                placeholder="Placeholder"
                formTitle="Date Of Birth"
              />
            </Box>
            <Box flex={'1'}>
              <FormTextInput
                width="100%"
                placeholder="Placeholder"
                formTitle="Email Address"
              />
            </Box>
          </HStack>

          <HStack mt={{md: '23px'}} space={{md: '37px'}}>
            <Box flex={'1'}>
              <FormTextInput
                width="100%"
                placeholder="Placeholder"
                formTitle="Phone Number"
              />
            </Box>
            <Box flex={'1'}>
              <FormTextInput
                width="100%"
                placeholder="Placeholder"
                formTitle="Resident Address"
              />
            </Box>
          </HStack>
        </Box>

        <Box>
          <Text
            mt={{md: '48px'}}
            fontFamily={'Spartan-Medium'}
            color={'primary.1'}
            fontSize={{md: '16px'}}>
            Emergency Contact Information
          </Text>

          <HStack mt={{md: '23px'}} space={{md: '37px'}}>
            <Box flex={'1'}>
              <FormTextInput
                width="100%"
                placeholder="Placeholder"
                formTitle="First Name"
              />
            </Box>
            <Box flex={'1'}>
              <FormTextInput
                width="100%"
                placeholder="Placeholder"
                formTitle="Last Name"
              />
            </Box>
          </HStack>

          <HStack mt={{md: '23px'}} space={{md: '37px'}}>
            <Box flex={'1'}>
              <FormTextInput
                width="100%"
                placeholder="Placeholder"
                formTitle="Phone Number"
              />
            </Box>
            <Box flex={'1'}>
              <FormTextInput
                width="100%"
                placeholder="Placeholder"
                formTitle="Email Address"
              />
            </Box>
          </HStack>
        </Box>

        <HStack w={'full'} space={{md: '23px'}} mt={{md: '40px'}}>
          <Box mt={{md: '36px'}} flex={'1'}>
            <GradientButton
              title="Save & Close"
              textColor={nativeBaseTheme.colors.primary[1]}
              colors={['#FFE53C', '#FFE53C']}
              onPress={function () {}}
            />
          </Box>
          <Box mt={{md: '36px'}} flex={'1'}>
            <GradientButton
              title="Select Seats"
              colors={['#03045E', '#0608C4']}
              onPress={function () {}}
            />
          </Box>
        </HStack>
      </ScrollView>
      <TabBar />
    </Flex>
  );
}

export default FlightPassengerInfoScreen;
