/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Counter } from './src/components/Counter';
import { Input } from './src/components/Input';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <View style={styles.container}>
      <Counter/>
      {/*<Input/>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
