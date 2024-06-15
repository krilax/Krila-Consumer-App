import {useHp} from '@constants/reusable';
import {Box, Flex} from 'native-base';
import React from 'react';
import FeatureDetail1 from './FeatureDetail1';
import FeatureDetail2 from './FeatureDetail2';
import FeatureDetail3 from './FeatureDetail3';

interface FeaturesContentProps {
  metadata: any;
}

function FeatureContent({metadata}: FeaturesContentProps) {
  return (
    <Box w="full" height={`${useHp(64)}px`} overflow="hidden">
      <Flex
        flex={1}
        direction="column"
        justifyContent={{base: 'space-between'}}>
        <FeatureDetail1 />
        <FeatureDetail2 />
        <FeatureDetail3 />
      </Flex>
    </Box>
  );
}

export default FeatureContent;
