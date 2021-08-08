import React from "react";
import "./styles.scss";
const Wheel = ({ options = [] }) => {
  return (
    <div className="wheel">
      {options.map((optionName, index) => {
        const degreesToRotate = (360 / options.length) * index;
        const degreesToSkew = 90 - 360 / options.length;
        return (
          <div
            className="wheel-single-option"
            style={{
              transform: `rotate(${degreesToRotate}deg) skewY(${degreesToSkew *
                -1}deg)`
            }}
          >
            <div
              className="wheel-single-option-text"
              style={{
                transform: `rotate(${360 /
                  options.length /
                  2}deg) skewY(${degreesToSkew}deg)`,
                paddingTop: `${
                  12 * options.length < 110 ? 12 * options.length : 110
                }px`
              }}
            >
              {optionName}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Wheel;
