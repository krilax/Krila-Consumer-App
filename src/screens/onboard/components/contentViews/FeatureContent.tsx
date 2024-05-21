import {MobileOSType, isMobile, isTablet, useHp} from '@constants/reusable';
import {Box, Flex, Text} from 'native-base';
import React from 'react';

interface FeaturesContentProps {
  metadata: any;
}

function FeatureContent({metadata}: FeaturesContentProps) {
  return (
    <Box w="full" height={`${useHp(64)}px`}>
      <Flex
        flex={1}
        direction="column"
        mt={MobileOSType === 'android' && isTablet ? 50 : 45}>
        {metadata.list.map((data: React.FC, index: number) => (
          <>{data}</>
        ))}
      </Flex>
    </Box>
  );
}

export default FeatureContent;
