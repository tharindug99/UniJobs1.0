import { Text, View, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';

export class JobsApplied extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>You've Applied to Some Amazing Jobs!</Text>
        <Text style={styles.subtitle}>Keep up the good work!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  illustration: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
});

export default JobsApplied;
