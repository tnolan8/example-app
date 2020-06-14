import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

import introspectionResult from "./introspection-result";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
});

const cache = new InMemoryCache({
  fragmentMatcher,
});

const link = createHttpLink({
  uri:
    "http://localhost:3000/graphql"
});

const client = new ApolloClient({
  link,
  cache,
  request: (operation) => {
    operation.setContext((context) => ({
      headers: {
        ...context.headers,
      },
    }));
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />,
  </ApolloProvider>,
  document.getElementById("root")
);
