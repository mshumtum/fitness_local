import {
  createNavigationContainerRef,
  StackActions,
  CommonActions,
} from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  Tab: undefined;
  OnboardingForm: undefined;
  Dashboard: undefined;
  WorkoutPrograms: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = (
  name: keyof RootStackParamList,
  params?: RootStackParamList[typeof name]
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const goBack = () => {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
};

export const reset = (routeName: keyof RootStackParamList) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routeName}],
      }),
    );
  }
};

export const replace = (routeName: keyof RootStackParamList, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(routeName, params));
  }
};

export const push = (routeName: keyof RootStackParamList, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(routeName, params));
  }
};

export const pop = (count: number = 1) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count));
  }
};

export const popToTop = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
};

const NavigationService = {
  navigate,
  goBack,
  reset,
  replace,
  push,
  pop,
  popToTop,
  navigationRef,
};

export default NavigationService; 