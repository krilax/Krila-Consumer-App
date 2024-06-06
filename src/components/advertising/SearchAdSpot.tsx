import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@constants/reusable';
import {Box, Button, Flex, HStack, Image, Text} from 'native-base';
import React, {useState} from 'react';

function SearchAdSpot() {
  const adHeight = WINDOW_HEIGHT * 0.18;
  const [activeButton, setActiveButton] = useState(0);

  const getButtonStyle = (index: number) => {
    if (index === activeButton) {
      return {
        height: '45px',
      };
    }
    return {
      height: '40px',
    };
  };

  return (
    <Flex w="full" height={adHeight} justifyContent={'flex-start'}>
      <Box w={'full'} h={'full'} bg={'black'} height={adHeight}>
        <Image
          alt="Advertise here"
          source={require('@assets/images/app/SearchAdSpotCover.png')}
          width={'100%'}
          height={'100%'}
        />
      </Box>
      <Flex
        position={'absolute'}
        top={'0'}
        w={'full'}
        h={'full'}
        flexDirection={'row'}
        px={{md: '39px'}}
        paddingTop={'25px'}>
        <Flex
          w={WINDOW_WIDTH * 0.4}
          justifyContent={'flex-end'}
          alignItems={'flex-start'}>
          <HStack w="full" justifyContent={'flex-end'} alignItems={'flex-end'}>
            {['Flights', 'Smart Search'].map((buttonLabel, index) => (
              <Button
                key={index}
                flex={1}
                mx={0}
                h={getButtonStyle(index).height}
                borderRadius={'0px'}
                bg={activeButton === index ? 'white' : 'primary.1'}>
                <Text
                  color={activeButton === index ? 'primary.1' : 'white'}
                  fontFamily={{md: 'Spartan-SemiBold'}}
                  fontSize={{md: '15px'}}>
                  {buttonLabel}
                </Text>
              </Button>
            ))}
          </HStack>
        </Flex>
        <Flex flex={1} justifyContent={'flex-start'} alignItems={'flex-end'}>
          <Text>Notificaiton Icon</Text>
          <Text
            textAlign={'right'}
            color={'#03045E'}
            fontFamily={'Spartan-Bold'}
            marginTop={{md: '23px'}}
            fontSize={{md: '28px'}}>
            Reach Targeted Travelers. Advertise Here
          </Text>
          <Text
            marginTop={'11px'}
            fontFamily={'Poppins-Regular'}
            fontSize={{md: '10px'}}
            color={'#616161'}>
            Contact us to place an AD here
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SearchAdSpot;
