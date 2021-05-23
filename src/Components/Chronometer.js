import React, {useContext} from 'react';
import styles from '../styles/components/Chronometer.module.css';
import ChronometerContext from '../Contexts/chronometer';

function Chronometer (){
  const {
    minutes,
    seconds,
    hours
  } = useContext(ChronometerContext);


  const [minuteLeft,minuteRight] = String(minutes).padStart(2,'0').split('');
  const [secondLeft,secondRight] = String(seconds).padStart(2,'0').split('');
  const [hoursLeft,hoursRight] = String(hours).padStart(2,'0').split('');

  return(
    <div className={styles.container}>
      <text>{hoursLeft}{hoursRight}:{minuteLeft}{minuteRight}:{secondLeft}{secondRight}</text>
    </div>
  );
}
export default Chronometer;
