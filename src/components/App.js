import React, { Component } from "react";
import Title from "./Title/index"
import CardMaker from "./CardMaker/index"
import CardTools from "./CardTools/index"
import CardList from "./CardList/index"
import CardView from "./CardView/index"
import PrintView from "./PrintView/index"
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
  background-color: rgba(0,0,0,0.7);
  @media screen and (min-width:1200px) {
    height: 100vh;
  }
`

const CardContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  @media screen and (min-width:1200px) {
    flex-flow: row;
    height: auto;
  }
`
export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title />
        <CardTools />
        <CardContent>
          <CardMaker />
          <CardList />
        </CardContent>
        <Switch>
          <Route component={CardView} path="/card/:id"></Route>
          <Route component={PrintView} path="/print"></Route>
        </Switch>
      </Wrapper>
    );
  }
}
