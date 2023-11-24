import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';
import { toggleFetchTask } from '../../utils/backgroundTask';
import * as TaskManager from 'expo-task-manager';
import { Button } from '../../components/Button/Button';
import VirtualizedListExample from '../../components/List/List';

const BACKGROUND_FETCH_TASK = 'background-fetch';

const Dashboard: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const checkStatusAsync = async () => {
      const isTaskRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);
      setIsRegistered(isTaskRegistered);
    };

    checkStatusAsync();
  }, []);

  const handleToggleFetchTask = async () => {
    await toggleFetchTask(isRegistered);
    setIsRegistered(!isRegistered);
  };

  return (
    <View style={styles.container}>
      <VirtualizedListExample/>
    </View>
  );
};

export default Dashboard;
