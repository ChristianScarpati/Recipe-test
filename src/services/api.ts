import { NUMBER_OF_RECIPES } from "../constants";
import { Filters } from "../interfaces";

// ! API KEY HERE, JUST FOR DEMO PURPOSES, DO NOT USE IN PRODUCTION, USE .ENV FILE
const API_KEY = '16ad1071a7d04d42879a4fd9e873f70c';
const API_URL = 'https://api.spoonacular.com/recipes';

const getRecipeInformation = async (id: number) => {
    try {
        const response = await fetch(`${API_URL}/${id}/information?apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Failed to fetch recipe information:', error);
        throw error;
    }

}

export const getRandomRecipes = async () => {
    try {
        const response = await fetch(`${API_URL}/random?number=${NUMBER_OF_RECIPES}&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return data?.recipes;
    } catch (error) {
        console.error('Failed to fetch random recipes:', error);
        throw error;
    }
};

export const getRecipesByCriteria = async (filters: Filters) => {
    const { cuisine, ingredient, diet, vegan, glutenFree, dairyFree, vegetarian } = filters;

    const params = new URLSearchParams({ apiKey: API_KEY });

    if (cuisine) params.append('cuisine', cuisine);
    if (ingredient) params.append('ingredient', ingredient);

    // diets
    const diets = [];
    if (diet) diets.push(diet);
    if (vegan) diets.push('vegan');
    if (vegetarian) diets.push('vegetarian');
    if (diets.length > 0) params.append('diet', diets.join(','));

    // intolerances
    const intolerances = [];

    if (glutenFree) intolerances.push('gluten');
    if (dairyFree) intolerances.push('dairy');
    if (intolerances.length > 0) params.append('intolerances', intolerances.join(','));

    const newUrlbyFilters = `${API_URL}/complexSearch?${params.toString()}`;

    try {
        const response = await fetch(newUrlbyFilters);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const detailedRecipes = await Promise.all(data.results.map(async (recipe: { id: number }) => {
            return await getRecipeInformation(recipe.id);
        }));

        return detailedRecipes;
    } catch (error) {
        console.error('Failed to fetch recipes by criteria:', error);
        throw error;
    }

}
