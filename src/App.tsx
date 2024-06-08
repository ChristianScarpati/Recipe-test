import "./App.css";
import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import { Home } from "./pages/home";

function App() {
  return (
    <ChakraProvider>
      <Box textAlign='center' fontSize='xl'>
        <Heading mb={6}>Zufallsrezeptgenerator</Heading>
        <Home />
      </Box>
    </ChakraProvider>
  );
}

export default App;
