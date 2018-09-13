import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Root from "../../Root"
import { mount } from "enzyme"
import PrintView from "../PrintView/index.js"
import styled from "styled-components"

let wrapped

beforeEach(() => {
  const initialState = {
    cards: {
      cardList: [
        {
          "text": "Card 1",
          "author": "one",
          "emoji": "smiley"
        },
        {
          "text": "Card 2",
          "author": "two",
          "emoji": "angry"
        }
      ]
    }
  }
  wrapped = mount(
    <Root initialState={initialState}>
      <BrowserRouter>
        <PrintView />
      </BrowserRouter>
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})


it("renders without crashing", () => {
  wrapped.render()
});

it("includes a divToPrint div", () => {
  expect(wrapped.find("#divToPrint").hostNodes().length).toEqual(1)
});

it("creates two cards", () => {
  expect(wrapped.find("p").length).toEqual(2)
  expect(wrapped.render().text()).toContain("Card 1")
  expect(wrapped.render().text()).toContain("Card 2")
})