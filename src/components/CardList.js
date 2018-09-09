import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 1px solid white;
  border-radius: 2%;
  padding: 1vh 1vw;
  margin: 2vh 0;
  width: 90%;
`

const Cards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const Card = styled.div`
  height: 250px;
  min-width: 35%;
  border: 1px solid white;
  @media screen and (min-width:1000px) {
    min-width: 22%;
  }
  @media screen and (min-width:1600px) {
    min-width: 10%;
  }
`

class CardList extends Component {
  render() {
    const { cards } = this.props

    return (
      <Container>
        <h1>Card List</h1>
        <Cards>
          {
            cards.map((item, index) => {
              return <Card key={`${item.text}-${index}`}>{item.emoji}</Card>
            })
          }
        </Cards>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards }
}

export default connect(mapStateToProps)(CardList)