import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import * as TaskManager from 'expo-task-manager';
import { toggleFetchTask } from '../../../utils/backgroundTask';
import VirtualizedListCont from '../../../components/List/List';
import { Button } from '../../../components/Button/Button';

const BACKGROUND_FETCH_TASK = 'background-fetch';

const DashboardBigger: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const checkStatusAsync = async () => {
      const isTaskRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);
      setIsRegistered(isTaskRegistered);
    };

    checkStatusAsync();
  }, []);

  const handleToggleFetchTask = async () => {
    toggleFetchTask(isRegistered);
    setIsRegistered(!isRegistered);
  };

  return (
    <View style={styles.container}>
      <Button text={'dupajan'} onPressFunction={handleToggleFetchTask}/>
      <VirtualizedListCont/>
    </View>
  );
};

export default DashboardBigger;
