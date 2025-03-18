import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import Svg, {Rect, Path} from 'react-native-svg';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

interface LoginModalProps {
  visible: boolean;
  onClose: () => void;
  onAgree: () => void;
  navigation: any;
}

const LoginModal = ({visible, onClose, onAgree, navigation}: LoginModalProps) => {
  const [agreeChecked, setAgreeChecked] = useState(false);

  const toggleAgree = () => {
    setAgreeChecked(!agreeChecked);
  };

  const handleAgree = () => {
    // Close the modal
    onClose();
    // Navigate to the onboarding form
    navigation.navigate('OnboardingForm');
    // Call the original onAgree function if needed
    if (onAgree) onAgree();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <LinearGradient
          colors={['rgba(43, 18, 0, 0.54)', 'rgba(11, 11, 11, 0.54)']}
          style={styles.gradientBackground}
        >
          <TouchableOpacity onPress={onClose} style={styles.backButton}>
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

          <View style={styles.progressHeader}>
            <LottieView
              source={require('../../assets/images/running.json')}
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

          <ScrollView style={styles.scrollContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.termsTitle}>Terms and Conditions</Text>

              <View style={styles.termSection}>
                <Text style={styles.termHeadingfirst}>
                  • Unloading the firearm
                </Text>
                <Text style={styles.termText}>
                  Before starting a dry fire session, you must ensure that the
                  firearm is completely unloaded. This involves visually and
                  physically checking the magazine and chamber.
                </Text>
              </View>

              <View style={styles.termSection}>
                <Text style={styles.termHeading}>• Consistency</Text>
                <Text style={styles.termText}>
                  Dry firing helps to develop muscle memory and consistency, which
                  are important for shooting.
                </Text>
              </View>

              <View style={styles.termSection}>
                <Text style={styles.termHeading}>• Refining skills</Text>
                <Text style={styles.termText}>
                  Dry firing allows you to focus on improving your grip, trigger
                  control, and sight alignment.
                </Text>
              </View>

              <View style={styles.termSection}>
                <Text style={styles.termHeading}>• CO2-powered barrels</Text>
                <Text style={styles.termText}>
                  Some dry fire training tools, like the CoolFire Trainer, are
                  CO2-powered barrels that cycle the slide, reset the trigger, and
                  provide some recoil.
                </Text>
              </View>

              <View style={styles.termSection}>
                <Text style={styles.termHeading}>• Booking terms</Text>
                <Text style={styles.termText}>
                  Some training companies may have terms and conditions for
                  bookings, such as
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  // width:316,
                  height: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  marginLeft: 8,
                }}></View>

              <View style={styles.checkboxContainer}>
                <TouchableOpacity style={styles.checkbox} onPress={toggleAgree}>
                  {agreeChecked && (
                    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
                      <Path
                        d="M3 7L6 10L11 4"
                        stroke="#FFFFFF"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  )}
                </TouchableOpacity>
                <Text style={styles.checkboxText}>
                  I agree with the terms and conditions
                </Text>
              </View>

              <TouchableOpacity
                style={[
                  styles.agreeButton,
                  !agreeChecked && styles.agreeButtonDisabled,
                ]}
                onPress={handleAgree}
                disabled={!agreeChecked}>
                <Text style={styles.agreeButtonText}>Agree</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#131313',
    width: '100%',
    height: '100%',
  },
  gradientBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 68,
    left: 27,
    zIndex: 1,
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
  scrollContainer: {
    flex: 1,
    marginTop: 130,
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  termsTitle: {
    color: '#FFF',
    fontFamily: 'SF Pro',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: -0.04,
    marginBottom: 24,
  },
  termSection: {
    marginBottom: 20,
  },
  termHeadingfirst: {
    color: '#FFF',
    fontFamily: 'SF Pro',
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: -0.032,
    marginBottom: 8,
  },
  termHeading: {
    color: '#FFF',
    fontFamily: 'SF Pro',
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: -0.032,
    marginBottom: 8,
  },
  termText: {
    color: '#FFF',
    fontFamily: 'SF Pro',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    opacity: 0.8,
    letterSpacing: -0.024,
    paddingLeft: 16,
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxText: {
    color: '#FFF',
    fontFamily: 'SF Pro',
    fontSize: 14,
    fontWeight: '500',
  },
  agreeButton: {
    backgroundColor: '#F97316',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  agreeButtonDisabled: {
    opacity: 0.5,
  },
  agreeButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'SF Pro',
    fontWeight: '500',
  },
});

export default LoginModal;
