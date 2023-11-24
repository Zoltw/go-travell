import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { styles } from './style';
import DashboardBigger from './dashboardBigger/dashboardBigger';
import DashboardSmaller from './dashboardSmaller/dashboardSmaller';

const screenWidth = Dimensions.get('window').width;

const Dashboard: React.FC = () => {
  const isBiggerScreen = screenWidth > 400;

  return (
    <View style={styles.container}>
      {isBiggerScreen ? <DashboardBigger/> : <DashboardSmaller/>}
    </View>
  );
};

export default Dashboard;
