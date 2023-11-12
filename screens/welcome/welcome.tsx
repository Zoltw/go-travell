import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import '../../localization/i18n';
import { LanguagePicker } from '../../components/LanguagePicker/LanguagePicker';
import { styles } from './style';
import { Button } from '../../components/Button/Button';


type WelcomeNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeNavigationProp;
};

const Welcome: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Choose your language</Text>
      <LanguagePicker />
      <Button
        text={'Continue'}
        onPressFunction={() => navigation.replace('Home')}
      />
    </View>
  );
};

export default Welcome;
