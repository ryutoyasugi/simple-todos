import React from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import TodoList from './TodoList';

const link = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjb0chcmg1udj0192nthb0bvy',
});
const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache });

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>TODOs</h1>
      <TodoList />
    </div>
  </ApolloProvider>
);

export default App;
