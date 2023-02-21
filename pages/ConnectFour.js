import { useState } from "react";
import Board from "./Board";

const ConnectFour = () => {
  const numRows = 6;
  const numCols = 7;

  const emptyBoard = () => {
    let rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array(numCols).fill(null));
    }
    return rows;
  };

  const [board, setBoard] = useState(emptyBoard);
  const [player, setPlayer] = useState(1);

  const togglePlayer = () => {
    setPlayer(player === 1 ? 2 : 1);
  };

  const handleClick = (colIndex) => {
    let newBoard = [...board];

    for (let i = numRows - 1; i >= 0; i--) {
      if (newBoard[i][colIndex] === null) {
        newBoard[i][colIndex] = player;
        setBoard(newBoard);
        togglePlayer();
        return;
      }
    }
  };

  return (
    <div className="main-container">
      <h1 className="main-title">Connect Four</h1>
      <div className="board-box">
        <Board handleClick={handleClick} board={board} />
      </div>
      <div className="player-turn">{`player ${player}`}</div>
    </div>
  );
};

export default ConnectFour;
