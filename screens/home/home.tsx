import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { styles } from './style';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('welcome')}</Text>
      <Text>{t('description')}</Text>
      <Button
        title={t('details')}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
