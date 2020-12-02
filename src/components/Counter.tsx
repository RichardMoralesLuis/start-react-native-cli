import React, { FC, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';


export const Counter: FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleAdd = () => setCounter(counter + 1);
  const handleSub = () => setCounter(counter - 1);

  return <View>
    <View style={styles.counterContainer}>
      <Text style={styles.counter}>{counter}</Text>
    </View>
    <View style={styles.button}>
      <Button onPress={handleAdd} title="+"/>
    </View>
    <Pressable onPress={handleSub}>
      <Text style={styles.text}>Apreta para restar</Text>
    </Pressable>
  </View>;
};


const styles = StyleSheet.create({
  counterContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  counter: {
    fontSize: 36,
    fontWeight: 'bold'
  },
  buttons: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    marginBottom: 16
  },
  text: {
    color: 'red',
    fontSize: 20
  },
});
