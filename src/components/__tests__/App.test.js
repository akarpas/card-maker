import React from 'react';
import { shallow } from 'enzyme'
import App from '../App';
import Title from '../Title'
import CardMaker from '../CardMaker'
import CardTools from '../CardTools'
import CardList from '../CardList'

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('renders without crashing', () => {
  wrapped.render()
});

it('includes 4 components', () => {
  expect(wrapped.find(Title).length).toEqual(1)
  expect(wrapped.find(CardMaker).length).toEqual(1)
  expect(wrapped.find(CardList).length).toEqual(1)
  expect(wrapped.find(CardTools).length).toEqual(1)
})