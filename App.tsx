import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './data/bootstrap';
import {Provider} from 'react-redux';
export default function App() {

  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! you dingus!!</Text>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
