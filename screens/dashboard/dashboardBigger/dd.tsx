import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';

const BACKGROUND_FETCH_TASK = 'background-fetch-task';

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  try {
    // Your background task logic goes here.
    const response = await fetch('YOUR_API_ENDPOINT');
    const data = await response.json();
    console.log('Background Fetch data:', data);
    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error(error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

async function registerBackgroundFetchAsync() {
  try {
    await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
      minimumInterval: 300, // 5 minutes is the minimum interval
      stopOnTerminate: false,
      startOnBoot: true,
    });
    console.log('Background Fetch task registered.');
  } catch (error) {
    console.error('Error registering background fetch task:', error);
  }
}

export default function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    async function checkTaskStatus() {
      const status = await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);
      setIsRegistered(status);
    }

    checkTaskStatus();
    registerBackgroundFetchAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{isRegistered ? 'Background task is registered.' : 'Background task is not registered.'}</Text>
      <Button
        title={isRegistered ? 'Unregister Background Task' : 'Register Background Task'}
        onPress={() => {
          if (isRegistered) {
            BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
            setIsRegistered(false);
          } else {
            registerBackgroundFetchAsync();
            setIsRegistered(true);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
