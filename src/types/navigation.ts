import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

export type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};