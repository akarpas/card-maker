import React, { Component } from "react";
import Title from "./Title/index"
import CardMaker from "./CardMaker/index"
import CardTools from "./CardTools/index"
import CardList from "./CardList/index"
import CardView from "./CardView/index"
import styled from "styled-components"
import {
  Switch,
  Route
} from "react-router-dom"

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  background-color: black;
`
export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title />
        <CardTools />
        <CardMaker />
        <CardList />
        <Switch>
          <Route component={CardView} path="/card/:id"></Route>
        </Switch>
      </Wrapper>
    );
  }
}
