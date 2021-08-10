import React from "react";
import "./styles.scss";
const Wheel = ({
  options = [],
  isWheelSpinning = false,
  isWheelBehindWinnerModal = false
}) => {
  if (options.length < 4) {
    options = [
      "Play basketball",
      "Go to the movies",
      "Learn more code",
      "Read a book"
    ];
  }
  return (
    <div className="wheel-container">
      <div className="pointer"></div>
      <div
        className={`wheel ${(isWheelSpinning || isWheelBehindWinnerModal) &&
          "rotating"} ${!isWheelSpinning && "stop-rotating"}`}
      >
        {options.map((optionName, index) => {
          const degreesToRotate = (360 / options.length) * index;
          const degreesToSkew = 90 - 360 / options.length;
          return (
            <div
              key={index}
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
    </div>
  );
};

export default Wheel;
