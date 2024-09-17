import React, { useCallback, useEffect, useState } from 'react';

function TicTacToe() {
  const [symbol, setSymbol] = useState('X');
  const [tileArray, setTileArray] = useState([
    "Click to Play", "Click to Play", "Click to Play",
    "Click to Play", "Click to Play", "Click to Play",
    "Click to Play", "Click to Play", "Click to Play",
  ]);
  const [dis, setDis] = useState(""); // State to control display
  const [winner, setWinner] = useState(null); // State to track the winner
  const [cpuTurn, setCpuTurn] = useState(false);
  const [message, setMessage] = useState('CPU is thinking!');

  const clickHandler = useCallback((index) => {
    if (!cpuTurn) {
      const newValues = [...tileArray];
      if (newValues[index] === 'Click to Play' && !winner) {
        newValues[index] = symbol;
        setTileArray(newValues);
        setSymbol(prevSymbol => (prevSymbol === 'X' ? 'O' : 'X'));
      }
    }
  }, [cpuTurn, symbol, tileArray, winner]);
  
  const makeAMove = useCallback(() => {
    if (tileArray[4] === 'Click to Play') {
      return 4;
    }

    const corners = [0, 2, 6, 8];
    for (let corner of corners) {
      if (tileArray[corner] === 'Click to Play') {
        return corner;
      }
    }

    const edges = [1, 3, 5, 7];
    for (let edge of edges) {
      if (tileArray[edge] === 'Click to Play') {
        return edge;
      }
    }

    return null;
  }, [tileArray]);

  const checkAlmostWinning = useCallback((symbolToCheck) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6],            // Diagonals
    ];

    let almostDonePatterns = [];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      let filledCount = 0;
      let emptySpot = null;

      if (tileArray[a] === symbolToCheck) filledCount++;
      else if (tileArray[a] === 'Click to Play') emptySpot = a;
      if (tileArray[b] === symbolToCheck) filledCount++;
      else if (tileArray[b] === 'Click to Play') emptySpot = b;
      if (tileArray[c] === symbolToCheck) filledCount++;
      else if (tileArray[c] === 'Click to Play') emptySpot = c;

      if (filledCount === 2 && emptySpot !== null) {
        almostDonePatterns.push(emptySpot);
      }
    }

    if (almostDonePatterns.length > 1) {
      const randomIndex = Math.floor(Math.random() * almostDonePatterns.length);
      return almostDonePatterns[randomIndex];
    } else if (almostDonePatterns.length === 1) {
      return almostDonePatterns[0];
    }

    return null;
  }, [tileArray]);

  const winChecker = useCallback(() => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6],            // Diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (tileArray[a] !== 'Click to Play' && tileArray[a] === tileArray[b] && tileArray[b] === tileArray[c]) {
        setDis("none"); // Hide the game grid
        setWinner(tileArray[a]); // Set the winner (either 'X' or 'O')
        setMessage(""); // Clear CPU thinking message
        return;
      }
    }

    if (!winner && symbol === 'O') {
      setCpuTurn(true);
      setTimeout(() => {
        const defenseMove = checkAlmostWinning('X');
        if (defenseMove !== null) {
          setTileArray(prevArray => {
            const newArray = [...prevArray];
            newArray[defenseMove] = 'O';
            return newArray;
          });
          setMessage(`CPU blocks the player at ${defenseMove}`);
          setCpuTurn(false);
          setSymbol('X');
        } else {
          const cpuWinMove = checkAlmostWinning('O');
          if (cpuWinMove !== null) {
            setTileArray(prevArray => {
              const newArray = [...prevArray];
              newArray[cpuWinMove] = 'O';
              return newArray;
            });
            setMessage(`CPU takes the winning move at ${cpuWinMove}`);
            setCpuTurn(false);
            setSymbol('X');
          } else {
            const move = makeAMove();
            if (move !== null) {
              setTileArray(prevArray => {
                const newArray = [...prevArray];
                newArray[move] = 'O';
                return newArray;
              });
              setMessage(`CPU takes the smart move at ${move}`);
              setCpuTurn(false);
              setSymbol('X');
            } else {
              setMessage('No more moves found.');
            }
          }
        }
      }, Math.random() * (1500 - 500 + 1) + 500); // Random delay between 500ms and 1500ms
    }
  }, [tileArray, winner, symbol, checkAlmostWinning, makeAMove]);


  const handleRestart = useCallback(() => {
    setTileArray([
      "Click to Play", "Click to Play", "Click to Play",
      "Click to Play", "Click to Play", "Click to Play",
      "Click to Play", "Click to Play", "Click to Play",
    ]);
    setSymbol('X');
    setDis("");
    setWinner(null);
    setMessage("CPU is Thinking!");
    setCpuTurn(false);
  }, []);

  useEffect(() => {
    winChecker(); // Check for a winner whenever the tileArray changes
  }, [tileArray, winChecker]);

  return (
    <div style={{ color: 'white' }}>
      <div className='row' style={{ display: dis }}>
        {tileArray.slice(0, 3).map((value, index) => (
          <div key={index} className='col-4 d-flex justify-content-center align-items-center text-lg-center' style={{ border: '2px white solid', borderRadius: '10px' }} onClick={() => clickHandler(index)}>
            <h1 style={{ fontSize: value !== "Click to Play" ? '4vw' : '2vw' }}>{value}</h1>
          </div>
        ))}
      </div>
      <div className='row' style={{ display: dis }}>
        {tileArray.slice(3, 6).map((value, index) => (
          <div key={index + 3} className='col-4 d-flex justify-content-center align-items-center text-lg-center' style={{ border: '2px white solid', borderRadius: '10px' }} onClick={() => clickHandler(index + 3)}>
            <h1 style={{ fontSize: value !== "Click to Play" ? '4vw' : '2vw' }}>{value}</h1>
          </div>
        ))}
      </div>
      <div className='row' style={{ display: dis }}>
        {tileArray.slice(6, 9).map((value, index) => (
          <div key={index + 6} className='col-4 d-flex justify-content-center align-items-center text-lg-center' style={{ border: '2px white solid', borderRadius: '10px' }} onClick={() => clickHandler(index + 6)}>
            <h1 style={{ fontSize: value !== "Click to Play" ? '4vw' : '2vw' }}>{value}</h1>
          </div>
        ))}
      </div>

      {winner && <h1>{winner === 'X' ? 'Player 1 (X)' : 'CPU'} has won!</h1>}
      <h1 className='d-flex justify-content-center mt-4'>{!winner && cpuTurn ? message : 'Player (X) turn'}</h1>

      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default TicTacToe;
