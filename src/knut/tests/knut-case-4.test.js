const { kmpSearch } = require("../knut");

test("test #4", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "XYZ";
  expect(kmpSearch(text, pattern)).toEqual([]);
});
