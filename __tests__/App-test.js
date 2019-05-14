/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../App";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

import task1 from "../src/functions/task1";
import task2 from "../src/functions/task2";

import task1Test from "./task1";

// it("renders correctly", () => {
//   renderer.create(<App />);
// });

test("Task 1 Unit Test ", () => {
  // task1Test.forEach(test => {
  //   console.log(test);
  //   expect(task1(test.input)).toBe(test.answer);
  // });
  expect(task1(task1Test[0].input)).toBe(task1Test[0].answer);
});
