import {Colors, IconProps} from '@src/helpers/constants';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useDeviceType} from '../hooks';
import {nativeBaseTheme} from '@constants/theme';

export default ({active}: IconProps) => {
  const deviceType = useDeviceType();

  return (
    <Svg
      viewBox="0 0 18 15"
      width={deviceType === 'mobile' ? 35 : 20}
      height={deviceType === 'mobile' ? 35 : 20}
      fill={active ? nativeBaseTheme.colors.primary[1] : '#81818A'}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.917 4.17a2.474 2.474 0 00-.152-.003H13.662c-1.723 0-3.198 1.356-3.198 3.125 0 1.768 1.475 3.125 3.198 3.125H15.765c.054 0 .105 0 .152-.003a1.462 1.462 0 001.371-1.357c.004-.05.004-.104.004-.154V5.68c0-.05 0-.104-.004-.154a1.462 1.462 0 00-1.37-1.357zm-2.44 3.955c.443 0 .803-.373.803-.833 0-.46-.36-.834-.804-.834-.443 0-.803.373-.803.834 0 .46.36.833.803.833z"
        fill="#81818A"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.765 11.667a.183.183 0 01.184.231c-.167.594-.432 1.1-.858 1.526-.624.624-1.415.9-2.392 1.032-.95.127-2.162.127-3.694.127h-1.76c-1.532 0-2.745 0-3.694-.127-.977-.132-1.768-.408-2.392-1.032-.623-.624-.9-1.415-1.031-2.391C0 10.083 0 8.87 0 7.339v-.094C0 5.713 0 4.5.128 3.55c.131-.977.408-1.768 1.031-2.392C1.783.536 2.574.26 3.551.128 4.5 0 5.713 0 7.245 0h1.76c1.532 0 2.745 0 3.694.128.977.131 1.768.408 2.392 1.031.426.426.691.932.859 1.526a.184.184 0 01-.185.232h-2.103c-2.364 0-4.448 1.867-4.448 4.375 0 2.507 2.084 4.375 4.448 4.375h2.103zM3.125 3.333a.625.625 0 000 1.25h3.333a.625.625 0 000-1.25H3.125z"
        fill="#81818A"
      />
    </Svg>
  );
};
