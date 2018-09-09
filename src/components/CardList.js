import React, { Component } from "react";
import { connect } from "react-redux";

class CardList extends Component {
  render() {
    return (
      <div>
        <h1>Card List</h1>
        <ul>
          {
            this.props.cards.map(item => {
              return <li>{item.emoji}</li>
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