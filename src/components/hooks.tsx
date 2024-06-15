import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

type DeviceType = 'mobile' | 'tablet';

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>('mobile');

  useEffect(() => {
    const updateDeviceType = () => {
      const {width} = Dimensions.get('window');
      if (width >= 768) {
        setDeviceType('tablet');
      } else {
        setDeviceType('mobile');
      }
    };

    const subscription = Dimensions.addEventListener(
      'change',
      updateDeviceType,
    );
    updateDeviceType();

    return () => {
      subscription.remove();
    };
  }, []);

  return deviceType;
};
