import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks }) {
  const filtered = stocks.filter((s) => s.portfolio === true);

  return (
    <div>
      <h2>My Portfolio</h2>
      {filtered.map((stock) => (
        <Stock key={stock.id} {...stock} />
      ))}
    </div>
  );
}

export default PortfolioContainer;
