import { useState } from "react";
import ErrorMessage from "./errorMessage.jsx";
import FoodItemsList from "./foodItemList.jsx";
import Container from "./container.jsx";
import Display from "./displayFoodItem.jsx";

//import css from "./healthyFoodApp.css";
const HealthyFoodApp = () => {
  //let foodItems = ["food1", "food2", "food3", "food4", "food5", "food6"];
  let [boughtItems, setBoughtItems] = useState([]);

  const onClickHandler = (event, boughtItem) => {
    if (!boughtItems.includes(boughtItem)) {
      let newItems = [...boughtItems, boughtItem];
      setBoughtItems(() => {
        console.log("bought items", newItems);
        return newItems;
      });
    }
    console.log(boughtItem);
  };
  //let foodItems = [];
  let [foodItems, setFoodItems] = useState([]);

  const displayHandler = (event) => {
    if (event.key === "Enter") {
      let inputValue = event.target.value;
      setFoodItems(() => {
        let newList = [...foodItems, inputValue];
        event.target.value = "";
        return newList;
      });
    }
  };
  return (
    <>
      <Container>
        <h1>Healthy Food Items</h1>
        <Display displayHandler={displayHandler}></Display>
        <ErrorMessage length={foodItems.length}></ErrorMessage>
        <FoodItemsList
          foodItems={foodItems}
          onClickHandler={onClickHandler}
          boughtItems={boughtItems}
        ></FoodItemsList>
      </Container>
    </>
  );
};
export default HealthyFoodApp;
