import React, { Component } from "react";
import { connect } from "react-redux"
import {
  ModalContainer,
  ModalContent,
  Card,
  Controls,
  Control,
  CardText,
  AuthorText,
  Emoji
} from "./style.js"
import * as actions from "../../actions"

class CardView extends Component {
  state = {
    text: '',
    author: '',
    emoji: '',
    cardNumber: null,
    originalText: ''
  }

  componentDidMount() {
    const { state } = this.props.location

    this.setState({
      ...state.card,
      originalText: state.card.text,
      cardNumber: state.index
    })
  }

  handleDelete = event => {
    event.stopPropagation()
    this.props.deleteCard(this.state)
    const { history } = this.props
    history.goBack()
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({ text: event.target.value })
  }

  back = event => {
    event.stopPropagation()
    const { history } = this.props
    history.goBack()
  }

  render() {
    const { text, author, emoji, originalText } = this.state
    const showSave = originalText !== text
    return (
      <ModalContainer>
        <ModalContent>
          <Card>
            <CardText value={text} onChange={this.handleChange}/>
            <AuthorText>Author: {author}</AuthorText>
            <Emoji>Mood: {emoji}</Emoji>
          </Card>
          <Controls>
            <Control onClick={this.handleDelete}>Delete</Control>
            {showSave && <Control>Save</Control>}
            <Control onClick={this.back}>Close</Control>
          </Controls>
        </ModalContent>
      </ModalContainer>
    );
  }
}

export default connect(null, actions)(CardView)

