import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { Provider } from "react-redux/es/exports";
import { store } from "./library/redux/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",

  cache: new InMemoryCache(),
});
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
