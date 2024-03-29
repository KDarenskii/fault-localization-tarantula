const { kmpSearch } = require("../knut");

test("test #1", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "BXY";
  expect(kmpSearch(text, pattern)).toEqual([5]);
});

test("test #2", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "ABC";
  expect(kmpSearch(text, pattern)).toEqual([0]);
});

test("test #3", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "YBA";
  expect(kmpSearch(text, pattern)).toEqual([9]);
});

test("test #4", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "XYZ";
  expect(kmpSearch(text, pattern)).toEqual([]);
});

test("test #5", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "A";
  expect(kmpSearch(text, pattern)).toEqual([0, 4, 11]);
});

test("test #5", () => {
  const text = "ABCDABXZYXYBA";
  const pattern = "Z";
  expect(kmpSearch(text, pattern)).toEqual([7]);
});

test("test #6", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "ABCDABXYXYBA";
  expect(kmpSearch(text, pattern)).toEqual([0]);
});

test("test #7", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "ABCDABXYXYBAGD";
  expect(kmpSearch(text, pattern)).toEqual([]);
});

test("test #8", () => {
  const text = "ABCDABXYXYBA";
  const pattern = "YBA";
  expect(kmpSearch(text, pattern)).toEqual([9]);
});

test("test #9", () => {
  expect(kmpSearch("ABCDABCDABCDABCD", "ABCD")).toEqual([0, 4, 8, 12]);
  expect(kmpSearch("ABCDABCDABCDABCD", "ABCDABCD")).toEqual([0, 4, 8]);
  expect(kmpSearch("ABCDABCDABCDABCD", "BCD")).toEqual([1, 5, 9, 13]);
});

test("test #10", () => {
  expect(kmpSearch("ABCABCDABABCDABCDABDE", "ABCDABD")).toEqual([13]);
  expect(kmpSearch("AAAAAAA", "AAA")).toEqual([0, 1, 2, 3, 4]);
  expect(kmpSearch("ABCABCDABABCDABCDABDE", "ABDE")).toEqual([17]);
});

test("test #11", () => {
  expect(kmpSearch("text", "longerpattern")).toEqual([]);
});

test("test #12", () => {
  expect(kmpSearch("", "pattern")).toEqual([]);
  expect(kmpSearch("text", "")).toEqual([]);
});

test("test #13", () => {
  expect(kmpSearch("ABCABCDABABCDABCDABDE", "XYZ")).toEqual([]);
  expect(kmpSearch("ABCABCDABABCDABCDABDE", "ZZZ")).toEqual([]);
});
