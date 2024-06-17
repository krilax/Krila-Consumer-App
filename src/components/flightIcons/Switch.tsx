import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Switch(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5 10l3.75-3.75L12.5 10M8.75 25V7.5M25 21.25L21.25 25l-3.75-3.75M21 8v17.5"
        stroke="#7D8093"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
    </Svg>
  );
}

export default Switch;
