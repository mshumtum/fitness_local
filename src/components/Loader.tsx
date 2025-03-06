import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Modal,
  Platform,
} from 'react-native';

interface LoaderProps {
  loading?: boolean;
}

const Loader: React.FC<LoaderProps> = ({loading = false}) => {
  if (!loading) return null;

  return (
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={Platform.OS === 'ios' ? 'large' : 50} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Loader;
