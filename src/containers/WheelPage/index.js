import React, { useState } from "react";
import Wheel from "../../components/Wheel";
import "./styles.scss";
const WheelPage = () => {
  const [wheelOptions, setWheelOptions] = useState([]);
  const [numberOfInputs, setNumberOfInputs] = useState([""]);
  const [inputFields, setInputFields] = useState([{}]);
  const [isWheelSpinning, setIsWheelSpinning] = useState(false);
  const isSubmitBtnDisabled = Object.values(inputFields).length < 4;
  const handleAddOption = e => {
    e.preventDefault();
    setNumberOfInputs(prevState => {
      return [...prevState, ""];
    });
  };
  const handleInputChange = e => {
    const target = e.target;
    const { value, name } = target;
    setInputFields(prevState => {
      return Object.assign({}, prevState, { [name]: value });
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setWheelOptions(() => {
      return Object.values(inputFields);
    });
  };
  const handleSpinWheel = () => {
    setIsWheelSpinning(true);
    window.scrollTo(0, 0);
    let randomInterval = Math.random() * 10000;
    if (randomInterval < 2500) {
      while (randomInterval < 2500) {
        randomInterval = Math.random() * 10000;
      }
    }
    setTimeout(() => {
      setIsWheelSpinning(false);
    }, randomInterval);
  };
  return (
    <div>
      <Wheel options={wheelOptions} isWheelSpinning={isWheelSpinning} />
      <form onSubmit={handleSubmit}>
        <div className="instructions-text">
          Please enter at least 4 options and then click 'update wheel' to see
          the wheel customized with your possible options.
        </div>
        {numberOfInputs.map((_, index) => {
          return (
            <input
              name={index}
              key={index}
              className="wheel-input"
              onChange={handleInputChange}
            ></input>
          );
        })}
        <div className="btns-container">
          <button
            type="button"
            className="add-option-btn"
            onClick={handleAddOption}
          >
            Add option
          </button>
          <button
            className="update-wheel-btn"
            disabled={isSubmitBtnDisabled}
            type="submit"
          >
            update wheel
          </button>
          <button
            className="spin-btn"
            disabled={isWheelSpinning}
            onClick={handleSpinWheel}
          >
            {isWheelSpinning ? "Already spinning" : "Spin!"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WheelPage;
