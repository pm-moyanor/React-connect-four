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
  return (
    <>
      <h2>Connect Four</h2>
      <div className="board">
        {columns.map((column, columnIndex) => (
          <div className="col-button-box">
            <div className="button">button</div>
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
