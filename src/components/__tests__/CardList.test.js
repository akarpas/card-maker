import React from "react";
import Root from "../../Root"
import { mount } from "enzyme"
import CardList from "../CardList/index.js"

let wrapped

beforeEach(() => {
  const initialState = {
    cards: [
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
  wrapped = mount(
    <Root initialState={initialState}>
      <CardList />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})


it("renders without crashing", () => {
  wrapped.render()
});

describe("lists the cards", () => {
  it("creates two cards", () => {
    expect(wrapped.find(".card").length).toEqual(2)
  })

  it("creates two titles with correct text", () => {
    expect(wrapped.find("p").length).toEqual(2)
    expect(wrapped.render().text()).toContain("Card 1")
    expect(wrapped.render().text()).toContain("Card 2")
  })
})