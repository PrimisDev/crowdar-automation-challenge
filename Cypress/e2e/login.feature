@Crowdar
Feature: Login and Cart

    Background:
        Given the user is on the login page

    @Login
    Scenario Outline: Login with different users
        Given the user logs in with "<username>" and "<password>"
        Then the user should be on the home page

        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | locked_out_user         | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
            | error_user              | secret_sauce |
            | visual_user             | secret_sauce |