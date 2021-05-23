import React from 'react';
import styles from '../styles/components/Played.module.css';

function Player ({player, image}){
  return(
    <div className={styles.container}>
      <img src={image}  alt='flor'/>
      <div>
        <text>
          {player}
        </text>
      </div>
    </div>
  );
}
export default Player;
