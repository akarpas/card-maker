import React from "react";
import Root from "../../Root"
import { mount } from "enzyme"
import CardTools from "../CardTools/index.js"
import { BrowserRouter } from "react-router-dom"

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root initialState={{}}>
      <BrowserRouter>
        <CardTools />
      </BrowserRouter>
    </Root>
  )
})

it("renders without crashing", () => {
  wrapped.render()
});

it("includes five buttons, with five icons", () => {
  expect(wrapped.find("img").length).toEqual(5)
})