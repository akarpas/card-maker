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
    emoji: ''
  }

  componentDidMount() {
    const { state, pathname } = this.props.location
    const cardNumber = pathname.split('/')[2]

    this.setState({ ...state })
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({ text: event.target.value })
  }

  render() {
    const { text, author, emoji } = this.state
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
            <Control>Save</Control>
            <Control>Close</Control>
          </Controls>
        </ModalContent>
      </ModalContainer>
    );
  }
}
