import React from "react";
import { 
  DrawerButton,
  TextArea,
  Label,
  StyledInput,
  StyledSelect,
  Form,
  Button,
  Notice
} from "./style"
import { reduxForm } from "redux-form"
import ExpandLessIcon from "../../assets/expandLess.png"

let ReduxForm = props => {
  const { text, author, emoji, handleClick, handleSubmit, limit } = props
  return (
    <Form id="form" onSubmit={handleSubmit}>
      <Label>Card Text</Label>
      <TextArea
        name="text"
        component="textarea"
        placeholder="Add text to your card"
        value={text}
        required
      />
      <Label>Author</Label>
      <StyledInput
        name="author"
        component="input"
        value={author}
        placeholder="Name"
        required
      />
      <Label>Mood</Label>
      <StyledSelect
        name="emoji"
        required
        component="select"
        value={emoji}
      >
        <option value="smiley">Smiley</option>
        <option value="angry">Angry</option>
        <option value="sad">Sad</option>
      </StyledSelect>
      {!limit ?
        <Button type="submit"> Create </Button> :
        <Notice> Up to 20 Cards at a time! </Notice>}
      <DrawerButton src={ExpandLessIcon} onClick={handleClick}/>
    </Form>
  );
}

ReduxForm = reduxForm({
  form: 'create'
})(ReduxForm)

export default ReduxForm
