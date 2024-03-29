const { kmpSearch } = require("../knut");

it("test #12", () => {
  expect(kmpSearch("", "pattern")).toEqual([]);
  expect(kmpSearch("text", "")).toEqual([]);
});
