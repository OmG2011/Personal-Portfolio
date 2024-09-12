import React, { useEffect, useRef, useState, useCallback } from 'react';
import mole from '../assets/Whack-a-mole.png';

function Falling_Boxes() {
  const [moleSize, setMoleSize] = useState(100);
  const [position, setPosition] = useState([0, 0]);
  const divRef = useRef(null);
  const [score, setScore] = useState(0);
  const [paused, setPaused] = useState(true);
  const intervalRef = useRef(null);  // Use ref to hold the interval ID
  const [intervalDelay, setIntervalDelay] = useState(500);  // Store the interval delay
  const imgRef = useRef(null);
  const [dis, setDis] = useState('none');

  const randomizer = useCallback(() => {
    const max = 300;
    const min = 50;
    setMoleSize(Math.random() * (max - min) + min);
  }, []);

  const moveMole = useCallback(() => {
    if (divRef.current) {
      const boundaries = divRef.current.getBoundingClientRect();
      const newX = Math.random() * (boundaries.width - moleSize);
      const newY = Math.random() * (boundaries.height - moleSize);

      setPosition([newX, newY]);
      randomizer();
      // Set a new random interval delay
      setIntervalDelay(Math.random() * (1000 - 200) + 200);
    }
  }, [moleSize, randomizer]);

  useEffect(() => {
    if (!paused) {
      // Set up a new interval whenever the game is resumed
      intervalRef.current = setInterval(() => {
        moveMole();
      }, intervalDelay);  // Use dynamic interval delay

      // Clean up the interval when the component unmounts or pauses
      return () => clearInterval(intervalRef.current);
    } else {
      // Clear the interval when the game is paused
      clearInterval(intervalRef.current);
    }
  }, [paused, intervalDelay, moveMole]);  // Add moveMole to dependencies

  const handleMoleClick = () => {
    if (!paused) {
      setScore((prevScore) => prevScore + 1);  // Increment the score
      moveMole();  // Instantly move the mole to a new location
    }
  };

  const pauseHandler = () => {
    setPaused((prevPaused) => !prevPaused);  // Toggle pause state
  };

  return (
    <div className="parent h-100 d-flex flex-column justify-content-between">
      <div>
        <h1>Whack a Mole!</h1>
      </div>
      <div
        className="h-100"
        ref={divRef}
        style={{ position: 'relative' }}
        onClick={(e) => {
          if (!paused && e.target !== imgRef.current) {
            setDis('a');
            if (score > 0) {
              setScore((prevScore) => prevScore - 1);
            }
            setTimeout(() => {
              setDis('none');
            }, 100);
          }
        }}
      >
        <img
          src={mole}
          ref={imgRef}
          style={{
            width: `${moleSize}px`,
            position: 'absolute',
            left: `${position[0]}px`,
            top: `${position[1]}px`,
            display: dis === 'none' ? '' : 'none',
          }}
          alt="Mole"
          onClick={handleMoleClick}
        />
        <h1
          className="h-100"
          style={{
            color: 'red',
            display: dis === 'none' ? 'none' : 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            fontSize: '100px',
          }}
        >
          X
        </h1>
      </div>
      <div className="d-flex justify-content-between">
        <button onClick={() => setScore(0)}>Restart</button>
        <button onClick={pauseHandler}>{paused ? 'Continue' : 'Pause'}</button>
        <h2 className="m-0 p-0 ms-3" style={{ display: 'flex', alignItems: 'end', color: 'white' }}>
          Score: {score}
        </h2>
      </div>
    </div>
  );
}

export default Falling_Boxes;
