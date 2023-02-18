import { useState } from "react";

export default function Board() {
  const [red, setRed] = useState("");
  const [blue, setBlue] = useState("");
  const numberOfColumns = 7;
  const numberOfRows = 6;

  let columns = [];
  let rows = [];

  function makeBoard() {
    columns = Array.from({ length: numberOfColumns }, () =>
      new Array(numberOfRows).fill(null)
    );
    console.log(columns);
  }
  makeBoard();

  function handleClick(e) {
    console.log(e.target.id );
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
              onClick={handleClick}
            >
            
            </div>
            <div key={columnIndex} className="column">
              {column.map((cell, rowIndex) => (
                <div key={rowIndex} className="cell"></div>
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

