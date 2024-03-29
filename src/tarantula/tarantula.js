const fs = require("fs");
const { getTestsData } = require("../helpers/get-tests-data");
const {
  SUSPICIOUSNESS_REPORT_PATH,
} = require("../constants/suspiciousness-report-path");

function getUniqueLines(testResults) {
  const uniqueLines = new Set();
  testResults.forEach((test) =>
    test.lines.forEach((line) => uniqueLines.add(line))
  );
  return Array.from(uniqueLines);
}

function totalFailed(testResults) {
  const totalFailedCount = testResults.reduce((count, test) => {
    return test.status === "failed" ? count + 1 : count;
  }, 0);

  return totalFailedCount;
}

function totalPassed(testResults) {
  const totalPassedCount = testResults.reduce((count, test) => {
    return test.status === "passed" ? count + 1 : count;
  }, 0);

  return totalPassedCount;
}

function failed(line, testResults) {
  const lineFailedCount = testResults.reduce((count, test) => {
    if (test.status === "failed" && test.lines.includes(line)) {
      return count + 1;
    }
    return count;
  }, 0);
  return lineFailedCount;
}

function passed(line, testResults) {
  const lineSuccessCount = testResults.reduce((count, test) => {
    if (test.status === "passed" && test.lines.includes(line)) {
      return count + 1;
    }
    return count;
  }, 0);
  return lineSuccessCount;
}

function suspiciousness(failed, totalFailed, passed, totalPassed) {
  if (totalPassed === 0) {
    return 1.0;
  }

  if (totalFailed === 0) {
    return 0.0;
  }

  const numerator = failed / totalFailed;
  const denominator = passed / totalPassed + failed / totalFailed;

  if (denominator === 0) {
    return 0.0;
  }

  return numerator / denominator;
}

function makeRanking(suspiciousness) {
  const sortedSuspiciousness = [...suspiciousness].sort(
    (a, b) => b.suspiciousness - a.suspiciousness
  );

  const rankedSuspiciousness = sortedSuspiciousness.map(
    (result, _, originalArray) => {
      const rank =
        originalArray.findIndex(
          (o) => o.suspiciousness === result.suspiciousness
        ) + 1;

      return { ...result, rank };
    }
  );

  return rankedSuspiciousness;
}

function saveReport(rankedSuspiciousness) {
  let report = "";

  rankedSuspiciousness.forEach(({ line, suspiciousness, rank }, index) => {
    const numberInfo = `${index + 1})`;
    const lineInfo = `Line: ${line};`;
    const suspiciousnessInfo = `Suspiciousness = ${suspiciousness.toFixed(3)};`;
    const rankInfo = `Rank = ${rank}`;

    const reportLine = [
      numberInfo,
      lineInfo,
      suspiciousnessInfo,
      rankInfo,
    ].join(" ");

    console.log(reportLine);

    report += reportLine + "\n";
  });

  fs.writeFileSync(SUSPICIOUSNESS_REPORT_PATH, report, "utf-8");
}

function tarantula() {
  const testResults = getTestsData();

  const suspiciousnessArray = [];

  const totalFailedCount = totalFailed(testResults);
  const totalPassedCount = totalPassed(testResults);

  const uniqueLines = getUniqueLines(testResults);

  uniqueLines.forEach((line) => {
    const failedCount = failed(line, testResults);
    const passedCount = passed(line, testResults);

    const suspiciousnessValue = suspiciousness(
      failedCount,
      totalFailedCount,
      passedCount,
      totalPassedCount
    );

    suspiciousnessArray.push({
      line,
      suspiciousness: suspiciousnessValue,
    });
  });

  const rankedSuspiciousness = makeRanking(suspiciousnessArray);

  saveReport(rankedSuspiciousness);
}

tarantula();

// [
//   { "test": "test #1", "status": "passed", "lines": [2, 3, 4, 6, 7, 16, 19] },
//   { "test": "test #2", "status": "passed", "lines": [2, 3, 4, 5, 16, 19] },
//   { "test": "test #3", "status": "passed", "lines": [2, 3, 10, 11, 16, 19] },
//   { "test": "test #4", "status": "passed", "lines": [2, 3, 10, 12, 16, 19] },
//   { "test": "test #5", "status": "passed", "lines": [2, 3, 4, 6, 16, 19] },
//   { "test": "test #6", "status": "failed", "lines": [2, 3, 4, 6, 7, 16, 19] }
// ]
