import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store";
import {Provider} from "react-redux";
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import { onError } from '@apollo/client/link/error';

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/gql',
    credentials: 'same-origin' //include for different domain
});

/*const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000/subscriptions',
    options: {
        reconnect: true
    }
});*/

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('auth-token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const logoutLink = onError(({ networkError }) => {
    if (networkError.statusCode === 401) window.localStorage.removeItem('auth-token');
});

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink).concat(logoutLink),
    cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ApolloProvider client={apolloClient}>
            <App />
          </ApolloProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);