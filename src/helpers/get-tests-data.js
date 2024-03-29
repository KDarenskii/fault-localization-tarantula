const fs = require("fs");
const { TEST_DATA_PATH } = require("../constants/test-data");

function getTestsData() {
  const fileSource = fs.readFileSync(TEST_DATA_PATH, "utf8");
  const parsedData = JSON.parse(fileSource);
  return parsedData;
}

module.exports = { getTestsData };
