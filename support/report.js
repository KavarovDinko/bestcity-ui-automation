const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0",
    "Test Environment": "LOCAL",
    "Browser": "Chrome",
    "Platform": "Linux",
    "Executed": "GitHub Actions"
  }
};

reporter.generate(options);
