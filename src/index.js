import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.less";
import AppContainer from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "antd/dist/antd.less";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
