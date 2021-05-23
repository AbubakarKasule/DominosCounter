import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Player({ name, score, active }) {
  return (
    <View style={{ ...styles.container, borderColor: `${active? '#49ACFD' : 'grey'}`}}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 100,
    width: 100,
    borderRadius: 5,
    borderWidth: 1.5,
    margin: 1,
  },
  name: {
    fontSize: 20,
  },
  score: {
    fontSize: 35,
  },
});

export default Player