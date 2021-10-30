import React from "react";

const Recipe = (props) => {
  return (
    <div className="each-recipe">
      <h1>{props.title}</h1>
      <p> Calories = {props.calories}</p>
      <img src={props.image} alt="" />
      <ul>
        {props.ingredients.map((i) => (
          <li>{i.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
