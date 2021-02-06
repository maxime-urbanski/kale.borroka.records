import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "bootswatch/dist/lux/bootstrap.min.css";

import "./i18n";
import App from "./App";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
