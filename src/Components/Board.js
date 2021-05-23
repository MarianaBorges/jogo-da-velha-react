import React, {useContext} from 'react';
import styles from '../styles/components/Board.module.css';

import {saveRanking} from '../Storage/Ranking';

import Image1 from '../Public/florRoxa.png';
import Image2 from '../Public/florRosa.png';

import GameContext from '../Contexts/game';
import ChronometerContext from '../Contexts/chronometer';

function Board (){

  const {
    player1,
    player2,
    setPosition,
    board,
    verifyRow,
    verifyColum,
    verifyDiagonal,
    isToucheble, setIsToucheble,
    player, setPlayer,
    verifyTie
  } = useContext(GameContext);

  const {time} = useContext(ChronometerContext);

  function move(row,colum){
    if (board[row][colum] === 0 && isToucheble ) {
      setPosition(row, colum, player);
      if (player === 1) {
        setPlayer(2);
      }else {
        setPlayer(1) ;
      }
      verifyWinner();
    }
  }

  function verifyWinner(){
    const r = verifyRow();
    const c = verifyColum();
    const d = verifyDiagonal();
    const a = verifyTie();

    if ( r === 1 || c === 1 || d === 1 ) {
      alert(`${player1} ganhou!`);
      setIsToucheble(false);
      saveRanking(player1, time);
    }else if (r === 2 || c === 2 || d === 2) {
      alert(`${player2} ganhou!`);
      setIsToucheble(false);
      saveRanking(player2, time);
    }else if ( a === 3) {
      alert(`Deu Empate!!!!`);
      setIsToucheble(false);
    }
  }

  return(
    <div className={styles.boardContainer}>
      <div className={styles.boardItemOne} onClick={()=>move(0,0)}>
        { board[0][0]!== 0 && <img src= {board[0][0] === 1 ? Image1 : Image2 }  alt='flor'/>}
      </div>

      <div className={styles.boardItemTwo} onClick={()=>move(0,1)}>
        { board[0][1]!== 0 && <img src= {board[0][1] === 1 ? Image1 : Image2 }  alt='flor'/>}
      </div>
      <div className={styles.boardItemThree} onClick={()=>move(0,2)}>
        { board[0][2]!== 0 && <img src= {board[0][2] === 1 ? Image1 : Image2 }  alt='flor'/>}
      </div>
      <div className={styles.boardItemFour} onClick={()=>move(1,0)}>
        { board[1][0]!== 0 && <img src= {board[1][0] === 1 ? Image1 : Image2 }  alt='flor'/>}
      </div>
      <div className={styles.boardItemFive} onClick={()=>move(1,1)}>
        { board[1][1]!== 0 && <img src= {board[1][1] === 1 ? Image1 : Image2 }  alt='flor'/>}
      </div>
      <div className={styles.boardItemSex} onClick={()=>move(1,2)}>
        { board[1][2]!== 0 && <img src= {board[1][2] === 1 ? Image1 : Image2 }  alt='flor'/>}
      </div>
      <div className={styles.boardItemSeven} onClick={()=>move(2,0)}>
        { board[2][0]!== 0 && <img src= {board[2][0] === 1 ? Image1 : Image2 }  alt='flor'/>}
      </div>
      <div className={styles.boardItemEight} onClick={()=>move(2,1)}>
        { board[2][1]!== 0 && <img src= {board[2][1] === 1 ? Image1 : Image2 }  alt='flor'/>}
      </div>
      <div className={styles.boardItemNine} onClick={()=>move(2,2)}>
        { board[2][2]!== 0 && <img src= {board[2][2] === 1 ? Image1 : Image2 }  alt='flor'/>}
      </div>
    </div>
  );
}
export default Board;
