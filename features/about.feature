@smoke @regression
Feature: About page content

  Scenario Outline: Verify About page sections
    Given I open the About page
    Then section "<section>" should be visible

    Examples:
      | section |
      | Revolutionizing Real Estate Investment |
      | Our Mission |
      | Our Leadership Team |
      | Supported Cryptocurrencies |
      | Recognition & Achievements |
