const jest = require("jest");
const fs = require("fs");

const { parseLcov } = require("./parse-lcov");
const { parseTestResults } = require("./parse-test-results");

const { RESULT_OUTPUT_PATH } = require("../constants/results-path");
const { TEST_DATA_PATH } = require("../constants/test-data");

async function runTests(testFiles) {
  const testPromises = [];

  testFiles.forEach((file) => {
    const testPromise = jest
      .run([file, "--coverage", "--json", `--outputFile=${RESULT_OUTPUT_PATH}`])
      .then(() => {
        const coveredLines = parseLcov();
        const testResult = parseTestResults();
        return {
          test: testResult.title,
          status: testResult.status,
          lines: coveredLines,
        };
      });

    testPromises.push(testPromise);
  });

  const result = await Promise.all(testPromises);

  const jsonResult = JSON.stringify(result);

  fs.writeFileSync(TEST_DATA_PATH, jsonResult, "utf-8");
}

module.exports = { runTests };
