@smoke @regression
Feature: Home Page

  Scenario: Validate all home sections
    Given I open the home page
    Then Header should be visible
    And hero section should be visible
    And Start Investing section should be visible
    And How BestCity Works section should be visible
    And Featured Opportunities section should be visible
    And FAQ section should be visible
    And Footer should be visible
