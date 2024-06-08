import {MiniHeader} from '@src/components';
import {Box, Flex, ScrollView} from 'native-base';
import React from 'react';

function SearchResultScreen() {
  return (
    <Flex flex={'1'}>
      <ScrollView
        // background={'red.100'}
        px={{md: '57px'}}
        mb={'1px'}
        borderWidth={'1px'}>
        <MiniHeader
          title={'Search Flights'}
          description={'Let’s start your trip'}
        />
      </ScrollView>
    </Flex>
  );
}

export default SearchResultScreen;
