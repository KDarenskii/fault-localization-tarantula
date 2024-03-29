const { kmpSearch } = require("../knut");

test("test #8", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "YBA";
  expect(kmpSearch(text, pattern)).toEqual([9]);
});
