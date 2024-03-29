const { kmpSearch } = require("../knut");

test("test #11", () => {
  expect(kmpSearch("text", "longerpattern")).toEqual([]);
});
