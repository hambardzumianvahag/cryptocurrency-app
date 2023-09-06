import React from "react";

export const Table = (props) => {
  const coins = props.coins;
  const result = props.result.toLowerCase();
  const filteredCoins = result
    ? coins.filter((item) => item.name.toLowerCase().includes(result))
    : coins;
  return (
    <div>
      {filteredCoins.map((item) => {
        return (
          <div className="table" key={item.id}>
            <div className="each-item">
              <div className="name">
                <img src={item.image} alt="" className="logo" />
                <h3>{item.name}</h3>
              </div>
              <div>
                <h4>Rs.{item.current_price}</h4>
              </div>
              <div>
                <h4
                  style={{
                    color: item.market_cap_change_percentage_24h
                      .toString()
                      .includes("-")
                      ? "red"
                      : "green",
                  }}
                >
                  {item.market_cap_change_percentage_24h.toString().slice(0, 5)}
                  %
                </h4>
              </div>
              <div>
                <h4>
                  Mkt Cap: <br /> Rs. {item.market_cap}
                </h4>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
