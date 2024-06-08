import { useEffect, useState } from "react";
import { useRecipes } from "../../hooks";
import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Filter, RecipeCard } from "../../components";
import { Filters } from "../../interfaces";

const Home: React.FC = () => {
  const { fetchRecipes, loading, recipes, fetchFilteredRecipes } = useRecipes();

  const [filters, setFilters] = useState({
    cuisine: "",
    ingredient: "",
    diet: "",
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    vegetarian: false,
  });

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
    fetchFilteredRecipes(newFilters);
  };

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  const renderRecipes = () => {
    if (recipes.length === 0) return <Text>Es gibt keine verfügbaren Rezepte .</Text>;

    return (
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4} mt={10}>
        {recipes.map((recipe, index) => {
          return <RecipeCard key={recipe?.id || index} recipe={recipe} />;
        })}
      </SimpleGrid>
    );
  };

  if (loading) return <Spinner />;
  return (
    <Box>
      <Button onClick={fetchRecipes} mb={4} isLoading={loading}>
        Rezepte erstellen
      </Button>
      <Filter onFilterChange={handleFilterChange} filters={filters} />
      {renderRecipes()}
    </Box>
  );
};

export default Home;
