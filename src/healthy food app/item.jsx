import css from "./items.module.css";
const Item = ({ foodItem, onClickHandler, bought }) => {
  return (
    <li
      style={{ margin: "2px 0px" }}
      className={`list-group-item ${css.button1} ${bought && "active"} `}
    >
      <span className={`${css.span1} ${css["afterPurchase"]}`}>{foodItem}</span>
      <button
        className={css.buyButton}
        onClick={(event) => {
          onClickHandler(event, foodItem);
        }}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
