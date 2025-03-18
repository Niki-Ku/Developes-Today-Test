import { IResponse, IInfoResponse } from "../types/types";

const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_KEY;

export const getRecipes = async (
  query: string = "",
  cuisine: string = "",
  maxReadyTime: string = ""
): Promise<IResponse[] | null> => {
  let url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + apiKey;

  if (query) url += `&query=${query}`;
  if (cuisine) url += `&cuisine=${cuisine}`;
  if (maxReadyTime) url += `&maxReadyTime=${maxReadyTime}`;

  try {
    const resp = await fetch(url, {
      next: { revalidate: 60 },
    });
    if (!resp.ok) return null
    const data = await resp.json();
    return data.results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getRecipeInfo = async (id: string): Promise<IInfoResponse | null> => {
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
  try {
    const resp = await fetch(url);
    if (!resp.ok) return null
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
