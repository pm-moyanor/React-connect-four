import { useState } from "react";
import Cell from "./Cell";

export default function Board() {
  const [move, setMove] = useState("empty-cell");

  const numberOfColumns = 7;
  const numberOfRows = 6;

  let columns = [];
  let rows = [];

  function makeBoard() {
    columns = Array.from(
      { length: numberOfColumns },
      () => (rows = new Array(numberOfRows).fill(null))
    );
   
  }
  makeBoard();

  function handleClick(columnIndex, rowIndex) {
    console.log(`${columnIndex}.${rowIndex}`);
    makeMove()
  }

  function makeMove(index){
   if(move ==="empty-cell"){setMove('red')
}else if (move === "red"){
    setMove("blue")
  console.log(move)
  }
}
  return (
    <>
      <h2>Connect Four</h2>
      <div className="board">
        {columns.map((column, columnIndex) => (
          <div key={`${columnIndex}.box`} className="col-button-box">
            <div
              key={`${columnIndex}.btn`}
              id={`${columnIndex}.btn`}
              className="button"
              onClick={() => handleClick(columnIndex)}
            ></div>

            <div className="column">
              {column.map((cell, rowIndex) => (
                <div
                  style={{ color: "white" }}
                  id={`${columnIndex}.${rowIndex}`}
                  onClick={() => handleClick(columnIndex, rowIndex)}
                >
                  <Cell
                    id={`${columnIndex}.${rowIndex}`}
                    move={move}
                    rows={rows}
                    handleClick={handleClick}
                    columnIndex={columnIndex}
                    rowIndex={rowIndex}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
//todo

// add className for circle red, circle blue or empty
// add logic on click change state and toggle each classname?
//add function isWinner to check the four consecutive states
//add css
//add error handling
