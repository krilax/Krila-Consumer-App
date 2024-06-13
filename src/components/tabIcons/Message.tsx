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
      viewBox="0 0 20 15"
      fill="none">
      <Path
        d="M19.621 4.953a.235.235 0 01.379.184v7.988C20 14.16 19.16 15 18.125 15H1.875A1.875 1.875 0 010 13.125V5.141c0-.196.223-.305.379-.184.875.68 2.035 1.543 6.02 4.438.824.601 2.214 1.867 3.601 1.859 1.395.012 2.813-1.281 3.605-1.86 3.985-2.894 5.141-3.761 6.016-4.44zM10 10c.906.016 2.21-1.14 2.867-1.617 5.184-3.762 5.578-4.09 6.774-5.028A.935.935 0 0020 2.617v-.742C20 .84 19.16 0 18.125 0H1.875C.84 0 0 .84 0 1.875v.742c0 .29.133.559.36.738 1.195.934 1.59 1.266 6.773 5.028.656.476 1.96 1.633 2.867 1.617z"
        fill={active ? nativeBaseTheme.colors.primary[1] : '#81818A'}
      />
    </Svg>
  );
};
