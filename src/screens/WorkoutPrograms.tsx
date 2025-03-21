import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Image } from 'react-native';

import { NavigationProp } from '@react-navigation/native';
const WorkoutPrograms = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const programs = [
    {
      title: 'Bodybuilding',
      features: [
        'Hypertrophy',
        'Muscle growth',
        'Cardio & Endurance',
        'Mobility & Active Recovery',
        'Rest Days (for recovery)',
      ],
       image: require('../assets/images/bodybuilding.png'),
      progress: {
        exercises: '0/20',
        totalDays: '0/30',
      },
    },
    {
      title: 'Powerlifting',
      features: [
        'Squat',
        'Bench press',
        'Deadlift (SBD)',
        'Mobility & Active Recovery',
        'Rest Days (for recovery)',
      ],
      image: require('../assets/images/powerlifting.png'),
      progress: {
        exercises: '0/20',
        totalDays: '0/30',
      },
    },
    {
      title: 'CrossFit',
      features: [
        'Strength & Power',
        'Metabolic Conditioning',
        'Cardio & Endurance',
        'Mobility & Active Recovery',
        'Rest Days (for recovery)',
      ],
      image: require('../assets/images/crossFit.png'),
      progress: {
        exercises: '0/20',
        totalDays: '0/30',
      },
    },
    {
      title: 'CrossFit',
      features: [
        'Strength & Power',
        'Metabolic Conditioning',
        'Cardio & Endurance',
        'Mobility & Active Recovery',
        'Rest Days (for recovery)',
      ],
      image: require('../assets/images/crossFit.png'),
      progress: {
        exercises: '0/20',
        totalDays: '0/30',
      },
    },
    {
      title: 'Powerlifting',
      features: [
        'Squat',
        'Bench press',
        'Deadlift (SBD)',
        'Mobility & Active Recovery',
        'Rest Days (for recovery)',
      ],
      image: require('../assets/images/powerlifting.png'),
      progress: {
        exercises: '0/20',
        totalDays: '0/30',
      },
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {programs?.map((program, index) => (
          <TouchableOpacity
            key={program.title}
            style={styles.programCard}
            onPress={() => navigation.navigate('ProgramDetails', { program })}>
            <View style={styles.cardContent}>
              <Image source={program?.image} style={styles.programImage} />
              <View style={styles.programInfo}>
                <Text style={styles.programTitle}>{program.title}</Text>
                {program.features.map((feature, idx) => (
                  <Text key={idx} style={styles.featureText}>
                    • {feature}
                  </Text>
                ))}
                <View style={styles.progressContainer}>
                  <View style={styles.progressItem}>
                    <Text style={styles.progressLabel}>Exercises</Text>
                    <Text style={styles.progressValue}>
                      {program.progress.exercises}
                    </Text>
                  </View>
                  <View style={styles.progressItem}>
                    <Text style={styles.progressLabel}>Total Days</Text>
                    <Text style={styles.progressValue}>
                      {program.progress.totalDays}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  programCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardContent: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
  },
  programImage: {
    width: '40%',
    height: 200,
    objectFit:"contain"
    // borderRadius: 12,
    // marginBottom: 16,
  },
  programInfo: {
    paddingHorizontal: 8,
  },
  programTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 6,
    opacity: 0.8,
  },
  progressContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },
  progressItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    marginRight: 8,
    opacity: 0.6,
  },
  progressValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default WorkoutPrograms; 