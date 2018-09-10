import React, { Component } from "react";
import { connect } from "react-redux"
import { Container, Button } from "./style"
import SaveIcon from "../../assets/save.png"
import ExportIcon from "../../assets/export.png"
import ReloadIcon from "../../assets/reload.png"
import * as actions from "../../actions"

class CardTools extends Component {
  clear = event => {
    event.preventDefault()
    this.props.eraseCards()
  }

  load = event => {
    event.preventDefault()
    this.props.getCards()
  }

  render() {
    const { cards } = this.props
    const cardsJson = {...cards}

    const data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cardsJson))

    return (
      <Container>
        <Button onClick={this.clear} src={ReloadIcon}></Button>
        <Button onClick={this.load} src={SaveIcon}></Button>
        <a href={`data:'${data}'`} download="cards.json">
          <Button src={ExportIcon}></Button>
        </a>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards }
}

export default connect(mapStateToProps, actions)(CardTools)
