import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import images from '../assets/images';
import {scale} from '../utils/scalingFunctions';
import LinearGradient from 'react-native-linear-gradient';

const HomeHader = ({
  currentData,
  children,
}: {
  currentData: any;
  children?: any;
}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Image
              source={images.image}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </View>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText}>Welcome aboard!</Text>
            <Text style={styles.userName}>{currentData.name}</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            {
              <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <Circle cx={12} cy={12} r={10} stroke="white" strokeWidth={2} />
                <Path
                  d="M15 9L9 15M9 9L15 15"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </Svg>
            }
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <Path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    // backgroundColor: '#E8853A',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    marginRight: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTextContainer: {
    flexDirection: 'column',
  },
  welcomeText: {
    color: 'white',
    fontSize: scale(16),
    opacity: 0.8,
  },
  userName: {
    color: 'white',
    fontSize: scale(24),
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: scale(15),
  },
  imageStyle: {
    width: scale(50),
    height: scale(50),
    marginRight: scale(10),
  },
});

export default HomeHader;
