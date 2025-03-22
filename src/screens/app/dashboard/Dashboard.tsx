import React, {useState} from 'react';
import {
  Image,
  LayoutAnimation,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle, Path} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import images from '../../../assets/images';
import {styles} from './DashboardStyles';
import {CircleComponent} from '../../../components';
import {DayData, days} from '../../../constants';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Dashboard = ({navigation}: {navigation: any}) => {
  // Sample data - in a real app, this would come from your state management or API
  // const userData = {
  //   name: 'Warrior',
  //   dailyCalories: 730,
  //   dailySteps: 230,
  //   sleepHours: '5/8',
  //   workoutProgress: 75,
  //   exercisesLeft: 14,
  //   sleepQuality: 75,
  // };

   const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [currentData, setCurrentData] = useState<DayData>(days[0]);

  const handleDaySelect = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    console.log('VALUEEEEE', days[index]);
    setSelectedDayIndex(index);
    setCurrentData(days[index]);
  };


  return (
    <LinearGradient
      colors={['#F5A15B', '#E8853A']}
      style={styles.gradientBackground}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" backgroundColor="#F5A15B" />
        <ScrollView style={styles.scrollView}>
          {/* Header with profile and icons */}
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
                    <Circle
                      cx={12}
                      cy={12}
                      r={10}
                      stroke="white"
                      strokeWidth={2}
                    />
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

          {/* Preset Routines Section */}
          <View style={styles.presetSection}>
            <Text style={styles.presetTitle}>Preset</Text>
            <Text style={styles.presetTitle}>Routines</Text>
            <TouchableOpacity style={styles.presetButton}>
              <Text style={styles.presetButtonText}>Preset Routines</Text>
            </TouchableOpacity>
          </View>
          {/* Calendar Strip */}
          <View style={styles.calendarContainer}>
          {days.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleDaySelect(index)}
            style={[
              styles.dayItem,
              selectedDayIndex === index && styles.activeDayItem
            ]}
          >
            <Text
              style={[
                styles.dateText,
                selectedDayIndex === index && styles.activeDateText,
              ]}>
              {item.date}
            </Text>
            <Text
              style={[
                styles.dayText,
                selectedDayIndex === index && styles.activeDayText,
              ]}>
              Day - {item.day}
            </Text>
          </TouchableOpacity>
        ))}
          </View>

          {/* Workout Progress Card */}
          <View style={styles.workoutCard}>
            <View style={styles.workoutTextContainer}>
              <Text style={styles.workoutTitle}>Workout Progress !</Text>
              <Text style={styles.exercisesText}>
                {currentData.exercisesLeft} Exercise left
              </Text>
            </View>
            <CircleComponent
              size={75}
              strokeWidth={10}
              progress={currentData.workoutProgress}
              color="#FF7043"
              bidirectional={false}
              startPosition={90} // starts from bottom
            />
          </View>

          {/* Metrics Cards */}
          <View style={styles.metricsRow}>
            {/* Calories Card */}
            <View style={styles.caloriesCard}>
              <Text style={styles.metricTitle}>Calories</Text>
              <View style={styles.caloriesCircle}>
                <CircleComponent
                  size={140}
                  strokeWidth={15}
                  percentage={' kCal'}
                  progress={currentData.calories}
                  color="rgba(255, 255, 255, 0.3)"
                  startPosition={160} // starts from bottom
                />
              </View>
            </View>

            {/* Stats Column */}
            <View style={styles.statsColumn}>
              {/* Steps Card */}
              <View style={styles.stepsCard}>
                <View style={styles.stepsIconContainer}>
                  <Icon name="shoe-print" size={24} color="white" />
                  <Text style={styles.stepsTitle}>Steps</Text>
                  <Text style={styles.stepsCount}>{currentData.steps}</Text>
                </View>
              </View>

              {/* Sleep Card */}
              <View style={styles.sleepCard}>
                <View>
                  <Text style={styles.sleepTitle}>Sleep</Text>
                  <Text style={styles.sleepHours}>
                    {currentData.sleepQuality} Hours
                  </Text>
                </View>
                <CircleComponent
                  size={50}
                  strokeWidth={5}
                  progress={currentData.sleepQuality}
                  color="#FF7043"
                  bidirectional={false}
                  startPosition={90} // starts from bottom
                />
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        {/* <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="home" size={24} color="white" style={styles.navIcon} />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="dumbbell" size={24} color="white" style={styles.navIcon} />
            <Text style={styles.navText}>Exercise</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="calendar" size={24} color="white" style={styles.navIcon} />
            <Text style={styles.navText}>My Routine</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="target" size={24} color="white" style={styles.navIcon} />
            <Text style={styles.navText}>Dry Fire</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="account-group" size={24} color="white" style={styles.navIcon} />
            <Text style={styles.navText}>Friends</Text>
          </TouchableOpacity>
        </View> */}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Dashboard;
