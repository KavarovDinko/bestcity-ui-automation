module.exports = {
  default: {
    require: [
      "step_definitions/**/*.js",
      "support/**/*.js"
    ],
    format: [
      "progress",
      "json:reports/cucumber-report.json"
    ],
    publishQuiet: true,
    timeout: 60000
  }
};
