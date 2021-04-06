import { AuthContextProvider } from '@store';
import React from 'react';
import { HeaderProvider } from 'src/utils';
import AppRouters from './app';
import { ApolloProvider } from 'react-apollo'
import { Client } from '@tools';

interface AppProps {

}

const App: React.FC<AppProps> = () => {
  return (
    // <ApolloProvider client={Client}>
      <AuthContextProvider>
        <HeaderProvider>
          <AppRouters />
        </HeaderProvider>
      </AuthContextProvider>
    // </ApolloProvider>
  );
}

export default App;