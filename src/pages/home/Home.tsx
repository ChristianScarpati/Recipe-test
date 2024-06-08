import { useEffect } from "react";
import { useRecipes } from "../../hooks";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";

const Home: React.FC = () => {
  const { fetchRecipes, loading, recipes } = useRecipes();
  useEffect(() => {
    fetchRecipes();
    console.log("hola");
  }, []);

  console.log("recipes: ", recipes);
  const renderRecipes = () => {
    if (loading) return <Spinner />;
    if (recipes.length === 0)
      return <Text>Es gibt keine verfügbaren Rezepte .</Text>;

    return (
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4} mt={10} >
        {recipes.map((recipe) => {
          console.log("recipeeeee: ", recipe);
          return (
            <div key={recipe?.id}>
              <img src={recipe?.image} alt={recipe?.title} />
              <Text>{recipe?.title}</Text>
            </div>
          );
        })}
      </SimpleGrid>
    );
  };

  return (
    <div>
      <h1>Zufallsrezeptgenerator</h1>
      {renderRecipes()}
    </div>
  );
};

export default Home;
