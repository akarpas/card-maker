import React from 'react';
import { shallow } from 'enzyme'
import CardMaker from '../CardMaker'

let wrapped

beforeEach(() => {
  wrapped = shallow(<CardMaker />)
})

it('renders without crashing', () => {
  wrapped.render()
});

it('includes a form with three fields', () => {
  expect(wrapped.find('[name="text"]').length).toEqual(1)
  expect(wrapped.find('[type="textarea"]').length).toEqual(1)
  expect(wrapped.find('[name="author"]').length).toEqual(1)
  expect(wrapped.find('[type="text"]').length).toEqual(1)
  expect(wrapped.find('[name="emoji"]').length).toEqual(1)
  expect(wrapped.find('option').length).toEqual(3)
})


describe('the text area', () => {
  it('includes a submit button', () => {
    expect(wrapped.find('[type="submit"]').length).toEqual(1)
  })

  it('resets inputs on submit', () => {
    wrapped.find('[type="text"]').simulate('change', {
      target: { value: 'Some text' }
    })
    wrapped.update()
    wrapped.find('[type="submit"]').simulate('submit')
    wrapped.update()
    expect(wrapped.find('[name="text"]').prop('value')).toEqual('')
    expect(wrapped.find('[name="author"]').prop('value')).toEqual('')
    expect(wrapped.find('[name="emoji"]').prop('value')).toEqual('smiley')
  })
})