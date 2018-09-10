import React, { Component } from "react";
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

export default class CardView extends Component {
  state = {
    text: '',
    author: '',
    emoji: '',
    originalText: ''
  }

  componentDidMount() {
    const { state, pathname } = this.props.location

    this.setState({ ...state, originalText: state.text })
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
            <Control>Delete</Control>
            {showSave && <Control>Save</Control>}
            <Control onClick={this.back}>Close</Control>
          </Controls>
        </ModalContent>
      </ModalContainer>
    );
  }
}
