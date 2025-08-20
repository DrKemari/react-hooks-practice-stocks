import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer() {
const[stocks, setStocks]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3001/stocks")
    .then((res)=>res.json())
    .then((data)=>setStocks(data))
    
    },[])

    function onclickdiv(id,stock){
      alert(`Clicked`);
      const updatedStock = { ...stock, portfolio: true }
      fetch(`http://localhost:3001/stocks/${id}`,{
        method:"PATCH",
        headers:{ "Content-Type": "application/json" },
        body:JSON.stringify(updatedStock)
      })
      .then((res) => res.json())
      .then((newStock) => {
        setStocks((prevStocks) =>
          prevStocks.map((s) =>
            s.id === newStock.id ? newStock : s
          )
        );
      });
    }
    // function onclickdiv(stock){
    //   alert(`Clicked`);
    //   fetch("http://localhost:3001/stocks/",{
    //     method:"POST",
    //     headers:{ "Content-Type": "application/json" },
    //     body:JSON.stringify(stock)
    //   })
    //   .then((res)=>res.json())
    //   .then(newstock)

    // }


  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock)=>
        <Stock
        key={stock.id}
        id={stock.id}
        name={stock.name}
        type={stock.type}
        price={stock.price}
        handleClick={() => onclickdiv(stock.id, stock)} // ✅ pass stock + id
      />)}
    </div>
  );
}

export default StockContainer;
