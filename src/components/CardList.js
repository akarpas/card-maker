import React, { Component } from "react";
import { connect } from "react-redux";

class CardList extends Component {
  render() {
    const { cards } = this.props

    return (
      <div>
        <h1>Card List</h1>
        <ul>
          {
            cards.map((item, index) => {
              return <li key={`${item.text}-${index}`}>{item.emoji}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards }
}

export default connect(mapStateToProps)(CardList)