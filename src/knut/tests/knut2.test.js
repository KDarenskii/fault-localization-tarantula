const { kmpSearch } = require("../knut");

test("test #2", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "ABC";
  expect(kmpSearch(text, pattern)).toEqual([0]);
});
