import React, {useState, useContext} from 'react';
import styles from '../styles/components/StartGame.module.css';
import GameContext from '../Contexts/game';

function StartGame (){

  const { startGame } = useContext(GameContext);

  const [playerOne, setPlayerOne] = useState(' ');
  const [playerTwo, setPlayerTwo] = useState(' ');

  function handlePlayerOne(event){
    setPlayerOne(event.target.value);
  }
  function handlePlayerTwo(event){
    setPlayerTwo(event.target.value);
  }
  function handleStartGame(){
    if (playerOne !== ' ' && playerTwo !== ' ' ) {
      startGame(playerOne, playerTwo);
    }else {
      alert('Informe corretamente o nome dos jogadores!')
    }
  }

  return(
    <div className={styles.container}>
      <form>
        <div>
          <label>
            Jogador 1
          </label>
          <input type="text" value={playerOne} onChange={(e)=>handlePlayerOne(e)}/>
        </div>
        <div>
          <label>
            Jogador 2
          </label>
          <input type="text" value={playerTwo} onChange={(e)=>handlePlayerTwo(e)}/>
        </div>
        <input type="button" value="Iniciar" onClick={()=>handleStartGame()}/>
      </form>
    </div>
  );
}
export default StartGame;
