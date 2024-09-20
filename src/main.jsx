import React from "react";
import ReactDOM from "react-dom/client";
//import HealthyFoodApp from "./healthy food app/healthyFoodApp.jsx";
//import Calculator from "./calculator app/calculator.jsx";
import TodoApp from "./todo app/todoApp.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*  <Calculator /> */}
    {/*  <HealthyFoodApp></HealthyFoodApp> */}

    <TodoApp />
  </React.StrictMode>
);
