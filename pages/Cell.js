import { useState } from "react";

export default function Cell({
  id,
  columnIndex,
  rowIndex,
  handleClick,
  move
}) {


  return (
    <div
      className="cell"
      id={id}
      onClick={() => {
        handleClick(columnIndex, rowIndex);
        
      }}
    >
      <div className={move}></div>
      {/* <div className="red-circle"> </div>
      <div className="blue-circle"></div> */}
    </div>
  );
}
