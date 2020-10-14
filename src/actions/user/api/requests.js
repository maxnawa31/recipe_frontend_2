import axios from "axios";

export const fetchAllRecipes = () => {
  return axios.get("https://local.recipe.com:5000/feed");
};
