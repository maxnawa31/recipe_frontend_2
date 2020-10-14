import { postNewRecipe, fetchAllRecipes } from "../requests";

export const recipesSubmitRecipe = (data) => async (dispatch, getState) => {
  try {
    const postData = await postNewRecipe(data);
    console.log(postData);
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const recipesGetFetchedRecipes = async (dispatch, getState) => {
  try {
    const { data } = await fetchAllRecipes();
    return { type: "FETCH", data };
  } catch (err) {
    console.log(err);
    return null;
  }
};
