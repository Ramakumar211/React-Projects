import css from "./calculator.module.css";
import Display from "./calculator components/Display.jsx";
import ButtonsContainer from "./calculator components/ButtonsContainer.jsx";
import { useState } from "react";
function Calculator() {
  let [inputValue, setInputValue] = useState("");

  const onClickHandler = (event, buttonClicked) => {
    if (buttonClicked === "C") {
      setInputValue("");
    } else if (buttonClicked === "=") {
      let result = eval(inputValue);
      setInputValue(result);
    } else {
      setInputValue(() => {
        let tempValue = inputValue + buttonClicked;
        return tempValue;
      });
    }
  };

  return (
    <>
      <div className={css.calculator}>
        <Display inputValue={inputValue}></Display>
        <ButtonsContainer onClickHandler={onClickHandler}></ButtonsContainer>
      </div>
    </>
  );
}
export default Calculator;
