const { kmpSearch } = require("../knut");

it("test #13", () => {
  expect(kmpSearch("ABCABCDABABCDABCDABDE", "XYZ")).toEqual([]);
  expect(kmpSearch("ABCABCDABABCDABCDABDE", "ZZZ")).toEqual([]);
});
