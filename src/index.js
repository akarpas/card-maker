import React from "react";
import ReactDOM from "react-dom";
import Root from './Root'
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById("root"));
registerServiceWorker();
