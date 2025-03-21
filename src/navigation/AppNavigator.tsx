import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Splash, Login, Signup} from '../screens';
import {navigationRef, RootStackParamList} from './NavigationService';
import OnboardingForm from '../components/OnboardingForm';
// import Dashboard from '../screens/Dashboard';
import WorkoutPrograms from '../screens/WorkoutPrograms';
import Dashboard from '../screens/app/dashboard/Dashboard';
import {Image, Platform, StyleSheet} from 'react-native';
import images from '../assets/images';
import {BlurView} from '@react-native-community/blur';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          // position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopWidth: 0,
          height: 60,
          backgroundColor: 'rgba(0,0,0,0.8)',
        },

        // tabBarBackground: () => (
        //   <BlurView
        //     style={{
        //       // position: 'absolute',
        //       // bottom: 50,
        //       height: 60,
        //       left: 0,
        //       right: 0,
        //       bottom: 0,
        //       backgroundColor: 'red',
        //     }}
        //     blurType="dark"
        //     blurAmount={10}
        //   />
        // ),
      }}>
      <Tab.Screen
        name="HomeTab"
        component={Dashboard}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{width: 23, height: 23, resizeMode: 'contain'}}
              source={focused ? images.inactiveHome : images.inactiveHome}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ExcerciseTab"
        component={WorkoutPrograms}
        options={{
          title: 'Exercise',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{width: 23, height: 23, resizeMode: 'contain'}}
              source={focused ? images.inactiveExcer : images.inactiveExcer}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RoutineTab"
        component={Splash}
        options={{
          title: 'My Routine',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{width: 23, height: 23, resizeMode: 'contain'}}
              source={focused ? images.inactiveRoutine : images.inactiveRoutine}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DryFireTab"
        component={Splash}
        options={{
          title: 'Dry Fire',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{width: 23, height: 23, resizeMode: 'contain'}}
              source={focused ? images.inactiveFry : images.inactiveFry}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FriendsTab"
        component={Splash}
        options={{
          title: 'Friends',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{width: 23, height: 23, resizeMode: 'contain'}}
              source={focused ? images.inactiveFriends : images.inactiveFriends}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        // initialRouteName="Tab"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="OnboardingForm" component={OnboardingForm} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen 
          name="WorkoutPrograms" 
          component={WorkoutPrograms}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
