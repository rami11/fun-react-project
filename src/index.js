import React from "react";
import ReactDOM from "react-dom";
import App from "./ui/core/App";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>{" "}
  </Provider>,
  document.getElementById("root")
);
