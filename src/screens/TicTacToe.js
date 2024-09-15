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
  const [message, setMessage] = useState('CPU is thinking!')

  const clickHandler = (index) => {

    if (!cpuTurn) {
      const newValues = [...tileArray];
      if (newValues[index] === 'Click to Play' && !winner) {
        newValues[index] = symbol;
        setTileArray(newValues);
        setSymbol(prevSymbol => (prevSymbol === 'X' ? 'O' : 'X'));
      }
    }
  };

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
        setMessage("")
        return;
      }
    }

    if (!winner && symbol === 'O') {
      setCpuTurn(true)

      setTimeout(() => {

        const defenseMove = checkAlmostWinning('X');

        if (defenseMove !== null) {
          // Block the player by taking the defense move
          setTileArray(prevArray => {
            const newArray = [...prevArray];
            newArray[defenseMove] = 'O';
            return newArray;
          });
          setMessage('CPU blocks the player at', defenseMove);
          setCpuTurn(false)
          setSymbol('X')
        } else {
          // Now check if the CPU itself has any almost winning moves
          const cpuWinMove = checkAlmostWinning('O');
          console.log(cpuWinMove)

          if (cpuWinMove !== null) {
            // CPU has a winning move, take it to win the game
            setTileArray(prevArray => {
              const newArray = [...prevArray];
              newArray[cpuWinMove] = 'O';
              return newArray;
            });
            setMessage(`CPU takes the winning move at ${cpuWinMove}`);
            setCpuTurn(false)
            setSymbol('X')
          } else {
            // If no immediate winning move, make a random move
            const move = makeAMove(); // Assuming 'O' is the CPU's symbol
            if (move !== null) {
              setTileArray(prevArray => {
                const newArray = [...prevArray];
                newArray[move] = 'O';
                return newArray;
              });
              setMessage(`CPU takes the smart move at ${move}`);
              setCpuTurn(false)
              setSymbol('X')
            } else {
              setMessage('No more moves found.');
            }

          }
        }
      }, Math.random() * (1500 - 500 + 1) + 500)
    }
  });

  const makeAMove = () => {
    if (tileArray[4] === 'Click to Play') {
      return 4;
    }

    // 4. Take a corner if available
    const corners = [0, 2, 6, 8];
    for (let corner of corners) {
      if (tileArray[corner] === 'Click to Play') {
        return corner;
      }
    }

    // 5. Take an edge if available
    const edges = [1, 3, 5, 7];
    for (let edge of edges) {
      if (tileArray[edge] === 'Click to Play') {
        return edge;
      }
    }

    // If no move is found (shouldn't reach here normally), return null
    return null;
  }

  const checkAlmostWinning = (symbolToCheck) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6],            // Diagonals
    ];

    let almostDonePatterns = [];

    // Loop through each win pattern
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      let filledCount = 0;
      let emptySpot = null;

      // Check how many spots are filled by `symbolToCheck` and track the empty spot
      if (tileArray[a] === symbolToCheck) filledCount++;
      else if (tileArray[a] === 'Click to Play') emptySpot = a;
      if (tileArray[b] === symbolToCheck) filledCount++;
      else if (tileArray[b] === 'Click to Play') emptySpot = b;
      if (tileArray[c] === symbolToCheck) filledCount++;
      else if (tileArray[c] === 'Click to Play') emptySpot = c;

      // If two spots are filled and one is empty, this is an "almost done" pattern
      if (filledCount === 2 && emptySpot !== null) {
        almostDonePatterns.push(emptySpot);
      }
    }

    // Handling the cases:
    if (almostDonePatterns.length > 1) {
      // Multiple patterns where the opponent can win, output "yikes" and pick one spot to block
      console.log('yikes');
      const randomIndex = Math.floor(Math.random() * almostDonePatterns.length);
      return almostDonePatterns[randomIndex]; // Return any of the empty spots
    } else if (almostDonePatterns.length === 1) {
      // One pattern where the opponent can win, output "defense" and block the last spot
      console.log('defense');
      return almostDonePatterns[0]; // Return the empty spot to block
    }

    // If no "almost done" pattern is found, return null
    return null;
  };

  const handleRestart = () => {
    setTileArray([
      "Click to Play", "Click to Play", "Click to Play",
      "Click to Play", "Click to Play", "Click to Play",
      "Click to Play", "Click to Play", "Click to Play",
    ]);
    setSymbol('X');  // Reset to 'X'
    setDis("");      // Show the grid again
    setWinner(null); // Reset the winner
    setMessage("CPU is Thinking!")
    setCpuTurn(false)
  };

  useEffect(() => {
    winChecker(); // Check for a winner whenever the tileArray changes
  }, [tileArray]);

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

      {/* Display winner message */}
      {winner && <h1>{winner === 'X' ? 'Player 1 (X)' : 'CPU'} has won!</h1>}
      <h1 className='d-flex justify-content-center mt-4'>{!winner && cpuTurn ? message : 'Player (X) turn'}</h1>

      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default TicTacToe;
