const fs = require("fs");
const { COVERAGE_OUTPUT_PATH } = require("../constants/coverage-path");

function parseLcov() {
  const content = fs.readFileSync(COVERAGE_OUTPUT_PATH, "utf8");

  const lines = content.split("\n");

  const coveredLines = [];

  for (const line of lines) {
    if (line.startsWith("DA:")) {
      const [_, executionInfo] = line.split(":");
      const [lineNumber, executionCount] = executionInfo.split(",");
      if (executionCount > 0) {
        coveredLines.push(parseInt(lineNumber));
      }
    }
  }

  return coveredLines;
}

module.exports = { parseLcov };
