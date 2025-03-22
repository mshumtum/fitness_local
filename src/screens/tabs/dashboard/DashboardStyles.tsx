import {StyleSheet} from 'react-native';
import {scale} from '../../../utils/scalingFunctions';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  // ... existing code ...
  header: {
    flexDirection: 'row',
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
  presetSection: {
    padding: scale(20),
    marginTop: scale(20),
  },
  presetTitle: {
    color: 'white',
    fontSize: scale(20),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  presetButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height: scale(38),
    alignSelf: 'center',
    width: scale(149),
    justifyContent: 'center',
    borderRadius: scale(10),
    marginTop: scale(15),
    alignItems: 'center',
  },
  presetButtonText: {
    color: 'black',
    fontSize: scale(12),
    letterSpacing: 0.2,
    fontWeight: 'bold',
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    marginTop: scale(10),
    paddingBottom: scale(15),
    borderBottomWidth: scale(1),
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  dayItem: {
    alignItems: 'center',
  },
  activeDayItem: {
    borderLeftWidth: scale(2),
    borderLeftColor: '#FF5722',
    paddingLeft: scale(5),
  },
  dateText: {
    color: 'white',
    fontSize: scale(14),
  },
  activeDateText: {
    fontWeight: 'bold',
  },
  dayText: {
    color: 'white',
    fontSize: scale(12),
    opacity: 0.8,
  },
  activeDayText: {
    fontWeight: 'bold',
  },
  workoutCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: scale(10),
    padding: scale(15),
    margin: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutTextContainer: {
    flex: 1,
  },
  imageStyle: {
    width: scale(50),
    height: scale(50),
    marginRight: scale(10),
  },
  workoutTitle: {
    color: 'white',
    fontSize: scale(18),
    fontWeight: 'bold',
  },
  exercisesText: {
    color: 'white',
    fontSize: scale(14),
    opacity: 0.8,
  },
  progressCircle: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scale(3),
    borderColor: '#FF7043',
  },
  //   progressText: {
  //       color: 'white',
  //       fontWeight: 'bold',
  //   },
  metricsRow: {
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    marginBottom: scale(20),
  },
  caloriesCard: {
    flex: 1,
    backgroundColor: '#FF7043',
    borderRadius: scale(10),
    padding: scale(15),
    marginRight: scale(10),
    justifyContent: 'space-between',
  },
  caloriesCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(27),
  },
  metricTitle: {
    color: 'white',
    fontSize: scale(14),
    fontWeight: 'bold',
  },
  //   caloriesCircle: {
  //       alignSelf: 'center',
  //       width: scale(120),
  //       height: scale(120),
  //       borderRadius: scale(60),
  //       borderWidth: scale(8),
  //       borderColor: 'rgba(255, 255, 255, 0.3)',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //   },
  //   caloriesAmount: {
  //       color: 'white',
  //       fontSize: scale(32),
  //       fontWeight: 'bold',
  //   },
  //   caloriesUnit: {
  //       color: 'white',
  //       fontSize: scale(14),
  //   },
  statsColumn: {
    marginLeft: scale(10),
    width: scale(166),
  },
  stepsCard: {
    backgroundColor: '#333',
    borderRadius: scale(17),
    marginBottom: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(131),
  },
  stepsIconContainer: {
    alignItems: 'center',
  },
  stepsTitle: {
    color: 'white',
    fontSize: scale(16),
    fontFamily: 'Sf-ProReg',
    fontWeight: 'bold',
  },
  stepsCount: {
    color: 'white',
    fontSize: scale(28),
    fontWeight: 'bold',
  },
  sleepCard: {
    backgroundColor: '#333',
    borderRadius: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(15),
    minHeight: scale(66),
  },
  sleepTitle: {
    color: 'white',
    fontSize: scale(18),
    fontWeight: 'bold',
  },
  sleepHours: {
    color: 'white',
    fontSize: scale(16),
    marginVertical: scale(5),
  },
  //   sleepProgressContainer: {
  //       height: scale(4),
  //       backgroundColor: 'rgba(255, 255, 255, 0.2)',
  //       borderRadius: scale(2),
  //       marginTop: scale(5),
  //       overflow: 'hidden',
  //   },
  //   sleepProgress: {
  //       height: '100%',
  //       backgroundColor: '#FF7043',
  //       borderRadius: scale(2),
  //   },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navIcon: {
    marginBottom: scale(5),
  },
  navText: {
    color: 'white',
    fontSize: scale(12),
  },
});
