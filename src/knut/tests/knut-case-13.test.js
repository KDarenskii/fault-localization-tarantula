const { kmpSearch } = require("../knut");

test("test #13", () => {
  expect(kmpSearch("ABCABCDABABCDABCDABDE", "XYZ")).toEqual([]);
  expect(kmpSearch("ABCABCDABABCDABCDABDE", "ZZZ")).toEqual([]);
});
