const { kmpSearch } = require("../knut");

test("test #3", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "YBA";
  expect(kmpSearch(text, pattern)).toEqual([9]);
});
