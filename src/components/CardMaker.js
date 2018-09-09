import React, { Component } from "react";
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid white;
  border-radius: 2%;
  padding: 1vh 1vw;
  width: 70%;
`
const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px;
`

const Label = styled.label`
  font-size: 20px;
  padding: 10px 0 10px 0;
`

const TextArea = styled.textarea`
  font-size: 20px;
`

const StyledInput = styled.input`
  font-size: 20px;
`

const StyledSelect = styled.select`
  font-size: 20px;
  background-color: white;
  border-radius: 0;
`

const Button = styled.button`
  border: 2px solid white;
  background-color: grey;
  padding: 10px;
  margin: 20px;
  font-size: 30px;
`
class CardMaker extends Component {
  state = {
    text: '',
    author: '',
    emoji: 'smiley'
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      text: '',
      author: '',
      emoji: 'smiley'
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Container>
        <Form id="form" onSubmit={this.handleSubmit}>
          <Label>Card Text</Label>
          <TextArea
            id="text"
            name="text"
            type="textarea"
            placeholder="Add text to your card"
            value={this.state.text}
            onChange={this.handleChange}
            required
          />
          <Label>Author</Label>
          <StyledInput
            name="author"
            component="input"
            type="text"
            value={this.state.author}
            onChange={this.handleChange}
            placeholder="Name"
            required
          />
          <Label>Mood</Label>
          <StyledSelect
            name="emoji"
            required
            component="select"
            onChange={this.handleChange}
            value={this.state.emoji}
          >
            <option value="smiley">Smiley</option>
            <option value="angry">Angry</option>
            <option value="sad">Sad</option>
          </StyledSelect>
          <Button type="submit"> Create </Button>
        </Form>
      </Container>
    );
  }
}

export default (CardMaker)
