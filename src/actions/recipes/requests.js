import axios from "axios";

export const postNewRecipe = (data) => {
  return axios.post("https://local.recipe.com:5000/recipes", data);
};

export const fetchAllRecipes = () => {
  return axios.get("https://local.recipe.com:5000/feed");
};
