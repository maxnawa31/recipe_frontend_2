import { userSetRecipes } from "./state/actionCreators";
import { userGetFetchedRecipes } from "./api/";

export const syncUserRecipes = () => async (dispatch, getState) => {
  const recipes = await userGetFetchedRecipes();
  console.log(recipes);
  if (recipes) {
    dispatch(userSetRecipes(recipes));
  }
};
