@SearchFunction
Feature: Searching location

  @TC-02
  Scenario: Validate the search box takes a maximum length of text for which it is designed
    Given user is on search screen
    When user enters the keyword "Vietnam Abiera Abangay SantoTolosa Lamisahan Landang"
    Then user is unable to enter more than "50" characters into search box

  @TC-03
  Scenario: Validate search rules defined for  "Start with" the search key word
    Given user is on search screen
    When user enters the keyword "Aban"
    Then search result shows all cities that have the name start with "Aban"
    And user views detail location of first city

  @TC-04 @TC-05
  Scenario Outline: Validate search rules when keyword starts with/ends with space
    Given user is on search screen
    When user enters the "<keyword>"
    Then search result shows all cities that have the name start with "Baak"
    Examples:
      | keyword |
      | ' Baak' |
      | 'Abu '  |

  @TC-06 @TC-11
  Scenario: Validate search rules defined for "not case sensitive"
    Given user is on search screen
    When user enters the "a dos"
    Then search result shows all cities have the name starts with "a dos" ignore case

