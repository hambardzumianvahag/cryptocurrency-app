import React from "react";

export const Input = (props) => {
  return (
    <div className="input">
      <input
        type="text"
        onChange={(e) => props.setResult(e.target.value)}
        placeholder="Provide the coin name"
      />
    </div>
  );
};
