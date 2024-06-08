import { useState } from "react";
import { Recipe } from "../interfaces/Recipe";
import { getRandomRecipes } from "../services/api";
import { useToast } from "@chakra-ui/react";

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const toast = useToast();

  const fetchRecipes = async () => {
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
  };

  return { recipes, loading, fetchRecipes };
};

export default useRecipes;
