import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Svg, Path, Rect} from 'react-native-svg';
import LottieView from 'lottie-react-native';
import {navigationRef} from '../../navigation/NavigationService';
import images from '../../assets/images';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError("ERROR: Password Don't Match!");
    } else {
      setError('');
      // Proceed with signup logic
    }
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => navigationRef.navigate('Login')}
        style={styles.backButton}>
        <Svg width={34} height={34} viewBox="0 0 34 34" fill="none">
          <Rect
            x="1"
            y="1"
            width="32"
            height="32"
            rx="10"
            stroke="#FFFFFF"
            strokeOpacity={0.3}
            strokeWidth={1.5}
          />
          <Path
            d="M18.6 12.2L14.5071 16.2928C14.1166 16.6834 14.1166 17.3165 14.5071 17.7071L18.6 21.8"
            stroke="#FFFFFF"
            strokeWidth={1.5}
            strokeLinecap="round"
          />
        </Svg>
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.progressHeader}>
          <LottieView
            source={images.runningLottie}
            autoPlay
            loop
            style={{
              width: 54,
              height: 54,
              position: 'absolute',
              top: -45,
              left: 0,
            }}
          />
          <View style={styles.progressBar}>
            <View style={styles.progressIndicator}></View>
          </View>
        </View>
        <Text style={styles.title}>Sign Up For Free</Text>
        <Text style={styles.subtitle}>
          Quickly make your account in 1 minute
        </Text>

        {/* Email Field */}
        <View style={styles.inputWrapper}>
          <Image
            source={images.Emailicon}
            style={{width: 20, height: 20, marginRight: 10}}
            resizeMode="contain"
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Field */}
        <View style={styles.inputWrapper}>
          <Image
            source={images.Passwordicon}
            style={{width: 20, height: 20, marginRight: 10}}
            resizeMode="contain"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Confirm Password Field */}
        <View style={styles.inputWrapper}>
          <Image
            source={images.Passwordicon}
            style={{width: 20, height: 20, marginRight: 10}}
            resizeMode="contain"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        {/* Error Message */}
        {error ? (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>
              {'ERROR: Password Don’t Match!'}
            </Text>
          </View>
        ) : (
          <Text></Text>
        )}

        {/* Terms and Conditions */}
        <Text style={styles.terms}>
          <Text style={styles.newtitle}>Sign-Up Terms & Conditions </Text>
        </Text>
        <Text style={styles.subtitle}>
          By signing up, you agree to provide accurate information and keep your
          account secure. You must use the platform lawfully and refrain from
          any fraudulent activities. Your data will be processed as outlined in
          our Privacy Policy. We reserve the right to suspend or terminate
          accounts that violate these terms. These terms may be updated
          periodically,and continued use of our services implies acceptance of
          any changes.
        </Text>

        {/* Sign-Up Button */}
        <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
          <Text style={styles.signupBtnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    padding: 20,
    // justifyContent: 'center',
    position: 'relative',
    paddingTop: 130,
  },
  title: {
    color: '#FFF',
    fontFamily: 'SF Pro', // Ensure SF Pro is available in the project
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 38, // 190% of font size
    letterSpacing: -0.2,
  },
  subtitle: {
    color: 'white',
    fontSize: 10,
    textAlign: 'left',
    marginBottom: 35,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 35,
    borderWidth: 1,
    borderColor: '#444',
  },
  input: {
    flex: 1,
    height: 50,
    color: '#FFF',
    paddingLeft: 10,
  },
  errorBox: {
    backgroundColor: '#450A0A',
    padding: 12,
    borderRadius: 14,
    marginBottom: 15,
  },
  errorText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signupBtn: {
    backgroundColor: '#F97316',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  signupBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 68,
    left: 27,
    zIndex: 1,
  },
  terms: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 100,
    lineHeight: 18,
  },

  progressHeader: {
    position: 'absolute',
    top: 98,
    left: 98,
    right: 98,
    width: 206,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 40
  },
  progressBar: {
    flex: 1,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginLeft: 8,
  },
  progressIndicator: {
    width: '20%',
    height: '100%',
    backgroundColor: '#F97316',
  },
  newtitle: {
    fontFamily: 'SF Pro',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500', // Closest valid value (React Native supports specific weights)
    lineHeight: undefined, // "normal" is the default in React Native
    letterSpacing: -0.028,
    textAlign: 'left',
    marginTop: 62,
  },
});

export default Signup;
