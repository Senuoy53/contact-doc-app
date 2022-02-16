import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Toastify css link
import "react-toastify/dist/ReactToastify.css";
// Global state
import { Provider } from "react-redux";
import ourStore from "./store";

ReactDOM.render(
  <Provider store={ourStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
