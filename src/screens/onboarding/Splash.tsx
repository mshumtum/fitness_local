import {View, Text} from 'react-native';
import React from 'react';
import {t} from 'i18next';

const Splash = () => {
  return (
    <View>
      <Text>{t('onboarding.welcome')}</Text>
    </View>
  );
};

export default Splash;
