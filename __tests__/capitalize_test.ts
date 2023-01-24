import {evaluate} from "../index";

interface TestData {
  title: string
  expression: string
  expected: number
}

describe("A function that evaluates mathematical expressions", () => {
  [
    [ "a single digit", "0", 0],
    // ["a simple addition", "1 + 2", 3],
    // ... more tests here
    // ["a complex expression", "(1 + 2) * 5 / 2 + -3 * 7", -14],
  ]
      // given an expression
      .forEach((it: [string, string, number]) => {
        const [title, expression, expected] = it;
        test(`That ${title} is evaluated correctly`, () => {
          // when the expression is evaluated
          const result = evaluate(expression);

          // then the result is correct
          expect(result).toEqual(expected);
        });
      });
});
