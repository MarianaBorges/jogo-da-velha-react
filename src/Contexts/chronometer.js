import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';
import GameContext from '../Contexts/game';

const ChronometerContext = createContext({});

export function ChronometerProvider ({children}) {

  const [time, setTime] = useState(0);
  const {isToucheble} = useContext(GameContext);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const hours = Math.floor(minutes / 60);

  useEffect(()=>{
    let countdownTimeout;
    if (isToucheble === true ){
      countdownTimeout = setTimeout(()=>{
        setTime(time + 1);
      }, 1000);
    }
  },[isToucheble, time]);

  function stopChronometer(){
    setTime(0);
  }

  return (
    <ChronometerContext.Provider value={{time,minutes,
                                         seconds, hours,
                                         stopChronometer,
                                       }} >
      {children}
    </ChronometerContext.Provider>
  );

}

export default ChronometerContext;
