import { Recipe } from "../interfaces/Recipe";

// ! API KEY HERE, JUST FOR DEMO PURPOSES, DO NOT USE IN PRODUCTION, USE .ENV FILE
const API_KEY = 'fd28d0db263c41378addefe6cf9c4b4c';
// const API_KEY = 'dcfd6394b9a848d1a66efd532f0cdd2b';
const API_URL = 'https://api.spoonacular.com/recipes';
const NUMBER_OF_RECIPES = 10;

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
