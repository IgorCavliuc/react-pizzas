import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import store from "./Redux/store";


import "./scss/app.scss";
import App from "./App";
import { Provider } from "react-redux";


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
   
  </Router>,
  document.getElementById("root")
);
