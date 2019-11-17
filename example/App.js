/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import CircularTimer from 'react-native-circular-timer';

type Props = {};
export default class App extends Component<Props> {
  _restartTimer = () => {
    if (this._timerRef) this._timerRef.restart();
  };
  
  render() {
    return (
      <View style={styles.container}>
        <CircularTimer
          ref={refs => (this._timerRef = refs)}
          onTimeElapsed={() => {
            console.log('Timer Finished!');
          }}
          showSecond={true}
        />
        <TouchableOpacity onPress={this._restartTimer} style={styles.button}>
          <Text style={styles.restart}>Restart Timer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  button: {
    marginTop: 20,
    borderRadius: 6,
    backgroundColor: '#000000'
  },
  restart: {
    padding: 16,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  }
});
