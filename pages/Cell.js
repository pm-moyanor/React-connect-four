import { useState } from "react";

export default function Cell(rowIndex,red,blue){

    return (
        <div className="cell">
      
        <div key={rowIndex} className="empty-cell"></div>
        <div className="red-circle"></div>
        <div className="blue-circle"></div>
        </div>
       
          
    
      
    )
}
