import { useEffect } from "react";
import { useRecipes } from "../../hooks";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { RecipeCard } from "../../components";
import { RecipeElement } from "../../interfaces/Recipe";

const Home: React.FC = () => {
  const { fetchRecipes, loading, recipes } = useRecipes();
  useEffect(() => {
    fetchRecipes();
  }, []);

  const renderRecipes = () => {
    if (loading) return <Spinner />;
    if (recipes.length === 0)
      return <Text>Es gibt keine verfügbaren Rezepte .</Text>;

    return (
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4} mt={10}>
        {recipes.map((recipe, index) => {
          return <RecipeCard key={recipe?.id || index} recipe={recipe} />;
        })}
      </SimpleGrid>
    );
  };

  return <div>{renderRecipes()}</div>;
};

export default Home;
