@smoke @regression
Feature: Properties Page

  Scenario: Validate properties page and cards
    Given I open the Properties page
    Then Properties heading should be visible
    And at least 3 property cards should be displayed
    And Footer should be visible on properties page
