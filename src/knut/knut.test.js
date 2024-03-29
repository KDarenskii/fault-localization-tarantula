const { kmpSearch } = require("./knut");

describe("KMP Search Algorithm", () => {
  test("test #1", () => {
    const text = "ABCDABXYXYBA";
    const pattern = "BXY";
    expect(kmpSearch(text, pattern)).toEqual([5]);
  });

  // test("test #2", () => {
  //   const text = "ABCDABXYXYBA";
  //   const pattern = "ABC";
  //   expect(kmpSearch(text, pattern)).toEqual([0]);
  // });

  // test("test #3", () => {
  //   const text = "ABCDABXYXYBA";
  //   const pattern = "YBA";
  //   expect(kmpSearch(text, pattern)).toEqual([9]);
  // });

  test("test #4", () => {
    const text = "ABCDABXYXYBA";
    const pattern = "XYZ";
    expect(kmpSearch(text, pattern)).toEqual([]);
  });

  // test("test #5", () => {
  //   const text = "ABCDABXYXYBA";
  //   const pattern = "A";
  //   expect(kmpSearch(text, pattern)).toEqual([0, 4, 11]);
  // });

  // test("test #5", () => {
  //   const text = "ABCDABXZYXYBA";
  //   const pattern = "Z";
  //   expect(kmpSearch(text, pattern)).toEqual([7]);
  // });

  // test("test #6", () => {
  //   const text = "ABCDABXYXYBA";
  //   const pattern = "ABCDABXYXYBA";
  //   expect(kmpSearch(text, pattern)).toEqual([0]);
  // });

  // test("test #7", () => {
  //   const text = "ABCDABXYXYBA";
  //   const pattern = "ABCDABXYXYBAGD";
  //   expect(kmpSearch(text, pattern)).toEqual([]);
  // });

  // test("test #7", () => {
  //   const text = "ABCDABXYXYBA";
  //   const pattern = "YBA";
  //   expect(kmpSearch(text, pattern)).toEqual([9]);
  // });
});
