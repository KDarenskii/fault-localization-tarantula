const { kmpSearch } = require("../knut");

test("test #1", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "BXY";
  expect(kmpSearch(text, pattern)).toEqual([5]);
});


