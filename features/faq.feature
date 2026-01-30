@smoke
Feature: FAQ Page

  Scenario: Expand first FAQ question
    Given I open the FAQ page
    Then FAQ heading should be visible
    When I click first FAQ question
    Then FAQ answer should be displayed
