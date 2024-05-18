import {SvgProps} from '../../constants/types';

export function Email(props?: SvgProps) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M3 3h12c.825 0 1.5.675 1.5 1.5v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9C1.5 3.675 2.175 3 3 3z"
        stroke="#425166"
        strokeOpacity={0.72}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 4.5L9 9.75 1.5 4.5"
        stroke="#425166"
        strokeOpacity={0.72}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LockIcon(props?: SvgProps) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M14.25 8.25H3.75a1.5 1.5 0 00-1.5 1.5V15a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V9.75a1.5 1.5 0 00-1.5-1.5zM5.25 8.25v-3a3.75 3.75 0 017.5 0v3"
        stroke="#425166"
        strokeOpacity={0.72}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon(props?: SvgProps) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M3 19L19 3M19 19L3 3"
        stroke="#425166"
        strokeWidth={5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PhoneIcon(props?: SvgProps) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <mask
        id="a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={18}
        height={18}>
        <path
          d="M3.62 7.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.32.57 3.57.57a1 1 0 011 1V17a1 1 0 01-1 1A17 17 0 010 1a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
          fill="#000"
        />
      </mask>
      <g mask="url(#a)">
        <path fill="#828282" d="M0 0H18V18H0z" />
      </g>
    </svg>
  );
}

export function Apple(props?: SvgProps) {
  return (
    <svg
      width={30}
      height={36}
      viewBox="0 0 30 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_2864_8923)">
        <path
          d="M25.062 18.794c.05 5.317 4.726 7.086 4.778 7.108-.04.125-.747 2.522-2.464 4.997-1.484 2.14-3.024 4.273-5.45 4.317-2.384.044-3.15-1.395-5.875-1.395s-3.577 1.351-5.833 1.439c-2.342.087-4.125-2.315-5.621-4.447C1.539 26.45-.797 18.487 2.34 13.112c1.559-2.67 4.344-4.36 7.367-4.404 2.3-.043 4.47 1.527 5.875 1.527 1.405 0 4.043-1.888 6.816-1.61 1.16.047 4.419.462 6.511 3.484-.168.103-3.888 2.24-3.847 6.685zm-4.48-13.056c1.243-1.485 2.08-3.552 1.851-5.61-1.792.072-3.959 1.18-5.244 2.664-1.152 1.314-2.16 3.418-1.889 5.434 1.998.153 4.038-1.002 5.282-2.488"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="clip0_2864_8923">
          <path
            fill="#fff"
            transform="translate(.852 .129)"
            d="M0 0H28.9882V35.2H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Facebook(props?: SvgProps) {
  return (
    <svg
      width={18}
      height={36}
      viewBox="0 0 18 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M4.485 35.875h7.385V18h4.927l.652-6.16H11.87l.009-3.083c0-1.606.152-2.467 2.457-2.467h3.08V.129h-4.93c-5.92 0-8.001 2.99-8.001 8.014v3.698H.795v6.161h3.69v17.873z"
        fill="#1777F2"
      />
    </svg>
  );
}

export function Google(props?: SvgProps) {
  return (
    <svg
      width={33}
      height={33}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_2864_8930)">
        <path
          d="M7.602 20.165l-1.114 4.158-4.071.086A15.928 15.928 0 01.51 16.827c0-2.653.645-5.155 1.789-7.358l3.625.664 1.588 3.603a9.51 9.51 0 00-.514 3.091c0 1.174.213 2.3.604 3.338z"
          fill="#FBBB00"
        />
        <path
          d="M32.23 13.84c.184.968.28 1.967.28 2.989 0 1.145-.12 2.263-.35 3.34a15.997 15.997 0 01-5.634 9.137l-4.566-.234-.646-4.033a9.537 9.537 0 004.103-4.87h-8.556v-6.33H32.23z"
          fill="#518EF8"
        />
        <path
          d="M26.525 29.306v.001A15.933 15.933 0 0116.51 32.83c-6.093 0-11.39-3.406-14.093-8.418l5.185-4.244a9.514 9.514 0 0013.713 4.872l5.211 4.266z"
          fill="#28B446"
        />
        <path
          d="M26.723 4.512l-5.184 4.243a9.458 9.458 0 00-5.03-1.438c-4.17 0-7.713 2.685-8.997 6.42L2.3 9.47h-.001C4.962 4.336 10.326.828 16.509.828c3.883 0 7.443 1.383 10.214 3.684z"
          fill="#F14336"
        />
      </g>
      <defs>
        <clipPath id="clip0_2864_8930">
          <path fill="#fff" transform="translate(.51 .828)" d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
