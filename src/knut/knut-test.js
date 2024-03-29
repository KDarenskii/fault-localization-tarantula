const { runTests } = require("../helpers/run-tests");

const testFiles = [
  "src/knut/tests/knut-case-1.test.js",
  "src/knut/tests/knut-case-2.test.js",
  "src/knut/tests/knut-case-3.test.js",
  "src/knut/tests/knut-case-4.test.js",
  "src/knut/tests/knut-case-5.test.js",
  "src/knut/tests/knut-case-6.test.js",
  "src/knut/tests/knut-case-7.test.js",
  "src/knut/tests/knut-case-8.test.js",
  "src/knut/tests/knut-case-9.test.js",
  "src/knut/tests/knut-case-10.test.js",
  "src/knut/tests/knut-case-11.test.js",
  "src/knut/tests/knut-case-12.test.js",
  "src/knut/tests/knut-case-13.test.js",
];

runTests(testFiles);
