

export default function Cell({ id, move, handleClick }) {
    let color = "";
    if (move === "red") {
      color = "red-circle";
    } else if (move === "blue") {
      color = "blue-circle";
    }
  
    return (
      <div className="cell" id={id} onClick={handleClick}>
        <div className={color}></div>
      </div>
    );
  }
  