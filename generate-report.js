const reporter = require('cucumber-html-reporter');

reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  screenshotsDirectory: 'screenshots',
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: true
});
