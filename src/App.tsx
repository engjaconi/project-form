import { Flex, ChakraProvider } from '@chakra-ui/react';

import { Header } from './components/Header';
import { FormRegistration } from './components/FormRegistration';
import { AppContextProvider } from './components/AppContext';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <Flex
          align={'center'}
          justify={'center'}
          padding={'20px'}
          width={'100%'}
        >
          <AppContextProvider>
            <FormRegistration />
          </AppContextProvider>
        </Flex>
      </ChakraProvider>
    </div>
  );
}

export default App;