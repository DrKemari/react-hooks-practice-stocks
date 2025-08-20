import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onUpdate }) {
  function handleClick(stock) {
    const updatedStock = { ...stock, portfolio: true };
    onUpdate(stock.id, updatedStock);
  }

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock
          key={stock.id}
          {...stock}
          handleClick={() => handleClick(stock)}
        />
      ))}
    </div>
  );
}

export default StockContainer;
