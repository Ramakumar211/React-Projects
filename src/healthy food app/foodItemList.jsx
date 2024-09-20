import Item from "./item.jsx";
const FoodItemsList = ({ foodItems, onClickHandler, boughtItems }) => {
  return (
    <>
      <ul className="list-group">
        {foodItems.map((foodItem) => (
          <Item
            key={foodItem}
            foodItem={foodItem}
            onClickHandler={onClickHandler}
            bought={boughtItems.includes(foodItem)}
            className="list-group-item"
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodItemsList;
