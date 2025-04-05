import { NavBar, ItemListContainer } from "./components";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
            <NavBar />
            <ItemListContainer greeting={"Bienvenidos"} />
        </ChakraProvider>
    );
}

export default App;
