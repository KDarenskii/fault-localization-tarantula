const { kmpSearch } = require("../knut");

test("test #7", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "ABCDABXYXYBAGD";
  expect(kmpSearch(text, pattern)).toEqual([]);
});
