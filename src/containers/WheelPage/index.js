import React, { useState } from "react";
import Wheel from "../../components/Wheel";
import "./styles.scss";
const WheelPage = () => {
  const [wheelOptions, setWheelOptions] = useState([]);
  const [numberOfInputs, setNumberOfInputs] = useState([""]);
  const [inputFields, setInputFields] = useState([{}]);
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
  return (
    <div>
      <Wheel options={wheelOptions} />
      <form onSubmit={handleSubmit}>
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
        <button
          type="button"
          className="add-option-btn"
          onClick={handleAddOption}
        >
          Add option
        </button>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default WheelPage;
