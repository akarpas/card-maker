import React from "react";
import { Route, BrowserRouter } from "react-router-dom"
import App from "../App";
import Title from "../Title"
import CardMaker from "../CardMaker"
import CardTools from "../CardTools"
import CardList from "../CardList"
import { mount } from "enzyme"
import Root from "../../Root"

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <BrowserRouter>
        <Route component={App} path="/"/>
      </BrowserRouter>
    </Root>
  )
})

it("renders without crashing", () => {
  wrapped.render()
});

it("includes 4 components", () => {
  expect(wrapped.find(Title).length).toEqual(1)
  expect(wrapped.find(CardMaker).length).toEqual(1)
  expect(wrapped.find(CardList).length).toEqual(1)
  expect(wrapped.find(CardTools).length).toEqual(1)
})