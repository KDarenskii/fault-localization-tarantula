const { kmpSearch } = require("../knut");

test("test #6", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "ABCDABXYXYBA";
  expect(kmpSearch(text, pattern)).toEqual([0]);
});
