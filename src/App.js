import React, { Component } from "react";
import { Provider } from "react-redux";

import reducers from "./app/reducers";

export default class App extends Component {
  render() {
    return (
      <Provider store={reducers}>
        <h1>Welcome to Colvin React Coding Challenge</h1>
      </Provider>
    );
  }
}
