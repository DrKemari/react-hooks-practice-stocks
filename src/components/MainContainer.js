import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data))
      .catch((err) => console.error("Error fetching stocks:", err));
  }, []);

  function updateStock(id, updatedStock) {
    fetch(`http://localhost:3001/stocks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedStock),
    })
      .then((res) => res.json())
      .then((newStock) => {
        setStocks((prevStocks) =>
          prevStocks.map((s) => (s.id === newStock.id ? newStock : s))
        );
      });
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onUpdate={updateStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
