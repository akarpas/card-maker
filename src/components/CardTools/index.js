import React, { Component } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Link } from "react-router-dom"
import { Container, Button } from "./style"
import SaveIcon from "../../assets/save.png"
import LoadIcon from "../../assets/load.png"
import ExportIcon from "../../assets/export.png"
import ReloadIcon from "../../assets/reload.png"
import DownloadIcon from "../../assets/download.png"
import * as actions from "../../actions"

class CardTools extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  clear = event => {
    event.preventDefault()
    this.props.eraseCards()
  }

  load = event => {
    event.preventDefault()
    this.props.getCards()
  }

  download = event => {
    event.preventDefault()
    actions.fetchCards(this.props.dispatch)
  }

  render() {
    const { cards } = this.props
    const cardsJson = { ...cards }

    const data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cardsJson))

    return (
      <Container>
        <Button onClick={this.clear} src={ReloadIcon}></Button>
        <Button onClick={this.load} src={LoadIcon}></Button>
        <a href={`data:'${data}`} download="cards.json">
          <Button src={ExportIcon}></Button>
        </a>
        <Link to='/print'>
          <Button src={SaveIcon}></Button>
        </Link>
        <Button onClick={this.download} src={DownloadIcon}></Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards.cardList }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  dispatch,
  ...actions
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CardTools)
