import {Colors, IconProps} from '@src/helpers/constants';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useDeviceType} from '../hooks';
import {nativeBaseTheme} from '@constants/theme';

export default ({active}: IconProps) => {
  const deviceType = useDeviceType();

  return (
    <Svg
      width={deviceType === 'mobile' ? 35 : 20}
      height={deviceType === 'mobile' ? 35 : 20}
      viewBox="0 0 17 17"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.28 4.896c-.45.94-.293 2.038.023 4.236l.233 1.614c.406 2.823.609 4.234 1.588 5.077.98.844 2.415.844 5.288.844h1.843c2.872 0 4.308 0 5.287-.844.98-.843 1.183-2.254 1.589-5.077l.232-1.614c.317-2.198.475-3.297.024-4.236-.45-.94-1.409-1.51-3.326-2.653l-1.154-.687C10.166.519 9.295 0 8.333 0 7.371 0 6.501.519 4.76 1.556l-1.154.687C1.688 3.385.73 3.956.279 4.896zm8.053 9.062a.625.625 0 01-.625-.625v-2.5a.625.625 0 011.25 0v2.5c0 .345-.28.625-.625.625z"
        fill={active ? nativeBaseTheme.colors.primary[1] : '#81818A'}
      />
    </Svg>
  );
};
