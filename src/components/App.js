import React, { Component } from "react";
import Title from './Title'
import CardMaker from './CardMaker'
import CardTools from './CardTools'
import CardList from './CardList'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1vh 1vw;
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
      </Wrapper>
    );
  }
}
