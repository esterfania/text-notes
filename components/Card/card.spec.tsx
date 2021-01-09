import React from "react";
test("hello world", () => {
  const wrapper = "Hello Jest!";
  expect(wrapper).toMatch("Hello Jest!");
});
