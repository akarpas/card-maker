import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Cards, Line, CardLink } from "./style"

class CardList extends Component {
  render() {
    const { cards } = this.props
    return (
      <Container>
        <h1>Your Cards</h1>
        {cards &&
          (<Cards>
            {
              cards.slice(0).reverse().map((card, index) => {
                const cardNumber = cards.length - 1 - index
                return (
                  <CardLink to={{
                    pathname: `/card/${cardNumber}`,
                    state: {
                      card: cards[cardNumber],
                      index: cardNumber
                    }
                  }} id={cardNumber} key={`${cardNumber}-link`}>
                      <Line>{card.text}</Line>
                  </CardLink>
                )
              })
            }
          </Cards>)
        }
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards.cardList }
}

export default connect(mapStateToProps)(CardList)