const { kmpSearch } = require("../knut");

test("test #5", () => {
  const text = "ABCDABXZYXYBA";
  const pattern = "Z";
  expect(kmpSearch(text, pattern)).toEqual([7]);
});
