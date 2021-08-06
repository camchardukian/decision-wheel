import React from "react";
import "./styles.scss";
const Wheel = ({ options = [] }) => {
  return (
    <div className="wheel">
      <div className="wheel-options">
        {options.map(optionName => {
          return <div className="wheel-single-option">{optionName}</div>;
        })}
      </div>
    </div>
  );
};

export default Wheel;
