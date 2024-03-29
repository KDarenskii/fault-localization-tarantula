const { kmpSearch } = require("../knut");

it("test #10", () => {
  expect(kmpSearch("ABCABCDABABCDABCDABDE", "ABCDABD")).toEqual([13]);
  expect(kmpSearch("AAAAAAA", "AAA")).toEqual([0, 1, 2, 3, 4]);
  expect(kmpSearch("ABCABCDABABCDABCDABDE", "ABDE")).toEqual([17]);
});
