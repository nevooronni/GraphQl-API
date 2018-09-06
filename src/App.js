import React, { Component } from 'react';
import logo from './logo.svg';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';

const client = new ApolloClient({
  uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app</h2>
    </div>
  </ApolloProvider>
);

export default App;
