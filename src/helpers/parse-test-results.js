const fs = require("fs");
const { RESULT_OUTPUT_PATH } = require("../constants/results-path");

function parseTestResults() {
  const fileSource = fs.readFileSync(RESULT_OUTPUT_PATH, "utf8");
  const parsedData = JSON.parse(fileSource);

  const { title, status } = parsedData.testResults[0].assertionResults[0];

  return { title, status };
}

module.exports = { parseTestResults };
