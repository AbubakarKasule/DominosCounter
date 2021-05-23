import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

function CreateGame({ navigation }) {
  const [players, setPlayers] = useState([]);
  const [maxScore, setmaxScore] = useState(100);
  const [player, setPlayer] = useState("");


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Winning Score?</Text>
      <Text style={{ fontSize: 50 }}>{maxScore}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => { if (maxScore > 10) setmaxScore(maxScore - 10) }}><Text style={styles.icon}>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { setmaxScore(maxScore + 10) }}><Text style={styles.icon}>+</Text></TouchableOpacity>
      </View>
      <Text style={styles.label}>Who is playing?</Text>
      <TextInput
        value={player}
        onChangeText={(name) => setPlayer(name)}
        style={styles.input}
        placeholder={`  name`}
      />
      <TouchableOpacity style={{...styles.input, justifyContent: 'center', alignItems: 'center', marginTop: 20, }} onPress={() => { setPlayers([...players, player]); setPlayer('') }}><Text style={styles.icon}>Add Player</Text></TouchableOpacity>
      <Text style={styles.label}>Players added</Text>
      <Text style={{ fontSize: 30 }}>{players.length}</Text>
      <TouchableOpacity style={{...styles.input, justifyContent: 'center', alignItems: 'center', marginTop: 10, }} onPress={() => { if(players.length !== 0 ) navigation.navigate("Game", { playerNames: players, maxScore: maxScore }); }}><Text style={styles.icon}>Start Game</Text></TouchableOpacity>
      <TouchableOpacity style={{...styles.input, justifyContent: 'center', alignItems: 'center', marginTop: 10, }} onPress={() => { setPlayers([]); setPlayer(''); setmaxScore(100); }}><Text style={styles.icon}>Reset</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
  label: {
    fontSize: 30,
    paddingBottom: 20,
    paddingTop: 30,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: '#49ACFD',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    height: 50,
    justifyContent: 'space-between',
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: { 
    fontSize: 40,
    color: '#49ACFD',
  },
  
});

export default CreateGame
