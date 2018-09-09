import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store.js";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Welcome to Colvin React Coding Challenge</h1>
      </Provider>
    );
  }
}
