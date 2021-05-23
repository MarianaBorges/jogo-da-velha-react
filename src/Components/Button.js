import React,{useContext} from 'react';
import styles from '../styles/components/Button.module.css';
import GameContext from '../Contexts/game';

function Button (){

  const {player1, player2, startGame} = useContext(GameContext);

  return(
    <div className={styles.container}>
      <input
        type="button"
        value="Novo Jogo"
        onClick={()=>{
                      startGame(player1, player2);
                    }
      }/>
    </div>
  );
}
export default Button;
