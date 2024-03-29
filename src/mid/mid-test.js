const { runTests } = require("../helpers/run-tests");

const testFiles = [
  "src/mid/tests/mid-case-1.test.js",
  "src/mid/tests/mid-case-2.test.js",
  "src/mid/tests/mid-case-3.test.js",
  "src/mid/tests/mid-case-4.test.js",
  "src/mid/tests/mid-case-5.test.js",
  "src/mid/tests/mid-case-6.test.js",
];

runTests(testFiles);
