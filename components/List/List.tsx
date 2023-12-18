/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Text, View, VirtualizedList } from 'react-native';
import { styles } from './styles';

interface ItemProps {
  title: string;
}

const DATA = new Array(1000).fill(null).map((_, index) => `List ${index + 1}`);

const getItem = (data: any, index: number) => {
  return {
    id: Math.random().toString(12).substring(0),
    title: `list ${index + 1}`,
  };
};

const getItemCount = (data: string | any[]) => {
  return data.length;
};

const Item: React.FC<ItemProps> = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const VirtualizedListCont = (): JSX.Element => {
  return (
    <VirtualizedList
      data={DATA}
      initialNumToRender={15}
      renderItem={({ item }) => <Item title={`${item.title}${item.id}`} />}
      keyExtractor={(item) => item.id}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  );
};

export default VirtualizedListCont;
