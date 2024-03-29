const jest = require("jest");
const fs = require("fs");

const { parseLcov } = require("../helpers/parse-lcov");
const { parseTestResults } = require("../helpers/parse-test-results");
const { saveJSON } = require("./save-json");

const { RESULT_OUTPUT_PATH } = require("../constants/results-path");
const { TEST_DATA_PATH } = require("../constants/test-data");

const testFiles = [
  "src/mid/tests/mid1.test.js",
  "src/mid/tests/mid2.test.js",
  "src/mid/tests/mid3.test.js",
  "src/mid/tests/mid4.test.js",
  "src/mid/tests/mid5.test.js",
  "src/mid/tests/mid6.test.js",
];

async function startTests() {
  const testPromises = [];

  testFiles.forEach((file) => {
    const testPromise = jest
      .run([
        file,
        "--coverage",
        "--json",
        `--outputFile=${RESULT_OUTPUT_PATH}`,
        "--runInBand",
      ])
      .then(() => {
        console.log(`====== FILE: ${file} ==========`);
        const coveredLines = parseLcov();
        console.log("COVERED LINES", coveredLines);
        const testResult = parseTestResults();
        console.log("RESULT", testResult);
        return {
          test: testResult.title,
          status: testResult.status,
          lines: coveredLines,
        };
      });

    testPromises.push(testPromise);
  });

  const result = await Promise.all(testPromises);

  saveJSON(TEST_DATA_PATH, result);

  const jsonResult = JSON.stringify(result);

  fs.writeFileSync(TEST_DATA_PATH, jsonResult, "utf-8");
}

startTests();
