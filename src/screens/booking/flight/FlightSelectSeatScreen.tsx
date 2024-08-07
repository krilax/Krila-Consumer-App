import {StackNavigationProp} from '@react-navigation/stack';
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
  Spinner,
} from 'native-base';
import {Suspense, lazy} from 'react';
import {MiniHeader} from '@src/components';

interface FlightSelectSeatScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

// const CuratingLoadingScreen = lazy(
//   () => import('@src/components/loadingScreens/CuratingLoadingScreen'),
// );
const GradientButton = lazy(() => import('@src/components/GradientButton'));

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
          <Flex mb={{base: '51px'}} flex={1}>
            <Suspense fallback={<Spinner />}>
              <GradientButton
                title="Continue"
                colors={['#03045E', '#0608C4']}
                onPress={function () {
                  onNavigate('BookingDetailsScreen');
                }}
              />
            </Suspense>
          </Flex>
        </HStack>
      </ScrollView>
    </Flex>
  );
}

export default FlightSelectSeatScreen;
