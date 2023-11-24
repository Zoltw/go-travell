import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import * as TaskManager from 'expo-task-manager';
import VirtualizedListCont from '../../../components/List/List';
import { toggleFetchTask } from '../../../utils/backgroundTask';


const BACKGROUND_FETCH_TASK = 'background-fetch';

const DashboardSmaller: React.FC = () => {
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
      {/* <VirtualizedListCont/> */}
    </View>
  );
};

export default DashboardSmaller;
