import css from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onClickHandler }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={css.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          onClick={(event) => {
            onClickHandler(event, buttonName);
          }}
          key={buttonName}
          className={css.buttons}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
