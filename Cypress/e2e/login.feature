@Crowdar
Feature: Login and Cart

    Background:
        Given the user is on the login page

    @Login
    Scenario Outline: Login with different users
        Given the user logs in as "<userType>"
        Then the user should be on the home page

        Examples:
            | userType           |
            | standard           |
            | locked             |
            | problem            |
            | performance_glitch |
            | error              |
            | visual             |