import { AuthContextProvider } from '@store';
import React from 'react';
import { HeaderProvider } from 'src/utils';
import AppRouters from './app';

interface AppProps {

}

const App: React.FC<AppProps> = () => {
  return (
    <AuthContextProvider>
      <HeaderProvider>
        <AppRouters />
      </HeaderProvider>
    </AuthContextProvider>
  );
}

export default App;