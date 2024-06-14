import {nativeBaseTheme} from '@constants/theme';
import {StackNavigationProp} from '@react-navigation/stack';
import {GradientButton, MiniHeader} from '@src/components';
import {useDeviceType} from '@src/components/hooks';
import {normalize} from '@src/helpers/utlils';
import {RootStackParamList} from '@src/routes';
import {
  Flex,
  HStack,
  ScrollView,
  Text,
  Checkbox,
  Stack,
  Center,
  VStack,
  Box,
} from 'native-base';

interface FlightSelectSeatScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

function FlightSelectSeatScreen({navigation}: FlightSelectSeatScreenProps) {
  const deviceType = useDeviceType();
  const onNavigate = (route: keyof RootStackParamList) => {
    navigation.navigate(route);
  };

  return (
    <Flex flex={'1'} background={'#EFEFEF'}>
      <ScrollView
        px={{md: '57px', base: `${normalize(27)}px`}}
        mb={'1px'}
        borderWidth={'1px'}>
        <MiniHeader
          title={'Select Seat'}
          description={'Let’s start your trip'}
        />
        <HStack space={'4'} alignItems={'center'}>
          <Checkbox
            isChecked
            value={''}
            size={deviceType === 'tablet' ? 'md' : 'xs'}>
            <Text
              color={'primary.1'}
              fontSize={{base: '12px', md: '16px'}}
              fontFamily={'Poppins-Regular'}>
              Vacant
            </Text>
          </Checkbox>

          <Checkbox isChecked value={''} defaultIsChecked={false}>
            <Text
              color={'primary.1'}
              fontFamily={'Poppins-Regular'}
              fontSize={{base: '12px', md: '16px'}}>
              Not Vacant
            </Text>
          </Checkbox>
        </HStack>

        <Stack mt={{base: '51px', md: '36px'}} mb={'11px'}>
          <Text
            color={'primary.1'}
            textAlign={'center'}
            fontFamily={'Spartan-Medium'}
            fontSize={{base: '12px', md: '16px'}}>
            Business Class
          </Text>
        </Stack>

        <HStack justifyContent={'space-between'}>
          <Stack>
            <VStack space={11}>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
            </VStack>
          </Stack>
          <Stack>
            <VStack space={11}>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
            </VStack>
          </Stack>
          <Stack>
            <VStack space={11}>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '30px' : '46px'}
                  width={deviceType === 'mobile' ? '30px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
            </VStack>
          </Stack>
        </HStack>

        <Stack mt={{base: '51px', md: '36px'}} mb={'11px'}>
          <Text
            color={'primary.1'}
            textAlign={'center'}
            fontFamily={'Spartan-Medium'}
            fontSize={{base: '12px', md: '16px'}}>
            Economy Class
          </Text>
        </Stack>

        <HStack justifyContent={'space-between'}>
          <Stack>
            <VStack space={11}>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
            </VStack>
          </Stack>
          <Stack>
            <VStack space={11}>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>

              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
            </VStack>
          </Stack>
          <Stack>
            <VStack space={11}>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
              <HStack space={3} justifyContent="center">
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="primary.1"
                  rounded="md"
                  shadow={3}
                />
                <Center
                  height={deviceType === 'mobile' ? '17px' : '46px'}
                  width={deviceType === 'mobile' ? '17px' : '46px'}
                  bg="secondary.1"
                  rounded="md"
                  shadow={3}
                />
              </HStack>
            </VStack>
          </Stack>
        </HStack>

        <HStack
          space={deviceType === 'mobile' ? '26px' : '23px'}
          mt={{md: '36px', base: '28px'}}>
          {/* <Flex mb={{base: '51px'}} flex={1}>
            <GradientButton
              title="Proceed To Payment"
              colors={['#FFE53C', '#FFE53C']}
              onPress={function () {}}
              textColor={nativeBaseTheme.colors.primary[1]}
            />
          </Flex> */}
          <Flex mb={{base: '51px'}} flex={1}>
            <GradientButton
              title="Proceed To Payment"
              colors={['#03045E', '#0608C4']}
              onPress={function () {
                onNavigate('CardPaymentScreen');
              }}
            />
          </Flex>
        </HStack>
      </ScrollView>
    </Flex>
  );
}

export default FlightSelectSeatScreen;
