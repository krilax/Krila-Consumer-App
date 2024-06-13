import {Colors, IconProps} from '@src/helpers/constants';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useDeviceType} from '../hooks';
import {nativeBaseTheme} from '@constants/theme';

export default ({active}: IconProps) => {
  const deviceType = useDeviceType();

  return (
    <Svg
      viewBox="0 0 16 17"
      width={deviceType === 'mobile' ? 35 : 20}
      height={deviceType === 'mobile' ? 35 : 20}
      fill={active ? nativeBaseTheme.colors.primary[1] : '#81818A'}>
      <Path
        d="M5.958 10.036V9.11c0-.358-.266-.533-.591-.391l-4.175 1.8C.533 10.802 0 10.452 0 9.744v-1.1c0-.567.425-1.225.95-1.442L5.7 5.16a.487.487 0 00.25-.391v-2.55c0-.8.592-1.759 1.3-2.125a.9.9 0 01.8 0C8.767.46 9.358 1.41 9.358 2.21v2.55c0 .15.117.325.25.392l.867.367-4.517 4.517z"
        fill="#81818A"
      />
      <Path
        d="M15.316 8.644v1.1c0 .708-.534 1.058-1.192.775l-4.175-1.8c-.333-.134-.592.033-.592.391v2.425c0 .192.109.467.25.6l1.934 1.942c.2.2.291.6.2.875l-.375 1.133a.852.852 0 01-1.184.492L8.2 14.91a.866.866 0 00-1.092 0l-1.983 1.667a.826.826 0 01-1.167-.492l-.375-1.133c-.092-.283 0-.675.2-.875l1.933-1.942a.986.986 0 00.242-.6v-1.5l4.517-4.516 3.892 1.675c.524.225.95.883.95 1.45z"
        fill="#81818A"
      />
    </Svg>
  );
};
