import React from "react";
import ReactDOM from "react-dom/client";
//import HealthyFoodApp from "./healthy food app/healthyFoodApp.jsx";
//import Calculator from "./calculator app/calculator.jsx";
//import TodoApp from "./todo app/todoApp.jsx";
import SocialMediaApp from "./social media app/socialMediaApp.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import NewTodoApp from "./new todo app/newTodoApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*  <Calculator /> */}
    {/*  <HealthyFoodApp></HealthyFoodApp> */}
    {/* <TodoApp /> */}
    {/* <SocialMediaApp /> */}
    <NewTodoApp></NewTodoApp>
  </React.StrictMode>
);
