import { StoreContextProvider } from '@context';
import React from 'react';
import { HeaderProvider } from 'src/utils';
import AppRouters from './app';
import { ApolloProvider } from '@apollo/client'
import { client } from '@config';

interface AppProps {

}

const App: React.FC<AppProps> = () => {

  return (
    <ApolloProvider client={client}>
      <StoreContextProvider>
        <HeaderProvider>
          <AppRouters />
        </HeaderProvider>
      </StoreContextProvider>
    </ApolloProvider>
  );
}

export default App;