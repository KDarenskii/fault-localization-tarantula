const { kmpSearch } = require("../knut");

test("test #12", () => {
  expect(kmpSearch("", "pattern")).toEqual([]);
  expect(kmpSearch("text", "")).toEqual([]);
});
