import React, { useState } from 'react';


const numRows = 6;
const numCols = 7;

const emptyBoard = () => {
  let rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array(numCols).fill(null));
  }
  return rows;
};

const ConnectFour = () => {
  const [board, setBoard] = useState(emptyBoard);
  const [player, setPlayer] = useState(1);

  const togglePlayer = () => {
    setPlayer(player === 1 ? 2 : 1);
  };

  const handleClick = (colIndex) => {
    let newBoard = [...board];
    console.log(colIndex)
    for (let i = numRows - 1; i >= 0; i--) {
      if (newBoard[i][colIndex] === null) {
        newBoard[i][colIndex] = player;
        setBoard(newBoard);
        togglePlayer();
        return;
      }
    }
  };

  const renderBoard = () => {
    return board.map((row, rowIndex) => {
      return (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${cell === 1 ? 'player1' : cell === 2 ? 'player2' : ''}`}
              onClick={() => handleClick(colIndex)}
            ></div>
          ))}
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Connect Four</h1>
      <div className="board">{renderBoard()}</div>
      <div className="player-turn">{`Player ${player}'s turn`}</div>
    </div>
  );
};

export default ConnectFour;


//todo

// add className for circle red, circle blue or empty
// add logic on click change state and toggle each classname?
//add function isWinner to check the four consecutive states
//add css
//add error handling
