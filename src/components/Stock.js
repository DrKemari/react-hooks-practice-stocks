import React from "react";

function Stock({id,ticker,name,type,price,handleClick}) {
  return (
    <div>
      <div className="card">
        <div className="card-body"id={id} onClick={handleClick}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
