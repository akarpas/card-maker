import React, { Component } from "react";
import Title from './Title'
import CardEditor from './CardEditor'
import CardTools from './CardTools'
import CardList from './CardList'

export default class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <CardEditor />
        <CardTools />
        <CardList />
      </div>
    );
  }
}
