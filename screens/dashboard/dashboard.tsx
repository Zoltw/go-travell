import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';
import { toggleFetchTask } from '../../utils/backgroundTask';
import * as TaskManager from 'expo-task-manager';
import { Button } from '../../components/Button/Button';

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
      <Text>Details Screen</Text>
      <Button text="Toggle Fetch Task" onPressFunction={handleToggleFetchTask} />
    </View>
  );
};

export default Dashboard;
