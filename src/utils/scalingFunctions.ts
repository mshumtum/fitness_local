import {Dimensions, Platform} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';
export const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 375;

// Calculate the scale ratios
const widthScaleRatio = width / guidelineBaseWidth;

// Calculate platform-specific scaling factors
const getPlatformFactor = () => {
  if (Platform.OS === 'web') {
    return 0.12;
  } else if (Platform.OS === 'android') {
    return 1;
  } else if (Platform.OS === 'ios') {
    // You can set a different factor for iOS if needed
    return 0.5;
  } else {
    // Default factor for unknown platforms (e.g., tablets)
    return 0.8;
  }
};

// Scale the provided size based on the width scale ratio and platform factor
const scale = (size: number) => {
  return size + (widthScaleRatio * size - size) * getPlatformFactor();
};

// Hit slope padding //increasing button click spacing
const hitSlope = (size: number) => {
  return {left: size, right: size, top: size, bottom: size};
};

const topInset = initialWindowMetrics?.insets.top || 0;
const bottomInset = initialWindowMetrics?.insets.bottom || 0;

export {scale, hitSlope, bottomInset, topInset};
