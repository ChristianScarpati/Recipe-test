import { Box, Button, Checkbox, Select, Stack } from "@chakra-ui/react";
import { useState } from "react";

interface FilterProps {
  onFilterChange: (filter: string) => void;
  filters: {
    cuisine: string;
    ingredient: string;
    diet: string;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    vegetarian: boolean;
  };
}

const Filter = ({ onFilterChange, filters }: FilterProps) => {
  const [cuisine, setCuisine] = useState<string>(filters.cuisine || "");
  const [ingredient, setIngredient] = useState<string>(filters.ingredient || "");
  const [diet, setDiet] = useState<string>(filters.diet || "");
  const [vegan, setVegan] = useState<boolean>(filters.vegan || false);
  const [glutenFree, setGlutenFree] = useState<boolean>(filters.glutenFree || false);
  const [dairyFree, setDairyFree] = useState<boolean>(filters.dairyFree || false);
  const [vegetarian, setVegetarian] = useState<boolean>(filters.vegetarian || false);

  const handleCuisineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCuisine(event.target.value);
  };

  const handleIngredientChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIngredient(event.target.value);
  };

  const handleDietChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDiet(event.target.value);
  };

  const applyFilters = (event: React.FormEvent) => {
    event.preventDefault();
    onFilterChange({
      cuisine,
      ingredient,
      diet,
      vegan,
      glutenFree,
      dairyFree,
      vegetarian,
    });
  };

  return (
    <Box as='form' mb='4' onSubmit={applyFilters}>
      <Select
        placeholder='Select type of cuisine'
        value={cuisine}
        onChange={handleCuisineChange}
        mb={2}
      >
        <option value='italian'>Italian</option>
        <option value='Mediterranean'>Mediterranean</option>
        <option value='European'>European</option>
        <option value='chinese'>Chinese</option>
        <option value='mexican'>Mexican</option>
        <option value='american'>American</option>
        <option value='indian'>India</option>
      </Select>
      <Select
        placeholder='Choose main ingredient'
        value={ingredient}
        onChange={handleIngredientChange}
        mb={2}
      >
        <option value='chicken'>Chicken</option>
        <option value='beef'>Beef</option>
        <option value='pork'>Pork</option>
        <option value='vegetarian'>Vegetarian</option>
      </Select>
      <Select placeholder='Choose the diet' value={diet} onChange={handleDietChange} mb={2}>
        <option value='gluten free'>Gluten Free</option>
        <option value='ketogenic'>Cetogénica</option>
        <option value='vegetarian'>Vegetarian</option>
        <option value='vegan'>Vegan</option>
      </Select>
      <Stack spacing={2} direction='column'>
        <Checkbox isChecked={vegetarian} onChange={() => setVegetarian(!vegetarian)}>
          Vegetarian
        </Checkbox>
        <Checkbox isChecked={vegan} onChange={() => setVegan(!vegan)}>
          Vegan
        </Checkbox>
        <Checkbox isChecked={glutenFree} onChange={() => setGlutenFree(!glutenFree)}>
          Gluten Free
        </Checkbox>
        <Checkbox isChecked={dairyFree} onChange={() => setDairyFree(!dairyFree)}>
        dairyFree
        </Checkbox>
        <Button type='submit' mt={4}>
          Apply filters
        </Button>
      </Stack>
    </Box>
  );
};

export default Filter;
