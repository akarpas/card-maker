import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root"
import App from "./components/App";
import {
  Route,
  BrowserRouter
} from "react-router-dom"
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route component={App} path="/">
      </Route>
    </BrowserRouter>
  </Root>,
  document.getElementById("root"));
registerServiceWorker();
