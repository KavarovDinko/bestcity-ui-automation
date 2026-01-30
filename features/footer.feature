@regression
Feature: Footer Links

  Scenario Outline: Validate footer links
    Given I open the home page
    When I click footer link "<link>"
    Then I should be navigated to "<path>"

    Examples:
      | link           | path        |
      | Properties     | /properties |
      | About Us       | /about      |
      | FAQ            | /faq        |
      | Privacy Policy | /privacy    |
