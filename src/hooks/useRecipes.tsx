import { useCallback, useState } from "react";
import { Recipe } from "../interfaces/Recipe";
import { getRandomRecipes, getRecipesByCriteria } from "../services/api";
import { useToast } from "@chakra-ui/react";
import { Filters } from "../interfaces";

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const toast = useToast();

  const fetchRecipes = useCallback(async () => {
    setLoading(true);
    try {
      const getRecipes = await getRandomRecipes();
      setRecipes(getRecipes);
    } catch (error) {
      toast({
        title: "Failed to fetch random recipes",
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const fetchFilteredRecipes = async (filters: Filters) => {
    setLoading(true);
    try {
      const getRecipes = await getRecipesByCriteria(filters);
      setRecipes(getRecipes);
    } catch (error) {
      toast({
        title: "Failed to fetch random recipes",
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return { recipes, loading, fetchRecipes, fetchFilteredRecipes };
};

export default useRecipes;
