/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Text, View} from 'react-native';

const HW = props => {
  return <Text> Hello {props.name}</Text>;
}

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <HW name="rolan" />
    </View>
  );
};
export default HelloWorldApp;
