import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  PixelRatio,
  Platform,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useEffect, useState, useCallback, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Svg, Path} from 'react-native-svg';
import LottieView from 'lottie-react-native';
import {NavigationProps} from '../../types/navigation';
import images from '../../assets/images';

const Splash = ({navigation}: NavigationProps) => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const {width, height} = dimensions;

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setDimensions(window);
    });

    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
      subscription.remove();
    };
  }, [navigation]);

  const normalize = useCallback(
    (size: any) => {
      const scale = Math.min(width / 375, height / 812);
      const newSize = size * scale;
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    },
    [width, height],
  );

  const logoBottomPosition = normalize(80);
  const asterisksBottomPosition = normalize(20);

  const logoFontSize = normalize(50);
  const logoLineHeight = normalize(50);

  return (
    <LinearGradient
      colors={['#F97316', '#0B0B0B']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        source={images.splashScreenPng}
        style={[
          styles.image,
          {
            width: width,
            height: height,
            top: normalize(80),
          },
        ]}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.00)', '#000']}
        style={[
          styles.bottomGradient,
          {
            height: height * 0.5,
            width: width,
          },
        ]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        locations={[0, 0.8366]}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={[
          styles.clickableArea,
          {
            bottom: logoBottomPosition,
            width: width * 0.8,
            height: normalize(170),
          },
        ]}>
        <View style={styles.logoContainer}>
          <Svg
            width={normalize(86)}
            height={normalize(86)}
            viewBox="0 0 86 86"
            fill="none">
            <Path
              d="M65.195 61.4043L82.2675 71.4509L85.5767 52.9784L66.9822 38.6139L42.7883 72.4582L18.5944 38.6139L-2.28882e-05 52.9784L3.30914 71.4509L20.3816 61.4043L16.6305 55.1169L8.7143 59.7755L8.04003 56.0109L17.0499 49.0508L42.7883 85.0549L68.5267 49.0508L77.5366 56.0109L76.8623 59.7755L68.9467 55.1169L65.195 61.4043Z"
              fill="white"
            />
            <Path
              d="M20.4483 0L13.567 18.3327L42.7883 59.4862L72.0096 18.3327L65.1283 0H57.2359L63.7191 17.2711L42.7883 46.7485L21.8575 17.2711L28.3408 0H20.4483Z"
              fill="white"
            />
          </Svg>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.warriorContainer}>
            <Text
              style={[
                styles.logoText,
                {
                  fontSize: logoFontSize,
                  lineHeight: logoLineHeight,
                },
              ]}>
              WARRIOR
            </Text>
          </View>
          <View style={styles.fitnessContainer}>
            <Text
              style={[
                styles.logoText,
                {
                  fontSize: logoFontSize,
                  lineHeight: logoLineHeight,
                  marginLeft: normalize(10),
                },
              ]}>
              FITNESS
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.lottieContainer,
          {
            bottom: asterisksBottomPosition,
          },
        ]}>
        <LottieView
          source={images.loadingLottie}
          autoPlay
          loop
          style={{
            width: normalize(54),
            height: normalize(27),
          }}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    opacity: 0.9,
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  clickableArea: {
    position: 'absolute',
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    marginLeft: 0,
  },
  warriorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  fitnessContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  logoText: {
    color: '#FFF',
    fontFamily: 'GYMER',
    fontWeight: '400',
  },
  lottieContainer: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 2,
  },
});

export default Splash;
