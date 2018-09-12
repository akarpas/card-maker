import React from "react";
import { 
  DrawerButton,
  TextArea,
  Label,
  StyledInput,
  Form,
  Button,
  Notice,
  Radios,
  RadioInput,
  RadioButton,
  RadioLabelA,
  RadioLabelB,
  RadioLabelC,
  EmojiIcon
} from "./style"
import { reduxForm } from "redux-form"
import ExpandLessIcon from "../../assets/expandLess.png"
import SmileyIcon from "../../assets/laugh.png"
import AngryIcon from "../../assets/angry.png"
import SadIcon from "../../assets/sad.png"

let ReduxForm = props => {
  const { text, author, emoji, handleClick, handleSubmit, limit, setChecked } = props

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
        type="text"
      />
      <Label>Mood</Label>
      <Radios>
        <RadioButton>
          <RadioInput
            checked={emoji === 'smiley'}
            onClick={(e) => setChecked(e, 'smiley')}
            component="input"
            type="radio"
            name="emoji"
            value="smiley"
            id="smiley" 
          />
          <RadioLabelA><EmojiIcon src={SmileyIcon}/></RadioLabelA>
        </RadioButton>
        <RadioButton>
          <RadioInput
            checked={emoji === 'angry'}
            onClick={(e) => setChecked(e, 'angry')}
            component="input"
            type="radio"
            name="emoji"
            value="angry"
            id="angry"
          />
          <RadioLabelB><EmojiIcon src={AngryIcon}/></RadioLabelB>
        </RadioButton>
        <RadioButton>
          <RadioInput
            checked={emoji === 'sad'}
            onClick={(e) => setChecked(e, 'sad')}
            component="input"
            type="radio"
            name="emoji"
            value="sad"
            id="sad"
          />
          <RadioLabelC><EmojiIcon src={SadIcon}/></RadioLabelC>
        </RadioButton>
      </Radios>
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
