// to import from on folder outside of the current working directory
//import css from "../calculator.module.css";

import css from "./Display.module.css";
const Display = ({ inputValue }) => {
  return (
    <input className={css.display} type="text" value={inputValue} readOnly />
  );
};

export default Display;
