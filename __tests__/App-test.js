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

import TestCases from "../UnitTestCase";

// it("renders correctly", () => {
//   renderer.create(<App />);
// });

test("Task 1 Unit Test ", () => {
  TestCases.Test1Cases.forEach(test => {
    expect(task1(test.input)).toStrictEqual(test.answer);
  });
});

test("Task 2 Unit Test ", () => {
  TestCases.Test2Cases.forEach(test => {
    expect(task2(test.input.n, test.input.m)).toStrictEqual(test.answer);
  });
});
