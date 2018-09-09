import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Cards, Card, Line } from './style'

class CardList extends Component {
  render() {
    const { cards } = this.props

    return (
      <Container>
        <h1>Your Cards</h1>
        <Cards>
          {
            cards.map((item, index) => {
              return (
                <Card
                  id={index}
                  key={`${item.text}-${index}`}>
                  <Line>{item.text}</Line>
                </Card>
              )
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