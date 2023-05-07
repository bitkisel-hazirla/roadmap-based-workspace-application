import React, { useState, useEffect } from 'react';

import { Stats } from '../../components/timer/Stats';
import { Timer as Clock } from '../../components/timer/Timer';

export const Timer = () => {
  const [isTimer, setTimer] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [initialDate, setInitialDate] = useState(new Date().getDate());
  const startPause = isRunning ? 'Pause' : 'Start';
  const backgroundColor = isTimer ? '#D2DEFC' : '#fff';
  const backgroundColor2 = !isTimer ? '#D2DEFC' : '#fff';
  const handleButtonClick = () => {
    setTimer((prev) => !prev);
  };
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    const currentDate = new Date().getDate();
    if (currentDate !== initialDate) {
      handleReset();
      setInitialDate(currentDate);
    }
  }, [initialDate]);

  const toggleStart = () => {
    setIsRunning((prev) => !prev);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div
      style={{ backgroundColor: 'white', width: '94%', height: '90%' }}
      className="m-10 flex flex-col items-center w-full rounded-3xl gap-12"
    >
      <div className="flex">
        <div style={{ border: '2px solid #2F56B8' }} className="flex rounded-xl mt-20 h-12 w-96">
          <button
            onClick={handleButtonClick}
            style={{ borderColor: '#2F56B8', backgroundColor }}
            className={`rounded-xl w-full ${isTimer ? 'border-r-2' : null}`}
          >
            Timer
          </button>
          <button
            onClick={handleButtonClick}
            style={{ borderColor: '#2F56B8', backgroundColor: backgroundColor2 }}
            className={`rounded-xl w-full ${!isTimer ? 'border-l-2' : null}`}
          >
            Stats
          </button>
        </div>
      </div>
      <div>
        {isTimer && <Clock time={formatTime(time)} />}
        {!isTimer && <Stats />}
      </div>
      <button className="bg-black w-20 h-20 text-white" onClick={toggleStart}>
        {startPause}
      </button>
    </div>
  );
};
