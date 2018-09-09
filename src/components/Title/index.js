import React, { Component } from "react";
import styled from 'styled-components'

const Header = styled.header`
  text-align: center;
`

export default class Title extends Component {
  render() {
    return (
      <Header>
        <h1>The Card Game Maker</h1>
      </Header>
    );
  }
}
