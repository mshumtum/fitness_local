import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle, Path} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import images from '../../../assets/images';

const Dashboard = ({navigation}: {navigation: any}) => {
  // Sample data - in a real app, this would come from your state management or API
  const userData = {
    name: 'Warrior',
    dailyCalories: 730,
    dailySteps: 230,
    sleepHours: '5/8',
    workoutProgress: 75,
    exercisesLeft: 14,
    sleepQuality: 75,
  };

  // Days for the calendar strip
  const days = [
    {date: 'Feb 17', day: '1'},
    {date: 'Feb 18', day: '2'},
    {date: 'Feb 19', day: '3'},
    {date: 'Feb 20', day: '4'},
    {date: 'Feb 21', day: '5'},
  ];

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
                  style={{
                    width: 50,
                    height: 50,
                    marginRight: 10,
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeText}>Welcome aboard!</Text>
                <Text style={styles.userName}>{userData.name}</Text>
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
              <View
                key={index}
                style={[styles.dayItem, index === 0 && styles.activeDayItem]}>
                <Text
                  style={[
                    styles.dateText,
                    index === 0 && styles.activeDateText,
                  ]}>
                  {item.date}
                </Text>
                <Text
                  style={[styles.dayText, index === 0 && styles.activeDayText]}>
                  Day - {item.day}
                </Text>
              </View>
            ))}
          </View>

          {/* Workout Progress Card */}
          <View style={styles.workoutCard}>
            <View style={styles.workoutTextContainer}>
              <Text style={styles.workoutTitle}>Workout Progress !</Text>
              <Text style={styles.exercisesText}>
                {userData.exercisesLeft} Exercise left
              </Text>
            </View>
            <View style={styles.progressCircle}>
              <Text style={styles.progressText}>
                {userData.workoutProgress}%
              </Text>
            </View>
          </View>

          {/* Metrics Cards */}
          <View style={styles.metricsRow}>
            {/* Calories Card */}
            <View style={styles.caloriesCard}>
              <Text style={styles.metricTitle}>Calories</Text>
              <View style={styles.caloriesCircle}>
                <Text style={styles.caloriesAmount}>
                  {userData.dailyCalories}
                </Text>
                <Text style={styles.caloriesUnit}>/kCal</Text>
              </View>
            </View>

            {/* Stats Column */}
            <View style={styles.statsColumn}>
              {/* Steps Card */}
              <View style={styles.stepsCard}>
                <View style={styles.stepsIconContainer}>
                  <Icon name="shoe-print" size={24} color="white" />
                </View>
                <View>
                  <Text style={styles.stepsTitle}>Steps</Text>
                  <Text style={styles.stepsCount}>{userData.dailySteps}</Text>
                </View>
              </View>

              {/* Sleep Card */}
              <View style={styles.sleepCard}>
                <Text style={styles.sleepTitle}>Sleep</Text>
                <Text style={styles.sleepHours}>
                  {userData.sleepHours} Hours
                </Text>
                <View style={styles.sleepProgressContainer}>
                  <View
                    style={[
                      styles.sleepProgress,
                      {width: `${userData.sleepQuality}%`},
                    ]}
                  />
                </View>
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

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTextContainer: {
    flexDirection: 'column',
  },
  welcomeText: {
    color: 'white',
    fontSize: 16,
    opacity: 0.8,
  },
  userName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  presetSection: {
    padding: 20,
    marginTop: 20,
  },
  presetTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  presetButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  presetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  dayItem: {
    alignItems: 'center',
  },
  activeDayItem: {
    borderLeftWidth: 2,
    borderLeftColor: '#FF5722',
    paddingLeft: 5,
  },
  dateText: {
    color: 'white',
    fontSize: 14,
  },
  activeDateText: {
    fontWeight: 'bold',
  },
  dayText: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8,
  },
  activeDayText: {
    fontWeight: 'bold',
  },
  workoutCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    padding: 15,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutTextContainer: {
    flex: 1,
  },
  workoutTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  exercisesText: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
  },
  progressCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FF7043',
  },
  progressText: {
    color: 'white',
    fontWeight: 'bold',
  },
  metricsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  caloriesCard: {
    flex: 1,
    backgroundColor: '#FF7043',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    justifyContent: 'space-between',
    height: 200,
  },
  metricTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  caloriesCircle: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 8,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caloriesAmount: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  caloriesUnit: {
    color: 'white',
    fontSize: 14,
  },
  statsColumn: {
    flex: 1,
    marginLeft: 10,
  },
  stepsCard: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 95,
  },
  stepsIconContainer: {
    marginRight: 15,
  },
  stepsTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepsCount: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  sleepCard: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    height: 95,
  },
  sleepTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sleepHours: {
    color: 'white',
    fontSize: 16,
    marginVertical: 5,
  },
  sleepProgressContainer: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 2,
    marginTop: 5,
    overflow: 'hidden',
  },
  sleepProgress: {
    height: '100%',
    backgroundColor: '#FF7043',
    borderRadius: 2,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navIcon: {
    marginBottom: 5,
  },
  navText: {
    color: 'white',
    fontSize: 12,
  },
});

export default Dashboard;
