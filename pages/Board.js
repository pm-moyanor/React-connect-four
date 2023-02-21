import React, { useState } from "react";
import Cell from "./Cell";

export default function Board({ handleClick, board }) {
  
    const renderBoard = () => {
    return board.map((row, rowIndex) => {
      return (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              columnIndex={colIndex}
              rowIndex={rowIndex}
              handleClick={handleClick}
              cell={cell}
            />
          ))}
        </div>
      );
    });
  };

  return <div className="board">{renderBoard()}</div>;
}

//todo

// add className for circle red, circle blue or empty
// add logic on click change state and toggle each classname?
//add function isWinner to check the four consecutive states
//add css
//add error handling
