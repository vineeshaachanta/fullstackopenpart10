import React  from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';
import Main from './src/components/Main';
import createApolloOClient from './src/utils/apolloOClient';
import AuthOStorage from './src/utils/authOStorage';
import AuthOStorageContext from './src/contexts/AuthOStorageContext';

const authOStorage = new AuthOStorage();
const apolloOClient = createApolloOClient(authOStorage);

export default function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloOClient}>
        <AuthOStorageContext.Provider value={authOStorage}>
          <Main/>
        </AuthOStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
}
