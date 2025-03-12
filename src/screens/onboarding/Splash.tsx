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
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({ navigation }) => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setDimensions(window);
    });
    
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
      subscription.remove();
    };
  }, []);
  
  const {width, height} = dimensions;
  const scale = Math.min(width / 375, height / 812); 
  
  const normalize = (size: any) => {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };
  
  const logoBottomPosition = normalize(80);
  const warriorTextBottomPosition = normalize(120);
  const fitnessTextBottomPosition = normalize(82);
  const asterisksBottomPosition = normalize(10);
  
  return (
    <LinearGradient
      colors={['#F97316', '#0B0B0B']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        source={require('../../../assets/images/splashScreenPng.png')}
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
            left: width * 0.15,
            right: width * 0.15,
            height: normalize(200),
          },
        ]}
      >
        <Image
          source={require('../../../assets/icons/splashScreenLogo.png')}
          style={[
            styles.logoIcon,
            {
              height: normalize(86),
              width: normalize(86),
            },
          ]}
          resizeMode="contain"
        />
        <View
          style={[
            styles.warriorTextContainer,
            {
              height: normalize(46),
              width: normalize(205),
              bottom: warriorTextBottomPosition,
            },
          ]}>
          <Text style={[styles.logoText, {fontSize: normalize(46), lineHeight: normalize(44)}]}>
            WARRIOR
          </Text>
        </View>
        <View
          style={[
            styles.fitnessTextContainer,
            {
              height: normalize(46),
              width: normalize(189),
              bottom: fitnessTextBottomPosition,
            },
          ]}>
          <Text style={[styles.logoText, {fontSize: normalize(46), lineHeight: normalize(44)}]}>
            FITNESS
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: normalize(27),
          width: normalize(54),
          position: 'absolute',
          bottom: asterisksBottomPosition,
          alignItems: 'center',
          zIndex: 2,
        }}>
        <Text
          style={{
            color: '#FFF',
            fontSize: normalize(16),
          }}>
          **
        </Text>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warriorTextContainer: {
    position: 'absolute',
    zIndex: 2,
  },
  fitnessTextContainer: {
    position: 'absolute',
    zIndex: 2,
  },
  logoIcon: {
    position: 'absolute',
    zIndex: 2,
  },
  logoText: {
    color: '#FFF',
    fontFamily: 'GYMER',
    fontWeight: '400',
  },
});

export default Splash;