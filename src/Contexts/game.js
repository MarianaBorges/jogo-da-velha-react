import React, {createContext, useState} from 'react';

const GameContext = createContext({});

export function GameProvider ({children}) {

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [isStart, setIsStart] = useState(false);
  const [isToucheble, setIsToucheble] = useState(false);
  const [board, setBoard] = useState([[0,0,0],[0,0,0],[0,0,0]]);
  const [player, setPlayer] = useState(1);

  function startGame(p1, p2){
    setPlayer1(p1);
    setPlayer2(p2);
    setIsStart(!isStart);
    setIsToucheble(true);
    setBoard([[0,0,0],[0,0,0],[0,0,0]]);
  }

  function setPosition(row,colum, player){
    var b = board;
    if (player === 1) {//Jogador 1
      b[row][colum]=1;
    }else{
      b[row][colum]=-1;
    }
    setBoard(b);
  }

  function verifyRow(){
    for (var r = 0; r<3 ; r++) {
      if (board[r][0] + board[r][1] + board[r][2] === 3 ) {
        return 1;
      }
      if (board[r][0] + board[r][1] + board[r][2] === -3 ) {
        return 2;
      }
    }
    return 0;
  }

  function verifyColum(){
    for (var c = 0; c<3 ; c++) {
      if (board[0][c] + board[1][c] + board[2][c] === 3 ) {
        return 1;
      }
      if (board[0][c] + board[1][c] + board[2][c] === -3 ) {
        return 2;
      }
    }
    return 0;
  }

  function verifyDiagonal(){
    if (board[0][0] + board[1][1] + board[2][2] === 3 ||
        board[2][0] + board[1][1] + board[0][2] === 3) {
          return 1;
    }
    if (board[0][0] + board[1][1] + board[2][2] === -3 ||
        board[2][0] + board[1][1] + board[0][2] === -3) {
         return 2;
    }
    return 0;
  }

  function verifyTie(){
    var a = 3;
    for (var r = 0; r< 3; r++) {
      for (var c = 0; c < 3; c++) {
        if (board[r][c] === 0) {
          a = 0;
        }
      }
    }
    return a;
  }

  return (
    <GameContext.Provider value={{
                                 player1, setPlayer1,
                                 player2, setPlayer2,
                                 isStart, setIsStart,
                                 startGame, setPosition,
                                 verifyRow,verifyColum,
                                 verifyDiagonal, board,
                                 isToucheble, setIsToucheble,
                                 player, setPlayer,
                                 verifyTie
                               }} >
      {children}
    </GameContext.Provider>
  );

}

export default GameContext;
