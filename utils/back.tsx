import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import React, { useEffect, useState } from 'react';

const BACKGROUND_FETCH_TASK = 'background-fetch-task';

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  try {
    // Place your fetch or other background task logic here.
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
      minimumInterval: 300, // 5 minutes - the minimum interval allowed by both iOS and Android.
      stopOnTerminate: false, // whether the task should stop or continue if the app is terminated.
      startOnBoot: true, // whether the task should start when the device is rebooted.
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
    <div>
      {isRegistered ? <p>Background task is registered.</p> : <p>Background task is not registered.</p>}
    </div>
  );
}
