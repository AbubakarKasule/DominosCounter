import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Player from '../components/player';

function Game({ navigation, route }) {
  const [players, setPlayers] = useState([]);
  const [activePlayer, setActivePlayer] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [leader, setLeader] = useState({ name: undefined, score: 0 });
  const maxScore = route.params.maxScore;

  

  useEffect(() => { 
    const { playerNames } = route.params;
    let temp = []
    playerNames.map((player, i) => {
      temp.push({ name: player, score: 0, id: i })
    });
    setPlayers(temp);
  }, [route]);

  return (
    <View style={styles.container}>
      <View style={styles.players}>
        {
        players.map((player) => { 
            return <TouchableOpacity key={player.id} onPress={() => { setActivePlayer(player.id) }}><Player active={activePlayer===player.id} name={player.name} score={player.score} /></TouchableOpacity> 
          }
        )
        }
      </View>
      <Text style={styles.gameState}>
        {gameOver?
          `${leader.name} has Won`
        :
          `${leader.name? `${leader.name} is leading with ${maxScore - leader.score} points to go` : "Welcome!"} `
        }
      </Text>
      <View style={styles.controllers}>
        <TouchableOpacity style={styles.controller} onPress={() => {
            if (!gameOver) {
              let temp = [...players];
              let idx = temp.findIndex((player) => player.id === activePlayer);
              temp[idx] = { ...temp[idx], score: temp[idx].score + 20 };
              if (temp[idx].score > leader.score) setLeader({ name: temp[idx].name, score: temp[idx].score });
              if (temp[idx].score >= maxScore) setGameOver(true);
              setPlayers(temp);
            }
          }
        }>
          <Text style={styles.icon}>+20</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controller} onPress={() => {
            if (!gameOver) {
              let temp = [...players];
              let idx = temp.findIndex((player) => player.id === activePlayer);
              temp[idx] = { ...temp[idx], score: temp[idx].score + 10 };
              if (temp[idx].score > leader.score) setLeader({ name: temp[idx].name, score: temp[idx].score });
              if (temp[idx].score >= maxScore) setGameOver(true);
              setPlayers(temp);
            }
          }
        }>
          <Text style={styles.icon}>+10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controller} onPress={() => {
            if (!gameOver) {
              let temp = [...players];
              let idx = temp.findIndex((player) => player.id === activePlayer);
              temp[idx] = { ...temp[idx], score: temp[idx].score + 15 };
              if (temp[idx].score > leader.score) setLeader({ name: temp[idx].name, score: temp[idx].score });
              if (temp[idx].score >= maxScore) setGameOver(true);
              setPlayers(temp);
            }
          }
        }>
          <Text style={styles.icon}>+15</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controller} onPress={() => {
            if (!gameOver) {
              let temp = [...players];
              let idx = temp.findIndex((player) => player.id === activePlayer);
              temp[idx] = { ...temp[idx], score: temp[idx].score + 5 };
              if (temp[idx].score > leader.score) setLeader({ name: temp[idx].name, score: temp[idx].score });
              if (temp[idx].score >= maxScore) setGameOver(true);
              setPlayers(temp);
            }
          }
        }>
          <Text style={styles.icon}>+5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  players: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: '30%',
    width: '100%',
    marginTop: '5%',
  },
  gameState: {
    display: 'flex',
    textAlignVertical: 'center',
    textAlign: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
    // height: 50,
    // width: '80%',
    fontSize: 25,
    color: 'black',
  },
  controllers: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '25%',
    width: '100%',
  },
  icon: { 
    fontSize: 40,
    color: '#49ACFD',
  },
  controller: {
    height: '50%',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default Game