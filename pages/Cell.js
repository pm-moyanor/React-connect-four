
export default function Cell ({ handleClick, columnIndex, rowIndex, cell }) {
    return (
      <div
        className={`cell ${cell === 1 ? 'player1' : cell === 2 ? 'player2' : ''}`}
        onClick={() => handleClick(columnIndex)}
      ></div>
    );
  };