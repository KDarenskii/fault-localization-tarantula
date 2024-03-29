const { kmpSearch } = require("../knut");

it("test #9", () => {
  expect(kmpSearch("ABCDABCDABCDABCD", "ABCD")).toEqual([0, 4, 8, 12]);
  expect(kmpSearch("ABCDABCDABCDABCD", "ABCDABCD")).toEqual([0, 4, 8]);
  expect(kmpSearch("ABCDABCDABCDABCD", "BCD")).toEqual([1, 5, 9, 13]);
});
