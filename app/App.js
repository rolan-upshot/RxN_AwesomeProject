/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const HW = props => {
  return <Text> Hello {props.name}</Text>;
}

const HelloWorldApp = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="Click me!" />
      <HW name="rolan" />
    </View>
  );
};
export default HelloWorldApp;
