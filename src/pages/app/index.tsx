import { StoreContextProvider } from '@context';
import React, { useEffect } from 'react';
import { HeaderProvider } from 'src/utils';
import AppRouters from './app';
import { ApolloProvider } from '@apollo/client'
import { client } from '@config';
import { io } from 'socket.io-client'
import { Button } from 'antd'

io('http://localhost:4200')
// socket.connect()


interface AppProps {

}

const App: React.FC<AppProps> = () => {

  useEffect(() => {
    // socket.on("connect", () => {
    //   console.log(socket.id); 
    // });
    // console.log(11);
    
  }, [])

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