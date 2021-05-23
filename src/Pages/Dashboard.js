import React, {useContext, useState, useEffect} from 'react';
import Player from '../Components/Player';
import Chronometer from '../Components/Chronometer';
import ItemRanking from '../Components/ItemRanking';
import Board from '../Components/Board';
import Button from '../Components/Button';
import StartGame from '../Components/StartGame';
import styles from '../styles/pages/dashboard.module.css';

import GameContext from '../Contexts/game';
import {ChronometerProvider} from '../Contexts/chronometer';

import Image1 from '../Public/flor-roxa.jpg';
import Image2 from '../Public/flor-rosa.jpg';

import {getRanking} from '../Storage/Ranking';

function Dashboard (){

  const { isStart,
          player1,
          player2,
          isToucheble,
          player } = useContext(GameContext);

  const [ranking, setRanking] = useState([]);

  useEffect(()=>{
    const r = getRanking();
    setRanking(r);
  },[isToucheble]);

  return(

    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <text className={styles.title}>
          Jogo das Flores
        </text>
      </div>
        <div className={styles.container}>

        <div className={styles.containerLeft}>
          <div className={styles.containerLeftPlayer}>
            <Player
              player={player1 !== ''?player1: 'Jogador 1'}
              image={Image1}
            />
            <Player
              player={player2 !== ''?player2: 'Jogador 2' }
              image={Image2}
             />
          </div>
          <div className={styles.containerLeftRanking}>
            <text className={styles.titleRanking}>
              Ranking
            </text>

            {
              ranking.map((r)=>{
                return   <ItemRanking name={r.name} time={r.time} />;
              })
            }

          </div>
        </div>

        <div className={styles.containerRight}>
        { isStart ?
          (<>
            <ChronometerProvider>
              <div className={styles.containerRightHeader}>
                {player === 1 ?
                  <Player
                    player={player1 !== ''?player1: 'Jogador 1'}
                    image={Image1}
                  />
                  :
                  <Player
                    player={player2 !== ''?player2: 'Jogador 2' }
                    image={Image2}
                   />}
                <Chronometer />
                {!isToucheble && <Button />}
              </div>
              <Board />
            </ChronometerProvider>
          </>) :
          (<StartGame />)
        }

        </div>

        </div>
    </div>

  );
}
export default Dashboard;
