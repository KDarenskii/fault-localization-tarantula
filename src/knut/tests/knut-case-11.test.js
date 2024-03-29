const { kmpSearch } = require("../knut");

it('test #11', () => {
  expect(kmpSearch('text', 'longerpattern')).toEqual([]);
});