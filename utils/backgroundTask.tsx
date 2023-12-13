import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import React from 'react';

const BACKGROUND_FETCH_TASK = 'background-fetch';

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async ({ data }) => {
  const now = Date.now();

  console.log(`Got background fetch call at date: ${new Date(now).toISOString()}`);

  const response = await fetch(`${process.env.API_URL}/v1/place/all`);
  data = await response.json();

  console.log(`Received data from backend: ${JSON.stringify(data)}`);

  return BackgroundFetch.BackgroundFetchResult.NewData;
});

async function registerBackgroundFetchAsync() {
  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    minimumInterval: 1,
    stopOnTerminate: true,
    startOnBoot: true,
  });
}

async function unregisterBackgroundFetchAsync() {
  return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
}

export const toggleFetchTask = async (isRegistered: boolean): Promise<void> => {
  if (isRegistered) {
    await unregisterBackgroundFetchAsync();
  } else {
    await registerBackgroundFetchAsync();
  }
};

export default function BackgroundJob(): void {
  const [isRegistered, setIsRegistered] = React.useState(false);

  React.useEffect(() => {
    checkStatusAsync();
  }, []);

  const checkStatusAsync = async () => {
    const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);
    setIsRegistered(isRegistered);
  };
};
