import {capitalize} from "../index";

describe("A function that capitalizes phrases", () => {
  // given a phrase
  [
    ["empty string", "", ""],
    ["single character", "a", "A"],
    ["single ASCII word", "hello", "Hello"],
    ["single Unicode word", "èlo", "Èlo"],
    ["already capitalized word", "Hello", "Hello"],
    ["ASCII phrase", "hello world!", "Hello World!"],
    ["Unicode phrase", "world èlo", "World Èlo"],
  ].forEach((it) => {
    const [title, phrase, expected] = it
    test(`That ${title} is capitalized correctly`, () => {
      // when the phrase is capitalized
      const capitalized = capitalize(phrase)

      // then it is capitalized as expected
      expect(capitalized).toEqual(expected)
    })
  })
})