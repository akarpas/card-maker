import React from "react";
import Root from "../../Root"
import { mount } from "enzyme"
import CardView from "../CardView/index.js"

let wrapped

beforeEach(() => {
  const location = {
    pathname: '/card/1',
    state: {
      card: {
        text: 'Test',
        author: 'Someone',
        emoji: 'smiley',
        cardNumber: 1,
        originalText: 'Someone'
      },
      index: 1
    }
  }
  wrapped = mount(
    <Root initialState={{}}>
      <CardView location={location}/>
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it("renders without crashing", () => {
  wrapped.render()
});

it("renders all text", () => {
  expect(wrapped.render().text()).toContain("Someone")
})

it("has a text area with the correct text", () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('textarea').text()).toEqual("Test")
})