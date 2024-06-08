import { Badge, Box, Stack, Text, Divider, Image } from "@chakra-ui/react";
import { RecipeElement } from "../interfaces/Recipe";
import parse from "html-react-parser";
import React from "react";

interface RecipeCardProps {
  recipe: RecipeElement;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  if (!recipe || !recipe.extendedIngredients) {
    return <Text>"Error: Recipe data not available"</Text>;
  }

  const summary = recipe?.summary
    ? parse(recipe.summary)
    : "No summary available";

  const instructions = recipe?.instructions
    ? parse(recipe.instructions)
    : "No instructions available";
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      overflow='auto'
      height={"50rem"}
      p='6'
      boxShadow='md'
    >
      <Box mb={5}>
        <Stack direction='row' spacing={2} flexWrap={"wrap"}>
          {recipe?.vegan && <Badge colorScheme='green'>Vegan</Badge>}
          {recipe?.glutenFree && <Badge colorScheme='blue'>Gluten Free</Badge>}
          {recipe?.dairyFree && <Badge colorScheme='red'>Dairy Free</Badge>}
          {recipe?.vegetarian && <Badge colorScheme='purple'>Vegetarian</Badge>}
        </Stack>
      </Box>

      <Image src={recipe?.image} alt={recipe.title} borderRadius='lg' />
      <Stack spacing={3} mt='4'>
        <Text fontWeight='bold' as='h2' fontSize='xl' lineHeight='tight'>
          {recipe?.title || "title"}
        </Text>
        <Text fontSize='small'>{summary}</Text>
        <Divider />
        <Text fontWeight='bold' fontSize='small'>
          Instructions:
        </Text>
        <Text fontSize='small'>{instructions}</Text>
        <Divider />
      </Stack>
    </Box>
  );
};

export default React.memo(RecipeCard) as React.FC<RecipeCardProps>;
