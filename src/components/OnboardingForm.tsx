import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

interface OnboardingFormProps {
  navigation: any;
  onComplete?: (userData: {
    firstName: string;
    lastName: string;
    sex: 'male' | 'female' | '';
  }) => void;
}

const OnboardingForm = ({ navigation, onComplete }: OnboardingFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sex, setSex] = useState<'male' | 'female' | ''>('');

  const handleCreateProfile = () => {
    if (onComplete) {
      onComplete({ firstName, lastName, sex });
    }
    // Navigate to Dashboard screen
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#2B1200', '#0B0B0B']}
        style={styles.gradientBackground}
      >
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
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
        
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.progressHeader}>
          <LottieView
            source={require('../../assets/images/running.json')}
            autoPlay
            loop
            style={styles.runningAnimation}
          />
          <View style={styles.progressBar}>
            <View style={styles.progressIndicator}></View>
          </View>
        </View>

        <ScrollView style={styles.scrollContainer}>
          <View style={styles.formContent}>
            <Text style={styles.heading}>Lets Know You First</Text>
            <Text style={styles.subheading}>Welcome aboard!</Text>
            <Text style={styles.userType}>Warrior</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>First Name</Text>
              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={setFirstName}
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Last Name</Text>
              <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Your Sex</Text>
              <View style={styles.genderOptions}>
                <Pressable
                  style={[
                    styles.genderOption,
                    sex === 'male' && styles.genderOptionSelected,
                  ]}
                  onPress={() => setSex('male')}>
                  <View style={styles.checkboxContainer}>
                    <View style={[
                      styles.checkbox,
                      sex === 'male' && styles.checkboxSelected,
                    ]}>
                      {sex === 'male' && (
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
                    </View>
                    <Text style={styles.genderText}>Male</Text>
                  </View>
                </Pressable>
                
                <Pressable
                  style={[
                    styles.genderOption,
                    sex === 'female' && styles.genderOptionSelected,
                  ]}
                  onPress={() => setSex('female')}>
                  <View style={styles.checkboxContainer}>
                    <View style={[
                      styles.checkbox,
                      sex === 'female' && styles.checkboxSelected,
                    ]}>
                      {sex === 'female' && (
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
                    </View>
                    <Text style={styles.genderText}>Female</Text>
                  </View>
                </Pressable>
              </View>
            </View>

            <Text style={styles.infoText}>it's important to share?</Text>

            <TouchableOpacity 
              style={styles.createProfileButton} 
              onPress={handleCreateProfile}
            >
              <Text style={styles.createProfileButtonText}>Create Profile</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
  },
  gradientBackground: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 58,
    left: 20,
    zIndex: 1,
  },
  skipButton: {
    position: 'absolute',
    top: 58,
    right: 20,
    zIndex: 1,
  },
  skipText: {
    color: '#FFF',
    fontFamily: 'SF Pro',
    fontSize: 16,
    fontWeight: '500',
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
  },
  runningAnimation: {
    width: 54,
    height: 54,
    position: 'absolute',
    top: -45,
    left: 0,
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
  formContent: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  heading: {
    color: '#FFF',
    fontFamily: 'SF Pro',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  subheading: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontFamily: 'SF Pro',
    fontSize: 16,
    fontWeight: '400',
  },
  userType: {
    color: '#FFF',
    fontFamily: 'SF Pro',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    color: '#FFF',
    fontFamily: 'SF Pro',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    height: 56,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    color: '#FFF',
    paddingHorizontal: 16,
    fontFamily: 'SF Pro',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  genderOptions: {
    flexDirection: 'column',
    gap: 12,
  },
  genderOption: {
    height: 56,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  genderOptionSelected: {
    borderColor: '#F97316',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgb(255, 255, 255)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxSelected: {
    backgroundColor: '#F97316',
    borderColor: '#F97316',
  },
  genderText: {
    color: '#FFF',
    fontFamily: 'SF Pro',
    fontSize: 16,
    fontWeight: '500',
  },
  infoText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'SF Pro',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 32,
  },
  createProfileButton: {
    backgroundColor: '#F97316',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  createProfileButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingForm; 