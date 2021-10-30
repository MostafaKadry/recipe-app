import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Recipe from "./recipes";

let App = () => {
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const App_ID = "fd66710f",
    App_Key = "b730ff582098b26929d3ced30bdb1a62	",
    ExReq = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${App_ID}&app_key=${App_Key}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const res = await fetch(ExReq);
    const data = await res.json();
    setRecipe(data.hits);
  };
  const upDataSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (search === "") {
      console.log("no");
    } else {
      setQuery(search);
    }
  };
  return (
    <div className="App">
      <div className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="What is recipe you need to query for ? ..."
          onChange={upDataSearch}
        />
        <button className="searchBtn" onClick={getSearch}>
          Query
        </button>
      </div>
      <div className="recipes-box">
        {recipes.map((recipe) => (
          <Recipe
            key={Math.random()}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
