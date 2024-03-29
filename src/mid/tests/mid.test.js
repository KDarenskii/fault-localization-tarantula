const { mid } = require("../mid");

test("test #1", () => {
  expect(mid(3, 3, 5)).toBe(3);
});

test("test #2", () => {
  expect(mid(1, 2, 3)).toBe(2);
});

test("test #3", () => {
  expect(mid(3, 2, 1)).toBe(2);
});

test("test #4", () => {
  expect(mid(5, 5, 5)).toBe(5);
});

test("test #5", () => {
  expect(mid(5, 3, 4)).toBe(4);
});

test("test #6", () => {
  expect(mid(2, 1, 3)).toBe(2);
});
