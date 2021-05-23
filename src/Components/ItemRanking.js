import React from 'react';
import styles from '../styles/components/ItemRanking.module.css';

function ItemRanking ({name, time}){

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const hours = Math.floor(minutes / 60);

  const [minuteLeft,minuteRight] = String(minutes).padStart(2,'0').split('');
  const [secondLeft,secondRight] = String(seconds).padStart(2,'0').split('');
  const [hoursLeft,hoursRight] = String(hours).padStart(2,'0').split('');

  return(
    <>
      <div className={styles.container}>
        <text>
          {name}
        </text>
        <text>
          <text>{hoursLeft}{hoursRight}:{minuteLeft}{minuteRight}:{secondLeft}{secondRight}</text>
        </text>
      </div>
    </>
  );
}
export default ItemRanking;
