import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import booksReducer from "./reducers/booksReducer";
import themeReducer from "./reducers/themeReducer"

import ThemeWrapper from "./components/themeWrapper/ThemeWrapper"

const reducer = combineReducers({
  books: booksReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </Provider>
  </React.StrictMode>
);
