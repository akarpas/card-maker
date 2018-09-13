import React from "react";
import Root from "../../Root"
import { mount } from "enzyme"
import CardMaker from "../CardMaker/index.js"

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CardMaker />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it("renders without crashing", () => {
  wrapped.render()
});

it("includes a form with a text area and three inputs", () => {
  expect(wrapped.find("textarea").length).toEqual(1)
  expect(wrapped.find("[type='text']").hostNodes().length).toEqual(1)
  expect(wrapped.find("[type='radio']").hostNodes().length).toEqual(3)
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
    wrapped.find("form").simulate("submit")
    wrapped.update()
    expect(wrapped.find("textarea").prop("value")).toEqual("")
    expect(wrapped.find("[type='text']").hostNodes().prop("value")).toEqual("")
    expect(wrapped.find("#smiley").hostNodes().prop("value")).toEqual("smiley")
  })
})
