import React from "react";
import Root from "../../Root"
import { mount } from "enzyme"
import CardMaker from "../CardMaker/index.js"
import ReduxForm from "../ReduxForm/index.js"

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CardMaker />
    </Root>
  )
})

it("renders without crashing", () => {
  wrapped.render()
});

it("includes a form with three inputs and three options for select", () => {
  expect(wrapped.find("textarea").length).toEqual(1)
  expect(wrapped.find("input").length).toEqual(1)
  expect(wrapped.find("select").length).toEqual(1)
  expect(wrapped.find("option").length).toEqual(3)
})


describe("the text area", () => {
  it("includes a submit button", () => {
    expect(wrapped.find("button").length).toEqual(1)
  })

  it("resets inputs on submit", () => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "Some text" }
    })
    wrapped.update()
    wrapped.find(ReduxForm).simulate("submit")
    wrapped.update()
    expect(wrapped.find("textarea").prop("value")).toEqual("")
    expect(wrapped.find("input").prop("value")).toEqual("")
    expect(wrapped.find("select").prop("value")).toEqual("")
  })
})
