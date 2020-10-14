import { fetchAllRecipes } from "./requests";

export const userGetFetchedRecipes = async () => {
  try {
    const { data } = await fetchAllRecipes();
    return data;
  } catch (err) {
    return null;
  }
};
