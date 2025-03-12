import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Animated,
  Easing,
  Dimensions,
  TouchableOpacity,
  Text,
  PixelRatio,
  Platform,
} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const slideAnim1 = useRef(new Animated.Value(0)).current;
  const slideAnim2 = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const runAnimation = () => {
      Animated.parallel([
        Animated.timing(slideAnim1, {
          toValue: -Dimensions.get('window').width,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.ease,
        }),
        Animated.timing(slideAnim2, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.ease,
        }),
      ]).start();

      setTimeout(() => {
        Animated.parallel([
          Animated.timing(slideAnim1, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.ease,
          }),
          Animated.timing(slideAnim2, {
            toValue: Dimensions.get('window').width,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.ease,
          }),
        ]).start();
      }, 2000);
    };

    runAnimation();

    const intervalId = setInterval(runAnimation, 5000);

    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setDimensions(window);
    });

    return () => {
      clearInterval(intervalId);
      subscription.remove();
    };
  }, []);

  const {width, height} = dimensions;

  const normalize = (size: number) => {
    const scale = Math.min(width / 375, height / 812);
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, { height: height * 0.58 }]}>
        <Animated.Image
          source={require('../../assets/images/asthetic_women.png')}
          style={[
            styles.backgroundImage,
            {transform: [{translateX: slideAnim1}]},
          ]}
          resizeMode="contain"
        />

        <Animated.Image
          source={require('../../assets/images/envato-labs.png')}
          style={[
            styles.backgroundImage,
            {transform: [{translateX: slideAnim2}]},
          ]}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.formContainer, {
        width: width * 0.87,
        marginTop: height * 0.54,
        marginHorizontal: width * 0.065,
      }]}>
        <View style={styles.inputWrapper}>
          <View style={styles.iconContainer}>
            <Svg width={22} height={17} viewBox="0 0 22 17" fill="none">
              <Path
                d="M2.53691 4.15773C2.8319 3.42025 3.4238 2.84107 4.16752 2.56218L4.31227 2.5079C8.62415 0.890943 13.3758 0.890943 17.6877 2.5079L17.8325 2.56218C18.5762 2.84107 19.1681 3.42025 19.4631 4.15773V4.15773C20.4555 6.63864 20.5363 9.39099 19.6914 11.9259L19.5451 12.3648C19.2056 13.3832 18.3693 14.1577 17.3278 14.4181L16.8567 14.5358C13.0114 15.4972 8.9886 15.4972 5.14333 14.5358L4.67223 14.4181C3.63071 14.1577 2.79441 13.3832 2.45492 12.3648L2.30863 11.9259C1.46366 9.39099 1.54454 6.63864 2.53691 4.15773V4.15773Z"
                stroke="white"
                strokeWidth={2}
                strokeLinejoin="round"
              />
              <Path
                d="M3 3L6.36762 6.36762C6.78142 6.78142 7.29989 7.07497 7.86762 7.2169V7.2169C9.92423 7.73106 12.0758 7.73106 14.1324 7.2169V7.2169C14.7001 7.07497 15.2186 6.78142 15.6324 6.36762L19 3"
                stroke="white"
                strokeWidth={2}
                strokeLinejoin="round"
              />
            </Svg>
          </View>

          <TextInput
            style={styles.inputCotainer}
            placeholder="example@gmail.com"
            placeholderTextColor="#999999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.iconContainer}>
            <Svg width={20} height={21} viewBox="0 0 20 21" fill="none">
              <Path
                d="M5.19971 7.38296L4.40752 7.59957C3.48332 7.85228 2.72711 8.51674 2.35762 9.40076C1.39507 11.7037 1.39507 14.2963 2.35762 16.5992C2.72711 17.4833 3.48332 18.1477 4.40752 18.4004L5.19971 18.617C8.51077 19.5224 12.0042 19.5224 15.3152 18.617L16.1074 18.4004C17.0316 18.1477 17.7878 17.4833 18.1573 16.5992C19.1199 14.2963 19.1199 11.7037 18.1573 9.40076C17.7878 8.51674 17.0316 7.85228 16.1074 7.59957L15.3152 7.38296C12.0042 6.47761 8.51077 6.47761 5.19971 7.38296Z"
                stroke="white"
                strokeWidth={2}
                strokeLinejoin="round"
              />
              <Path
                d="M10.2574 11L10.2574 15"
                stroke="white"
                strokeWidth={2}
                strokeLinejoin="round"
              />
              <Path
                d="M7.12274 7V3.42451C7.12274 2.57601 7.67151 1.82494 8.47987 1.56707V1.56707C9.63623 1.19818 10.8787 1.19818 12.0351 1.56707V1.56707C12.8434 1.82494 13.3922 2.57601 13.3922 3.42451V7"
                stroke="white"
                strokeWidth={2}
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <TextInput
            style={styles.inputCotainer}
            placeholder="***********"
            placeholderTextColor="#999999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={styles.showPasswordIcon}>
            <Svg width={23} height={17} viewBox="0 0 23 17" fill="none">
              <Path
                d="M9.73082 5.57163C10.6791 5.26913 11.7043 5.26913 12.6525 5.57163C13.1862 5.74188 13.605 6.14268 13.7829 6.65346C14.099 7.56095 14.099 8.54208 13.7829 9.44957C13.605 9.96034 13.1862 10.3611 12.6525 10.5314C11.7043 10.8339 10.6791 10.8339 9.73082 10.5314C9.19711 10.3611 8.7783 9.96034 8.6004 9.44957C8.28432 8.54208 8.28432 7.56095 8.6004 6.65346C8.7783 6.14268 9.19711 5.74188 9.73082 5.57163Z"
                fill="#50535B"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.34473 2.96226C7.76202 -0.98742 14.6212 -0.98742 19.0385 2.96226C19.4025 3.28765 19.7981 3.70838 20.4901 4.44423L21.2431 5.24496C21.3918 5.40307 21.5175 5.57964 21.6169 5.7699C22.3673 7.20622 22.3673 8.89684 21.6169 10.3332C21.5175 10.5234 21.3918 10.7 21.2431 10.8581L20.4901 11.6588C19.7982 12.3946 19.4024 12.8154 19.0385 13.1408C14.6212 17.0905 7.76202 17.0905 3.34473 13.1408C2.98081 12.8154 2.58516 12.3947 1.89316 11.6588L1.14017 10.8581C0.99148 10.7 0.865734 10.5234 0.76633 10.3332C0.015919 8.89684 0.0159189 7.20622 0.76633 5.7699C0.865734 5.57964 0.99148 5.40307 1.14017 5.24496L1.89319 4.44423C2.58517 3.70838 2.98081 3.28765 3.34473 2.96226ZM13.3134 3.67426C11.9361 3.23492 10.4472 3.23492 9.06996 3.67426C7.91222 4.04359 7.00374 4.91302 6.61782 6.021C6.15875 7.33903 6.15875 8.764 6.61782 10.082C7.00374 11.19 7.91222 12.0594 9.06996 12.4288C10.4472 12.8681 11.9361 12.8681 13.3134 12.4288C14.4711 12.0594 15.3796 11.19 15.7655 10.082C16.2246 8.764 16.2246 7.33903 15.7655 6.021C15.3796 4.91302 14.4711 4.04359 13.3134 3.67426Z"
                fill="#50535B"
              />
            </Svg>
          </View>
        </View>
        <View style={styles.loginBtnContainer}>
          <TouchableOpacity style={styles.loginBtn} onPress={() => {}}>
            <Text style={styles.loginBtnText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.otherOptionsContainer, {
        marginTop: height * 0.84,
        marginHorizontal: width * 0.24,
      }]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            console.log(`btn presss`);
          }}>
          <View style={styles.googleLoginBtn}>
            <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
              <Path
                d="M0 10.5C0 4.7103 4.7103 0 10.5 0C12.8383 0 15.0515 0.7523 16.9004 2.1756L14.4604 5.3452C13.3172 4.4652 11.9477 4 10.5 4C6.9159 4 4 6.9159 4 10.5C4 14.0841 6.9159 17 10.5 17C13.3867 17 15.8398 15.1087 16.6852 12.5H10.5V8.5H21V10.5C21 16.2897 16.2897 21 10.5 21C4.7103 21 0 16.2897 0 10.5Z"
                fill="#D9D9D9"
              />
            </Svg>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            console.log(`button pressed`);
          }}>
          <View style={styles.appleLoginBtn}>
            <Svg width={19} height={24} viewBox="0 0 19 24" fill="none">
              <Path
                d="M13.9844 0C14.0386 0 14.0929 0 14.1502 0C14.2832 1.64354 13.6559 2.87159 12.8935 3.76091C12.1454 4.64408 11.121 5.50065 9.46416 5.37068C9.35363 3.75067 9.98199 2.6137 10.7434 1.72644C11.4495 0.899548 12.7441 0.16374 13.9844 0Z"
                fill="#D9D9D9"
              />
              <Path
                d="M19 17.1068C19 17.1231 19 17.1375 19 17.1528C18.5344 18.563 17.8702 19.7716 17.0597 20.8933C16.3198 21.9115 15.4131 23.2818 13.7941 23.2818C12.3951 23.2818 11.4659 22.3823 10.0322 22.3577C8.51551 22.3331 7.68146 23.1099 6.29479 23.3053C6.13616 23.3053 5.97754 23.3053 5.82199 23.3053C4.80373 23.158 3.98196 22.3516 3.38328 21.625C1.61796 19.4779 0.253797 16.7046 0 13.1555C0 12.8076 0 12.4606 0 12.1127C0.107454 9.57267 1.34165 7.50749 2.98212 6.50663C3.84789 5.97448 5.03808 5.52112 6.36335 5.72375C6.93133 5.81176 7.51158 6.0062 8.0202 6.19859C8.50221 6.38383 9.10498 6.71233 9.67602 6.69493C10.0629 6.68367 10.4476 6.48207 10.8376 6.33982C11.9796 5.9274 13.0992 5.4546 14.5749 5.67667C16.3484 5.9448 17.6072 6.7328 18.385 7.94857C16.8847 8.90338 15.6986 10.3422 15.9012 12.7994C16.0813 15.0314 17.379 16.3372 19 17.1068Z"
                fill="#D9D9D9"
              />
            </Svg>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            console.log(`button pressed`);
          }}>
          <View style={styles.metaLoginBtn}>
            <Svg width={32} height={21} viewBox="0 0 32 21" fill="none">
              <Path
                d="M9.03389 0C11.6578 0 13.709 1.95163 15.5657 4.43086C18.1173 1.22252 20.2512 0 22.8048 0C28.011 0 32 6.69104 32 13.7731C32 18.2048 29.8289 21 26.1925 21C23.5752 21 21.6928 19.7814 18.3465 14.0048C18.3465 14.0048 16.9515 11.5721 15.9919 9.89636C15.6557 10.4325 15.3023 11.0094 14.9294 11.6296L13.3602 14.2365C10.3035 19.288 8.60033 20.9999 5.5142 20.9999C1.97156 20.9999 0 18.1666 0 13.6427C-6.48499e-05 6.22758 4.07888 0 9.03389 0ZM20.8982 12.4407C23.6114 16.6407 24.5499 17.5821 26.0605 17.5821C27.6151 17.5821 28.5389 16.2344 28.5389 13.831C28.5389 8.68965 25.9431 3.43239 22.8487 3.43239C21.173 3.43239 19.7727 4.38809 17.6277 7.42059C19.6645 10.5057 20.8982 12.4407 20.8982 12.4407ZM10.6586 11.9119L12.5348 8.82185C13.0425 8.00639 13.5291 7.25703 13.9986 6.57001C12.3076 3.99258 10.9128 2.70828 9.25383 2.70828C5.80745 2.70828 3.05032 7.71932 3.05032 13.8745C3.05032 16.2207 3.82851 17.5821 5.44076 17.5821C6.98614 17.582 7.72439 16.5742 10.6586 11.9119Z"
                fill="#D9D9D9"
              />
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.signUpForgotContainer, {
        marginTop: height * 0.032,
        marginHorizontal: width * 0.22,
      }]}>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText1}>Don't have an account? </Text>
          <Text style={styles.signUpText2} onPress={() => {}}>
            Sign Up
          </Text>
        </View>
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText} onPress={() => {}}>
            Forgot Password
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
  },
  imageContainer: {
    position: 'absolute',
    width: '100%',
    top: '2%',
    zIndex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  formContainer: {
    position: 'absolute',
    zIndex: 2,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    backgroundColor: 'rgba(36, 36, 36, 0.68)',
    width: '100%',
    height: 59,
    borderRadius: 12,
    marginBottom: '5%',
    overflow: 'hidden',
  },
  iconContainer: {
    width: '6%',
    aspectRatio: 22/17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCotainer: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    paddingVertical: 0,
    paddingHorizontal: '3%',
    fontWeight: '500',
  },
  showPasswordIcon: {
    width: '6%',
    aspectRatio: 23/17,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '3%',
  },
  loginBtnContainer: {
    width: '100%',
    borderRadius: 12,
    height: 59,
  },
  loginBtn: {
    flex: 1,
    backgroundColor: '#F97316',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnText: {
    color: '#FFF',
    fontFamily: 'SF Pro',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: -0.048,
  },
  otherOptionsContainer: {
    flexDirection: 'row',
    height: '7%',
    justifyContent: 'center',
  },
  googleLoginBtn: {
    borderWidth: 1,
    borderColor: '#50535B',
    aspectRatio: 1,
    height: '100%',
    borderRadius: 17,
    marginRight: '9%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appleLoginBtn: {
    borderWidth: 1,
    borderColor: '#50535B',
    aspectRatio: 1,
    height: '100%',
    borderRadius: 17,
    marginRight: '9%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  metaLoginBtn: {
    borderWidth: 1,
    borderColor: '#50535B',
    aspectRatio: 1,
    height: '100%',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpForgotContainer: {
    height: '6%',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '34%',
    marginBottom: '12%',
  },
  signUpText1: {
    color: '#9EA0A5',
    fontFamily: 'SF Pro',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.028,
  },
  signUpText2: {
    color: '#F97316',
    fontFamily: 'SF Pro',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.028,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  forgotPasswordContainer: {
    height: '34%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#F97316',
    fontFamily: 'SF Pro',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.028,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});

export default Login;
