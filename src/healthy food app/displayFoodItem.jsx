import css from "./displayFoodItem.module.css";
const Display = ({ displayHandler }) => {
  return (
    <input
      className={css.displayInput}
      type="text"
      placeholder="enter food item name"
      onKeyDown={displayHandler}
    />
  );
};
export default Display;
